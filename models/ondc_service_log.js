/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
autoIncrement = require('mongoose-plugin-autoinc');
var mongoosePaginate = require('mongoose-paginate');

var ondc_service_logSchema = new Schema({
    "Ondc_Service_Log_Id": Number,
    "Action": String,
    "Message_Id" : String,
    "Transaction_Id": String,
    "Ondc_Created_On": Date,
    "Request_Expiry": String,
    "Insurer_Name" : String,
    "Insurer_Bpp_Id": String,
    "Insurer_Bpp_Callback_Url": String,
    "Insurance_Category": Object,
    "Plans": Object,
    "Form_Url": String,
    "Form_Id": String,
    "Submission_Id": String,
    "Api_Unique_Identifier": String,
    "Quote": Object,
    "LM_Request": Object,
    "Insurer_Request": Object,
    "Insurer_Response": Object,
    "Created_On": {type: Date},
    "Modified_On": {type: Date}
    
});
ondc_service_logSchema.plugin(mongoosePaginate);
ondc_service_logSchema.plugin(autoIncrement.plugin, {model: 'ondc_service_log', field: 'Ondc_Service_Log_Id', startAt: 1});
var ondc_service_log = mongoose.model('ondc_service_log', ondc_service_logSchema);
module.exports = ondc_service_log;
