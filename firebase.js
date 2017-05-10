var firebase = require("firebase");
firebase.initializeApp({
  serviceAccount: "./nodemon-432721ff479b.json",
  databaseURL: "https://nodemon-39e5c.firebaseio.com/"
});
var ref = firebase.database().ref('nodemon-39e5c');
var massegeRef = ref.child('massege');

var massegeRef = massegeRef.push();
var massegeKey = massegeRef.key;
var parload ={};
var massege={
    text:"Robot club",
    projectNumber:1
};
parload['massege/'+massegeKey]=massege;
parload['long/'+massegeKey]=massege;

//console.log(massege);
//console.log(massegeKey);

//update  insert
//push  json 
//set clrea on clea
ref.update(parload);
var logRef = ref.child('long');
logRef.orderByKey().limitToLast(1).on('child_added',function(snap){
  console.log('added  '+snap.val());
});
logRef.on('child_removed',function(snap){
  console.log('removed  '+ snap.val());
});
ref.child('long').on('child_changed',function(snap){
  console.log('changed  '+snap.val());
});
//query 
/*
ref.once('value')
.then(function(snap){
  console.log(snap.key ,"\n\n");
  console.log(snap.ref.toString(), "\n\n");
  console.log(snap.val() ,"\n\n");
});*/