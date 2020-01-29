var loader = new THREE.ObjectLoader();

// loader.load(// resource URL
// "scene.json", // onLoad callback
// // Here the loaded data is assumed to be an object
// init, // onProgress callback
// function(xhr) {
//     console.log((xhr.loaded / xhr.total * 100) + '% loaded');
// }, // onError callback
// function(err) {
//     console.error('An error happened');
// });

var json ={"metadata":{"version":4.5,"type":"Object","generator":"Object3D.toJSON"},"geometries":[{"uuid":"9635CF06-5315-49DF-A794-E6ED80207B72","type":"BoxBufferGeometry","width":1,"height":1,"depth":1,"widthSegments":1,"heightSegments":1,"depthSegments":1},{"uuid":"76F33C82-8904-4B31-8AAA-90B606F3F604","type":"CylinderBufferGeometry","radiusTop":1.5,"radiusBottom":1.5,"height":4.04,"radialSegments":10,"heightSegments":1,"openEnded":false},{"uuid":"670734F7-F690-4AC1-B3A0-9F4FD5EE8AE5","type":"CylinderBufferGeometry","radiusTop":1.3,"radiusBottom":1.3,"height":4.5,"radialSegments":10,"heightSegments":1,"openEnded":false},{"uuid":"60288E3A-06A9-4AD0-A42F-215820727198","type":"CylinderBufferGeometry","radiusTop":0.1,"radiusBottom":0.1,"height":2.68,"radialSegments":8,"heightSegments":1,"openEnded":false},{"uuid":"F1288985-0539-4F63-B46B-161CBC5CCA21","type":"BoxBufferGeometry","width":1,"height":1,"depth":1,"widthSegments":1,"heightSegments":1,"depthSegments":1}],"materials":[{"uuid":"66B1AC2C-E7BB-46AA-A9F1-F65240C268D8","type":"MeshStandardMaterial","color":16777215,"roughness":1,"metalness":0,"emissive":0,"depthFunc":3,"depthTest":true,"depthWrite":true,"stencilWrite":false,"stencilWriteMask":255,"stencilFunc":519,"stencilRef":0,"stencilFuncMask":255,"stencilFail":7680,"stencilZFail":7680,"stencilZPass":7680},{"uuid":"74AE254D-D6DA-4CC1-809D-9A2CE84C6999","type":"MeshStandardMaterial","color":11711154,"roughness":1,"metalness":0,"emissive":0,"depthFunc":3,"depthTest":true,"depthWrite":true,"stencilWrite":false,"stencilWriteMask":255,"stencilFunc":519,"stencilRef":0,"stencilFuncMask":255,"stencilFail":7680,"stencilZFail":7680,"stencilZPass":7680},{"uuid":"0F6A57C7-AED4-4ADF-91B9-6C91D78387A5","type":"MeshStandardMaterial","color":10132122,"roughness":1,"metalness":0,"emissive":0,"depthFunc":3,"depthTest":true,"depthWrite":true,"stencilWrite":false,"stencilWriteMask":255,"stencilFunc":519,"stencilRef":0,"stencilFuncMask":255,"stencilFail":7680,"stencilZFail":7680,"stencilZPass":7680},{"uuid":"D72965BB-9EDA-43CB-A395-CC8149C6AF6F","type":"MeshStandardMaterial","color":4802889,"roughness":1,"metalness":0,"emissive":0,"depthFunc":3,"depthTest":true,"depthWrite":true,"stencilWrite":false,"stencilWriteMask":255,"stencilFunc":519,"stencilRef":0,"stencilFuncMask":255,"stencilFail":7680,"stencilZFail":7680,"stencilZPass":7680},{"uuid":"1E3168B2-DA5C-4AFE-A114-31A28F4D5F1F","type":"MeshStandardMaterial","color":986895,"roughness":1,"metalness":0,"emissive":0,"depthFunc":3,"depthTest":true,"depthWrite":true,"stencilWrite":false,"stencilWriteMask":255,"stencilFunc":519,"stencilRef":0,"stencilFuncMask":255,"stencilFail":7680,"stencilZFail":7680,"stencilZPass":7680}],"object":{"uuid":"5FC9ACA9-2A93-474D-AA32-FACC76551914","type":"Scene","name":"Scene","layers":1,"matrix":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],"children":[{"uuid":"C6C62DE9-5927-459D-AE8B-1FC3374FE0C2","type":"Mesh","name":"Paper","layers":1,"matrix":[21,0,0,0,0,0.1,0,0,0,0,29.7,0,0,0,0,1],"geometry":"9635CF06-5315-49DF-A794-E6ED80207B72","material":"66B1AC2C-E7BB-46AA-A9F1-F65240C268D8"},{"uuid":"BDF790DE-5DF5-46B3-A41F-35BF28D07B18","type":"AmbientLight","name":"AmbientLight","layers":1,"matrix":[1,0,0,0,0,1,0,0,0,0,1,0,0,6.282828,0,1],"color":12961221,"intensity":1},{"uuid":"46F6A625-BDA5-40E5-98E3-454C17E56B22","type":"Group","name":"Puncher","layers":1,"matrix":[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],"children":[{"uuid":"53AD6C1C-CCE2-49E3-8B32-7F9A1EF33DF6","type":"Mesh","name":"Body exterior","layers":1,"matrix":[1,0,0,0,0,1,0,0,0,0,1,0,0,3.831131,0,1],"geometry":"76F33C82-8904-4B31-8AAA-90B606F3F604","material":"74AE254D-D6DA-4CC1-809D-9A2CE84C6999"},{"uuid":"61F40004-5C39-4D0F-B09D-1193A795594F","type":"Mesh","name":"Body","layers":1,"matrix":[1,0,0,0,0,1,0,0,0,0,1,0,0,3.757856,0,1],"geometry":"670734F7-F690-4AC1-B3A0-9F4FD5EE8AE5","material":"0F6A57C7-AED4-4ADF-91B9-6C91D78387A5"},{"uuid":"658E9CDC-BD26-41EC-B3AA-CF2AC48645A4","type":"Mesh","name":"Pole","layers":1,"matrix":[1,0,0,0,0,1,0,0,0,0,1,0,0,1.412364,0,1],"geometry":"60288E3A-06A9-4AD0-A42F-215820727198","material":"D72965BB-9EDA-43CB-A395-CC8149C6AF6F"}]},{"uuid":"ADCA98EB-DD13-4C1A-BD65-342F2B7D6AA3","type":"Mesh","name":"Sensor","layers":1,"matrix":[0.5,0,0,0,0,2,0,0,0,0,5,0,0,0,0,1],"geometry":"F1288985-0539-4F63-B46B-161CBC5CCA21","material":"1E3168B2-DA5C-4AFE-A114-31A28F4D5F1F"}],"background":16777215}};

function init(obj) {
    scene = obj;

    console.log(scene);

    puncher = scene.getObjectByName("Puncher");
    sensor = scene.getObjectByName("Sensor");
    sheet = scene.getObjectByName("Paper");
    pole = scene.getObjectByName("Pole");
    scene.add(axesHelper);
    scene.add(paper);

    paper.add(sheet);

    initPosition();
    animate();
}

var scene;


var camera = new THREE.PerspectiveCamera(30,window.innerWidth / window.innerHeight,0.1,1000);
camera.position.z = 10;

var axesHelper = new THREE.AxesHelper(2);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("3d-view").appendChild(renderer.domElement);

var puncher;
var sensor;
var sheet;
var pole;

var paper = new THREE.Group();

var controls = new THREE.OrbitControls(camera,renderer.domElement);

const HOMING_SWITCH_PIN = 2;
const PRESENCE_SENSOR_PIN = 3;
const SOLENOID_PIN = 4;
const EMERGENCY_BUTTON_PIN = 5;

const MICROBIT_OUT_PIN = 6;
const MICROBIT_IN_PIN = 7;

const X_AXIS_MOTOR_STEP_PIN = 8;
const X_AXIS_MOTOR_DIR_PIN = 9;
const X_AXIS_MOTOR_ENABLE_PIN = 10;

const Y_AXIS_MOTOR_STEP_PIN = 11;
const Y_AXIS_MOTOR_DIR_PIN = 12;
const Y_AXIS_MOTOR_ENABLE_PIN = 13;

const DISTANCE_PER_STEP_X = (8.0 / 200.0) * 10;
//Millimeters per full rotation divided by number of steps
const DISTANCE_PER_STEP_Y = 0.1;
//TODO - Permieter of wheel divied by number of steps

const DISTANCE_X_FROM_HOMING_SENSOR = 50.0;
//TODO - Distance (negative) from origin (right side of sheet) to homing sensor
const DISTANCE_X_OFFSET_ORIGIN = 20.0;
//TODO - Distance from origin (right side of sheet) to end of margins
const STEPS_X_FROM_HOMING = (DISTANCE_X_FROM_HOMING_SENSOR + DISTANCE_X_OFFSET_ORIGIN) / DISTANCE_PER_STEP_X;

const DISTANCE_Y_OFFSET_ORIGIN = 5.0;
//TODO - Distance from origin (right side of sheet) to end of margins
const STEPS_Y_FROM_HOMING = (DISTANCE_Y_OFFSET_ORIGIN) / DISTANCE_PER_STEP_Y;

const SOLENOID_TRIGGER_TIME = 200;

const NUMBER_OF_LINES = 50;
const NUMBER_OF_COLUMNS = 25;

const NO_POINT = false;
const POINT = true;

const RIGHT = true;
const LEFT = false;
const UP = true;
const DOWN = false;

const SPEED_X = 50;
const STEP_TIME_MICROSECONDS_X = DISTANCE_PER_STEP_X / SPEED_X * 1000;

const SPEED_Y = 30;
const STEP_TIME_MICROSECONDS_Y = DISTANCE_PER_STEP_Y / SPEED_Y * 1000;

var emergencyStop = false;

var isPrinting = false;
var isHoming = false;
var isStopping = false;

//                 var data = [NUMBER_OF_LINES][NUMBER_OF_COLUMNS];
var data = [];
var numberOfPoints = 0;

var pointDestX = 0;
var pointDestY = 0;
var shouldHit;
var findNextPoint;
var solenoidDelayStarted = false;

var stepsX = -1;
var stepsY = -1;

var targetStepsX;
var targetStepsY;

var counter = 0;

var totalAmountOfPoints;
var amountOfPointsPunched;

function setup() {/*  pinMode(HOMING_SWITCH_PIN, INPUT);
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
  pinMode(Y_AXIS_MOTOR_ENABLE_PIN, OUTPUT);*/

/*  Serial.begin(9600);
  //Waits until serial port is ready
  while(!Serial){
    ;
}*/
}

function updateCounter() {
    counter++;
}

function resetCounter() {
    counter = 0;
}

function useCountdown(time) {
    if (counter >= time) {
        counter = 0;
        return true;
    }
    return false;
}

function emptyData() {
    numberOfPoints = 0;
    // for (i = 0; i < NUMBER_OF_LINES; i++) {
    // 	data[i] = [];
    //     for (j = 0; j < NUMBER_OF_COLUMNS; j++) {
    //         data[i][j] = NO_POINT;
    //     }
    // }
    data = new Array(NUMBER_OF_LINES).fill(NO_POINT).map(()=>new Array(NUMBER_OF_COLUMNS).fill(NO_POINT));
}

function goFindNextPoint() {
    shouldHit = false;
    findNextPoint = true;
    solenoidDelayStarted = false;
}

function startPrint() {
    isPrinting = true;
    isHoming = true;
    goFindNextPoint();

    //Send total amount of points to microbit card
    //for (i = 0; i < totalAmountOfPoints; i++) {
    //                         digitalWrite(MICROBIT_OUT_PIN, HIGH);
    //                         while (!digitalRead(MICROBIT_IN_PIN)) {
    //                             //Wait until response
    //                             ;
    //                         }
    //                         digitalWrite(MICROBIT_OUT_PIN, LOW);
    //                         while (digitalRead(MICROBIT_IN_PIN)) {
    //                             //Wait until response
    //                             ;
    //                         }
    //}
}

function setSolenoidState(state) {
    digitalWrite(SOLENOID_PIN, state);
}

function moveMotorX(dir) {
    digitalWrite(X_AXIS_MOTOR_DIR_PIN, dir);
    digitalWrite(X_AXIS_MOTOR_STEP_PIN, true);
    setTimeout(function() {
        digitalWrite(X_AXIS_MOTOR_STEP_PIN, false);
        setTimeout(function() {
            if (dir == LEFT) {
                stepsX++;
            } else {
                stepsX--;
            }
            isMotorDelaying = false;
        }, Math.max(1, STEP_TIME_MICROSECONDS_X / 1000));
    }, Math.max(1, STEP_TIME_MICROSECONDS_X / 1000));
    isMotorDelaying = true;
}

function moveMotorY(dir) {

    digitalWrite(Y_AXIS_MOTOR_DIR_PIN, dir);
    digitalWrite(Y_AXIS_MOTOR_STEP_PIN, true);
    setTimeout(function() {
        digitalWrite(Y_AXIS_MOTOR_STEP_PIN, false);
        setTimeout(function() {
            if (dir == UP) {
                stepsY++;
            } else {
                stepsY--;
            }
            isMotorDelaying = false;
        }, Math.max(1, STEP_TIME_MICROSECONDS_Y / 1000));
    }, Math.max(1, STEP_TIME_MICROSECONDS_Y / 1000));
    isMotorDelaying = true;
    // digitalWrite(Y_AXIS_MOTOR_DIR_PIN, dir);
    // digitalWrite(Y_AXIS_MOTOR_STEP_PIN, true);
    // delayMicroseconds(STEP_TIME_MICROSECONDS_Y);
    // digitalWrite(Y_AXIS_MOTOR_STEP_PIN, false);
    // delayMicroseconds(STEP_TIME_MICROSECONDS_Y);
    // if (dir == UP) {
    //     stepsY++;
    // } else {
    //     stepsY--;
    // }
}

function enableMotorY(state) {
    digitalWrite(Y_AXIS_MOTOR_ENABLE_PIN, state);
}

function enableMotorX(state) {
    digitalWrite(Y_AXIS_MOTOR_ENABLE_PIN, state);
}

function checkForPrintRequest() {

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

    if (serialStack.length > 0) {

        var input = serialStack.shift();

        if (input == "IS_BRAILLE_PRINTER_CHECK") {

            console.log("IS_BRAILLE_PRINTER_CONFIRMATION");

        } else if (input == "START_PRINT") {

            emptyData();

            var line = 0;

            while (serialStack.length > 0) {

                var instruction = serialStack.shift();
                if (instruction == "BEGIN_LINE") {

                    var point = serialStack.shift();
                    while (point != "STOP_LINE") {
                        var xPos = parseInt(point);
                        if (xPos >= NUMBER_OF_COLUMNS) {
                            break;
                        }
                        totalAmountOfPoints++;
                        data[line][xPos] = POINT;

                        point = serialStack.shift();
                    }
                    line++;
                    if (line >= NUMBER_OF_LINES) {
                        break;
                    }

                } else if (instruction == "END_OF_PRINT") {
                    startPrint();
                }
            }

        }

    }

}

function getStepsFromPointX(x) {
    let charOffset = ((x - x % 2) / 2 * 6.25) / DISTANCE_PER_STEP_X;
    let pointOffset = x % 2 == 1 ? (2.5) / DISTANCE_PER_STEP_X : 0;
    return parseInt(charOffset + pointOffset);
}

function getStepsFromPointY(y) {
    let charOffset = ((y - y % 3) / 3 * 10.0) / DISTANCE_PER_STEP_Y;
    let pointOffset = y % 3 != 0 ? (2.5) / DISTANCE_PER_STEP_Y : 0;
    return parseInt(charOffset + pointOffset);
}

function pointPunched() {
    amountOfPointsPunched++;

    //Send puched hole info to microbit card
    digitalWrite(MICROBIT_OUT_PIN, true);
    // delay(1);

    setTimeout(function() {
        digitalWrite(MICROBIT_OUT_PIN, false);
    }, 1);
}

function resetPrinter() {
    isPrinting = false;
    isHoming = false;
}

function stopPrint() {
    isStopping = true;
    isPrinting = false;
    isHoming = true;
}

function stoppedPrint() {
    isStopping = false;
    resetPrinter();
}

function loop() {

    emergencyStop = digitalRead(EMERGENCY_BUTTON_PIN);

    if (!emergencyStop) {
        if (!isPrinting && !isStopping) {
            checkForPrintRequest();
        } else {
            if (isHoming) {
                //Home printer

                if (!digitalRead(HOMING_SWITCH_PIN)) {
                    if (!isMotorDelaying) {
                        moveMotorX(RIGHT);
                    }

                } else if (!digitalRead(PRESENCE_SENSOR_PIN) && !isStopping) {
                    //If the printer is not doing a stopping homing, wait until paper is detected
                    if (!isMotorDelaying) {
                        moveMotorY(UP);
                    }

                } else if (!isStopping) {
                    stepsX = (-STEPS_X_FROM_HOMING);
                    stepsY = (-STEPS_Y_FROM_HOMING);
                    isHoming = false;
                } else if (isStopping) {
                    //If was in the process of stopping

                    //Wait until paper is gone
                    if (digitalRead(PRESENCE_SENSOR_PIN)) {
                        if (!isMotorDelaying) {
                            moveMotorY(UP);
                        }

                        return;
                    }

                    stepsX = (-STEPS_X_FROM_HOMING);
                    stepsY = (-STEPS_Y_FROM_HOMING);
                    isHoming = false;

                    //Indicate that the homing has been done
                    stoppedPrint();

                }
            } else {
                //The printer is printing
                if (findNextPoint) {
                    //Find the next destination

                    let nextX = pointDestX;
                    let nextY = pointDestY;

                    let farthestLeft = -1;
                    let farthestRight = -1;
                    for (let i = 0; i < NUMBER_OF_COLUMNS; i++) {
                        if (data[pointDestY][i]) {
                            if (farthestLeft == -1) {
                                farthestLeft = i;
                            }
                            farthestRight = i;
                        }
                    }

                    if (farthestRight != -1 || farthestLeft != -1) {
                        if (Math.abs(pointDestX - farthestRight) <= Math.abs(pointDestX - farthestLeft)) {
                            nextX = farthestRight;
                        } else {
                            nextX = farthestLeft;
                        }
                        shouldHit = true;
                        data[pointDestY][nextX] = NO_POINT;
                    } else {
                        nextY = pointDestY + 1;
                        shouldHit = false;
                    }

                    pointDestX = nextX;
                    pointDestY = nextY;
                    findNextPoint = false;

                    if (pointDestY >= NUMBER_OF_LINES) {
                        //If reached the end of page
                        stopPrint();
                    }

                    targetStepsX = getStepsFromPointX(pointDestX);
                    targetStepsY = getStepsFromPointY(pointDestY);

                } else {
                    //Move printer to point destination
                    if (targetStepsX == stepsX && targetStepsY == stepsY) {
                        //If the printer is at destination
                        //If should hit, then hit in non-blocking way
                        if (shouldHit) {
                            if (!solenoidDelayStarted) {
                                resetCounter();
                                solenoidDelayStarted = true;
                                setSolenoidState(true);
                            } else {
                                if (useCountdown(SOLENOID_TRIGGER_TIME)) {
                                    setSolenoidState(false);
                                    goFindNextPoint();
                                    pointPunched();
                                }
                            }
                        } else {
                            goFindNextPoint();
                        }
                    } else {
                        if (!isMotorDelaying) {
                            //Move motors
                            if (stepsY < targetStepsY) {
                                moveMotorY(UP);
                            } else if (stepsY > targetStepsY) {
                                moveMotorY(DOWN);
                            }

                            if (stepsX < targetStepsX) {
                                moveMotorX(LEFT);
                            } else if (stepsX > targetStepsX) {
                                moveMotorX(RIGHT);
                            }
                        }
                    }
                }

            }
        }
    } else {
        resetPrinter();
    }

    updateCounter();
}

function digitalRead(pin) {
    switch (pin) {
    case EMERGENCY_BUTTON_PIN:
        return false;
    case PRESENCE_SENSOR_PIN:
        return paper.position.x <= (29.7 / 2 - 2) && paper.position.x > (-32 / 2);
    case HOMING_SWITCH_PIN:
        return puncher.position.z * 10 <= -DISTANCE_X_FROM_HOMING_SENSOR;
    default:
        return false;
    }
    return false;
}

var xMotorActualDir = RIGHT;
var yMotorActualDir = UP;

var isMotorDelaying = false;

function digitalWrite(pin, value) {
    switch (pin) {
    case X_AXIS_MOTOR_DIR_PIN:
        xMotorActualDir = value;
        break;
    case Y_AXIS_MOTOR_DIR_PIN:
        yMotorActualDir = value;
        break;
    case X_AXIS_MOTOR_STEP_PIN:

        if (!value)
            break;

        if (xMotorActualDir == LEFT) {
            movePuncher(DISTANCE_PER_STEP_X);
        } else {
            movePuncher(-DISTANCE_PER_STEP_X);
        }
        break;
    case Y_AXIS_MOTOR_STEP_PIN:

        if (!value)
            break;

        if (yMotorActualDir == UP) {
            movePaper(-DISTANCE_PER_STEP_Y);
        } else {
            movePaper(DISTANCE_PER_STEP_Y);
        }
        break;
    case SOLENOID_PIN:
        punch(value);
        break;
    }
}

function movePuncher(offset) {
    moveObject(puncher, 0, 0, offset);
}

function movePaper(offset) {
    moveObject(paper, offset, 0, 0);
}

function moveObject(obj, x, y, z) {
    obj.position.x += (x / 10);
    obj.position.y += (y / 10);
    obj.position.z += (z / 10);
}

function punch(down) {
    if (down) {
        pole.position.y = 1.3;
        spawnDot();
    } else {
        pole.position.y = 2.3;
    }
}

var dotGeometry = new THREE.SphereGeometry(0.08,32,32);
var dotMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000
});

function spawnDot() {
    let dot = new THREE.Mesh(dotGeometry,dotMaterial);
    // dot.position.x = puncher.position.x;
    // dot.position.z = puncher.position.z;
    dot.position.y = 0.0;
    dot.position.x = paper.position.z - puncher.position.z;
    dot.position.z = -paper.position.x;
    paper.add(dot);
    //scene.add(dot);
}

function initPosition() {
    paper.position.y = -0.06;
    paper.rotateY(Math.PI / 2);
    paper.position.x = 29.7 / 2;
    paper.position.z = 21.0 / 2;

    pole.position.y = 2.3;

    sensor.rotation.y = Math.PI / 2;
    sensor.position.z -= (0.25 + DISTANCE_X_FROM_HOMING_SENSOR / 10 + 1.5);
    sensor.position.y += 4;

    camera.position.x = 50;
    camera.position.y = 50;
    camera.position.z = 50;
}

function animate() {
    requestAnimationFrame(animate);

    controls.target.set(0, paper.position.y - 5, paper.position.z);
    controls.update();

    puncher.rotation.y += 0.01;
    renderer.render(scene, camera);
}

var serialStack = [];
console.log(serialStack);

var isRunning = false;
var loopId;

function startStop() {
    console.log("Start stop");
    let btn = document.getElementById("start-stop-button");
    let label = document.getElementById("start-stop-label");
    if (!isRunning && scene != null) {
        loopId = setInterval(loop, 0.1);
        isRunning = true;
        btn.style = "background-color: #d90000;";
        label.innerHTML = "Stop";
    } else if (isRunning) {
        clearInterval(loopId);
        isRunning = false;
        btn.style = "background-color: #47c900;";
        label.innerHTML = "Start";
    }
}

function sendInstructions(){
  console.log(textField.value);
  serialStack = textField.value.split("\n");
  textField.value = "";
}

const textField = new mdc.textField.MDCTextField(document.querySelector('.mdc-text-field'));

const startStopRipple = new mdc.ripple.MDCRipple(document.querySelector('#start-stop-button'));
const fabRipple = new mdc.ripple.MDCRipple(document.querySelector('.mdc-fab'));

init(loader.parse(json));