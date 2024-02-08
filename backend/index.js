const express = require('express');


const app = express();

app.use(express.json());


// Routes
app.get('/todos', async (req, res) => {
    
        const todos = await Todo.find();
        res.json(todos);

});

app.post('/todo', async (req, res) => {

  res.send(req.body);


});

app.listen(3000);