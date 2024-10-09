module.exports.controller = function (app) {
    app.get('/welcome',function(req,res){
        let msg = req.query.Msg || "";
        console.log("Message : ",msg);
        res.json({'Status': "SUCCESS"});
    });
};