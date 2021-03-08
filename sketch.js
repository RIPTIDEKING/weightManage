let button;
let weightInp;
let dateInp;
let subBut;
let db;
let weightref;
let dbData;
let g;

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(27);

  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyCNm-bO7FfHoBODvmAd_YkND7KjEKXgK-A",
    authDomain: "authfbja.firebaseapp.com",
    databaseURL: "https://authfbja.firebaseio.com",
    projectId: "authfbja",
    storageBucket: "authfbja.appspot.com",
    messagingSenderId: "84745787091",
    appId: "1:84745787091:web:e41c99ec8b6b8feee76626"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  db = firebase.database();
  weightref = db.ref('weight_trek');

  //weight input field
  weightInp = createInput('', 'number');
  weightInp.position(50, 70);
  weightInp.size(200);



  let date = new Date();
  dateInp = createInput(date.toISOString().substring(0, 10), 'date');
  dateInp.position(50, 160);
  dateInp.size(200);

  subBut = createButton('Submit');
  subBut.position(50, 200);
  subBut.mousePressed(sOnClick);
  // subBut.size(250);

  weightref.on('value', retData, retErr);

  g = new Graph(50, 250, width - 100, height - 300);
}

function sOnClick() {
  let data = {
    weight: Number(weightInp.value()),
    date: dateInp.value()
  }

  weightref.push(data);
}

function firebaseSetup() {
  var firebaseConfig = {
    apiKey: "AIzaSyCNm-bO7FfHoBODvmAd_YkND7KjEKXgK-A",
    authDomain: "authfbja.firebaseapp.com",
    databaseURL: "https://authfbja.firebaseio.com",
    projectId: "authfbja",
    storageBucket: "authfbja.appspot.com",
    messagingSenderId: "84745787091",
    appId: "1:84745787091:web:e41c99ec8b6b8feee76626"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

function draw() {
  background(27);

  stroke(255);
  noStroke();
  fill(255);
  textSize(18);
  text("Weight:", 50, 55);
  text("Date:", 50, 140);

  if (dbData) {
    g.update(dbData);
    g.show();
  }
}


function retData(data) {
  let info = data.val();
  dbData = Object.values(info);
  console.log(dbData);
}

function retErr(e) {
  console.log("Error!!");
  console.log(e);
}