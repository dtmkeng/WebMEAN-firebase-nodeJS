exports.render =function(req,res){
    //res.send("Hello Word");
    res.render('index',{
        "title":"Myapp",
        "text1":"How are thing"
    });
}
