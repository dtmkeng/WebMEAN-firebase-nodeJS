module.exports = function(app){
  var user = require('../controllers/user.server.controller');
  app.post('/inserted',user.insert);
  app.post('/again',user.insertAgain);
  app.post('/show',user.show);
};