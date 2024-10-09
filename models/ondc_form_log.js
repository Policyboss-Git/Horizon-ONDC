
let mongoose = require('mongoose');
let mongoosePaginate = require('mongoose-paginate');
let config = require('config');
let Schema = mongoose.Schema;
autoIncrement = require('mongoose-plugin-autoinc');
mongoose.Promise = global.Promise;
let connection = mongoose.createConnection(config.db.connection + ':27017/' + config.db.name);

let ondc_form_logSchema = new Schema({
    "Form_Log_Id": Number,
    "Transaction_Id": String,
    "Message_Id": String,
    "Form_Id": {type: String, default : ""},
    "Bpp_Id": {type: String, default : ""},
    "Form_Url": {type: String, default : ""},
    "Form_Data":{type: Object, default: {}}, 
    "Created_On": {type: Date, default : ""},
    "Modified_On": {type: Date, default : ""}
});

ondc_form_logSchema.plugin(mongoosePaginate);

ondc_form_logSchema.plugin(autoIncrement.plugin, {model: 'ondc_form_log', field: 'Form_Log_Id', startAt: 1});
let ondc_form_log = connection.model('ondc_form_log', ondc_form_logSchema);
module.exports = ondc_form_log;

