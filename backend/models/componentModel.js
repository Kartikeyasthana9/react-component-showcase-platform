const { ObjectID } = require('bson');
const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title: String,
    descript: String,
    tags: array,
    imports: string,
    code: string,
    createdBy: ObjectID,
    createdAt: Date

})

module.exports = model('componentCollection', mySchema);
