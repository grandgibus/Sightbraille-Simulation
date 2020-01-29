#include <Arduino.h>

#define HOMING_SWITCH_PIN 2
#define PRESENCE_SENSOR_PIN 3
#define SOLENOID_PIN 4
#define EMERGENCY_BUTTON_PIN 5

#define MICROBIT_OUT_PIN 6
#define MICROBIT_IN_PIN 7

#define X_AXIS_MOTOR_STEP_PIN 8
#define X_AXIS_MOTOR_DIR_PIN 9
#define X_AXIS_MOTOR_ENABLE_PIN 10

#define Y_AXIS_MOTOR_STEP_PIN 11
#define Y_AXIS_MOTOR_DIR_PIN 12
#define Y_AXIS_MOTOR_ENABLE_PIN 13

#define DISTANCE_PER_STEP_X (8.0F / 200.0F) //Millimeters per full rotation divided by number of steps
#define DISTANCE_PER_STEP_Y 0.1F //TODO - Permieter of wheel divied by number of steps

#define DISTANCE_X_FROM_HOMING_SENSOR 50.0F //TODO - Distance (negative) from origin (right side of sheet) to homing sensor
#define STEPS_X_FROM_HOMING_SENSOR DISTANCE_X_FROM_HOMING_SENSOR / DISTANCE_PER_STEP_X

#define SOLENOID_TRIGGER_TIME 200

#define NUMBER_OF_LINES 20
#define NUMBER_OF_COLUMNS 25

#define NO_POINT false
#define POINT true

#define RIGHT true
#define LEFT false
#define UP true
#define DOWN false

#define SPEED_X 50
#define STEP_TIME_MICROSECONDS_X DISTANCE_PER_STEP_X / SPEED_X

#define SPEED_Y 30
#define STEP_TIME_MICROSECONDS_Y DISTANCE_PER_STEP_Y / SPEED_Y

bool emergencyStop = false;

bool isPrinting = false;
bool isHoming = false;
bool isStopping = false;

bool data[NUMBER_OF_LINES][NUMBER_OF_COLUMNS];
int numberOfPoints = 0;

int pointDestX = 0;
int pointDestY = 0;
bool shouldHit;
bool findNextPoint;
bool solenoidDelayStarted = false;

int stepsX = -1;
int stepsY = -1;

int targetStepsX;
int targetStepsY;

int counter = 0;

int totalAmountOfPoints;
int amountOfPointsPunched;

void setup() {
  pinMode(HOMING_SWITCH_PIN, INPUT);
  pinMode(PRESENCE_SENSOR_PIN, INPUT);
  pinMode(SOLENOID_PIN, OUTPUT);
  pinMode(EMERGENCY_BUTTON_PIN, INPUT);

  pinMode(MICROBIT_OUT_PIN, OUTPUT);
  pinMode(MICROBIT_IN_PIN, INPUT);

  pinMode(X_AXIS_MOTOR_DIR_PIN, OUTPUT);
  pinMode(X_AXIS_MOTOR_STEP_PIN, OUTPUT);
  pinMode(X_AXIS_MOTOR_ENABLE_PIN, OUTPUT);

  pinMode(Y_AXIS_MOTOR_DIR_PIN, OUTPUT);
  pinMode(Y_AXIS_MOTOR_STEP_PIN, OUTPUT);
  pinMode(Y_AXIS_MOTOR_ENABLE_PIN, OUTPUT);

  Serial.begin(9600);
  //Waits until serial port is ready
  while(!Serial){
    ;
  }
}

void updateCounter(){
  counter++;
}

void resetCounter(){
  counter = 0;
}

bool useCountdown(int time){
  if(counter >= time){
    counter = 0;
    return true;
  }
  return false;
}

void emptyData(){
  numberOfPoints = 0;
  for(int i = 0; i < NUMBER_OF_LINES; i++){
    for(int j = 0; j < NUMBER_OF_COLUMNS; j++){
      data[i][j] = NO_POINT;
    }
  }
}

void goFindNextPoint(){
  shouldHit = false;
  findNextPoint = true;
  solenoidDelayStarted = false;
}

void startPrint(){
  isPrinting = true;
  isHoming = true;
  goFindNextPoint();

  //Send total amount of points to microbit card
  for(int i = 0; i < totalAmountOfPoints; i++){
      digitalWrite(MICROBIT_OUT_PIN, HIGH);
      while(!digitalRead(MICROBIT_IN_PIN)){
        //Wait until response
        ;
      }
      digitalWrite(MICROBIT_OUT_PIN, LOW);
      while(digitalRead(MICROBIT_IN_PIN)){
        //Wait until response
        ;
      }
  }
}

void setSolenoidState(bool state){
  digitalWrite(SOLENOID_PIN, state);
}

void moveMotorX(bool dir){
  digitalWrite(X_AXIS_MOTOR_DIR_PIN, dir);
  digitalWrite(X_AXIS_MOTOR_STEP_PIN, true);
  delayMicroseconds(STEP_TIME_MICROSECONDS_X);
  digitalWrite(X_AXIS_MOTOR_STEP_PIN, false);
  delayMicroseconds(STEP_TIME_MICROSECONDS_X);
  if(dir == LEFT){
    stepsX--;
  }else{
    stepsX++;
  }
}

void moveMotorY(bool dir){
  digitalWrite(Y_AXIS_MOTOR_DIR_PIN, dir);
  digitalWrite(Y_AXIS_MOTOR_STEP_PIN, true);
  delayMicroseconds(STEP_TIME_MICROSECONDS_Y);
  digitalWrite(Y_AXIS_MOTOR_STEP_PIN, false);
  delayMicroseconds(STEP_TIME_MICROSECONDS_Y);
    if(dir == UP){
    stepsY++;
  }else{
    stepsY--;
  }
}

void enableMotorY(bool state){
  digitalWrite(Y_AXIS_MOTOR_ENABLE_PIN, state);
}

void enableMotorX(bool state){
  digitalWrite(Y_AXIS_MOTOR_ENABLE_PIN, state);
}

void checkForPrintRequest(){

  /*
  Waits for printing instructions
  IS_BRAILLE_PRINTER_CHECK -> respond IS_BRAILLE_PRINTER_CONFIRMATION
  The data needs to come in this order:

  START_PRINT - Indicates the start of printing instructions

  BEGIN_LINE
  X - First point
  X - Second point
  X
  ...
  X - Last point
  STOP_LINE
  ...
  BEGIN_LINE
  X
  X
  X
  ...
  X
  STOP_LINE

  END_OF_PRINT - Indicates the end of printing instructions
  */

  if(Serial.available()){

    String input = Serial.readStringUntil('\n');
    if(input == "IS_BRAILLE_PRINTER_CHECK"){

      Serial.println("IS_BRAILLE_PRINTER_CONFIRMATION");

    }else if(input == "START_PRINT"){

      emptyData();

      while(Serial.available()){

        int line = 0;

        String instruction = Serial.readStringUntil('\n');
        if(instruction == "BEGIN_LINE"){
          
          String point = Serial.readStringUntil('\n');
          while(point != "STOP_LINE"){
            int xPos = point.toInt();
            if(xPos >= NUMBER_OF_COLUMNS){
              break;
            }
            totalAmountOfPoints++;
            data[line][xPos] = POINT;
          }
          line++;
          if(line >= NUMBER_OF_LINES){
            break;
          }

        }else if(instruction == "END_OF_PRINT"){
          startPrint();
        }
      }

    }

  }

}

int getStepsFromPointX(int x){
  int charOffset = (x / 2 * 6.25F) / DISTANCE_PER_STEP_X;
  int pointOffset = x % 2 == 1 ? (2.5F) / DISTANCE_PER_STEP_X : 0;
  return charOffset + pointOffset;
}

int getStepsFromPointY(int y){
  int charOffset = (y / 3 * 10.0F) / DISTANCE_PER_STEP_Y;
  int pointOffset = y % 3 != 0 ? (1.5F) / DISTANCE_PER_STEP_Y : 0;
  return charOffset + pointOffset;
}

void pointPunched(){
  amountOfPointsPunched++;

  //Send puched hole info to microbit card
  digitalWrite(MICROBIT_OUT_PIN, HIGH);
  delay(1);
  digitalWrite(MICROBIT_OUT_PIN, LOW);
}

void resetPrinter(){
  isPrinting = false;
  isHoming = false;
}

void stopPrint(){
  isStopping = true;
  isPrinting = false;
  isHoming = true;
}

void stoppedPrint(){
  isStopping = false;
  resetPrinter();
}

void loop() {

  emergencyStop = digitalRead(EMERGENCY_BUTTON_PIN);

  if(!emergencyStop){
    if(!isPrinting && !isStopping){
      checkForPrintRequest();
    }else{
      if(isHoming){
        //Home printer
        if(!stepsX == 0){
          if(!digitalRead(HOMING_SWITCH_PIN)){
            moveMotorX(LEFT);
          }
        }else if(!digitalRead(PRESENCE_SENSOR_PIN) && !isStopping){ //If the printer is not doing a stopping homing, wait until paper is detected
          moveMotorY(UP);
        }else{
          stepsX = -STEPS_X_FROM_HOMING_SENSOR;
          stepsY = 0;
          isHoming = false;
          if(!isStopping){
            //If was in the process of stopping, indicate that the homing has been done
            stoppedPrint();
          }
        }
      }else{
        //The printer is printing
        if(findNextPoint){
          //Find the next destination

          int nextX = pointDestX;
          int nextY = pointDestY;

          int farthestLeft = -1;
          int farthestRight = -1;
          for(int i = 0; i < NUMBER_OF_COLUMNS; i++){
            if(data[pointDestY][i]){
              if(farthestLeft == -1){
                farthestLeft = i;
              }
              farthestRight = i;
            }
          }

          if(farthestRight != -1 || farthestLeft != -1){
            if(abs(pointDestX - farthestRight) <= abs(pointDestX - farthestLeft)){
              nextX = farthestRight;
            }else{
              nextX = farthestLeft;
            }
            shouldHit = true;
            data[pointDestY][nextX] = NO_POINT;
          }else{
            nextY = pointDestY + 1;
            shouldHit = false;
          }

          pointDestX = nextX;
          pointDestY = nextY;
          findNextPoint = false;

          if(pointDestY >= NUMBER_OF_LINES){
            //If reached the end of page
            stopPrint();
          }

          targetStepsX = getStepsFromPointX(pointDestX);
          targetStepsY = getStepsFromPointY(pointDestY);

        }else{
          //Move printer to point destination
          if(targetStepsX == stepsX && targetStepsY == stepsY){
            //If the printer is at destination
            //If should hit, then hit in non-blocking way
            if(shouldHit){
              if(!solenoidDelayStarted){
                resetCounter();
                solenoidDelayStarted = true;
                setSolenoidState(HIGH);
              }else{
                if(useCountdown(SOLENOID_TRIGGER_TIME)){
                  setSolenoidState(LOW);
                  goFindNextPoint();
                  pointPunched();
                }
              }
            }else{
              goFindNextPoint();
            }
          }else{
            //Move motors
            if(stepsY < targetStepsY){
              moveMotorY(UP);
            }else if(stepsY > targetStepsY){
              moveMotorY(DOWN);
            }
            
            if(stepsX < targetStepsX){
              moveMotorX(RIGHT);
            }else if(stepsX > targetStepsX){
              moveMotorX(LEFT);
            }
          }
        }

      }
    }
  }else{
    resetPrinter();
  }
}