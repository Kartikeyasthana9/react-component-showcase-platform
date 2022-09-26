const { model, Schema, Types } = require('../connection');

const mySchema = new Schema({
    title: String,
    description: String,
    tags: Array,
    imports: String,
    code: String,
    image: String,
    // createdBy: {type : Types.ObjectId, ref: 'userCollection'},
    createdBy: String,
    createdAt: Date

})

module.exports = model('componentCollection', mySchema);
