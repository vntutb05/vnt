const {PORT,HOST} = require('./config'); 
let server = function (app) {
    app.listen(PORT,HOST,()=>{
        console.log(`Connect to server success at port ` +PORT);
    })
}
module.exports = server;