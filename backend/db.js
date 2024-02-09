
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://leelakrishna682:XdWA11Azt2WzzMc@cluster0.0jhnmy1.mongodb.net/Todo_app_Practicedb');


const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
    });

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo
}