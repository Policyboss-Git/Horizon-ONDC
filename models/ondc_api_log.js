
let mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate');
let config = require('config');
let Schema = mongoose.Schema;
autoIncrement = require('mongoose-plugin-autoinc');
mongoose.Promise = global.Promise;
let connection = mongoose.createConnection(config.db.connection + ':27017/' + config.db.name);

let ondc_api_logSchema = new Schema({
    "Api_Log_Id": Number,
    "Transaction_ID": String,
    "Message_ID": String,
    "Api_Name": {type: String, default : ""},
    "Seller_ID": {type: String, default : ""},
    "Request": {type: Object, default: {}},    
    "Response":{type: Object, default: {}}, 
    "Created_On": {type: Date, default : ""},
    "Modified_On": {type: Date, default : ""}
});

ondc_api_logSchema.plugin(mongoosePaginate);

ondc_api_logSchema.plugin(autoIncrement.plugin, {model: 'ondc_api_log', field: 'Api_Log_Id', startAt: 1});
let ondc_api_log = connection.model('ondc_api_log', ondc_api_logSchema);
module.exports = ondc_api_log;

