var firebase = require("firebase");
var cnt =0;
    firebase.initializeApp({
        serviceAccount: "./nodemon-432721ff479b.json",
        databaseURL: "https://nodemon-39e5c.firebaseio.com/"
     });
   var ref = firebase.database().ref('nodemon-39e5c');
exports.insert = function(req,res){ 
   ref.push({
       index:cnt,
       text:req.body.insert
   });
    console.log(req.body.insert);
    res.render('index',{
        title:"INSERT FORM",
        text1:"INSERT SUCSSES!!!!!",
        text2:"TEXT YOU INERT  "+req.body.insert,
        IsInsert:true
    });
cnt++;
}
exports.insertAgain = function(req,res){
    ref.child('nodemon-39e5c').on('child_changed',function(snap){
         console.log(snap.val());
    });
        res.render('index',{
            text1:"INSET FORM",
            text2:"NO TEXT",
            IsInsert:false
    });
};
exports.show = function(req,res){
   ref.on('value',function(snap){
        console.log(snap.val());
        res.render('list',{
            para:snap.val().toString()
        });
   });
};