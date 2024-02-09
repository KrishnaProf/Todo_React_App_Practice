const express = require('express');
const {Todo} = require('./db');
const {createtodo, updatetodo} = require('./types.js');



const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


// Routes
app.get('/todos', async (req, res) => {

  const todos = await Todo.find();
  res.json({todos});

});

app.post('/todo', async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createtodo.safeParse(createPayload);
  if(!parsedPayload.success) {
    res.status(411).json({
        msg: "You sent the wrong inputs",
})
    return;
}

  await Todo.create({
    title : createPayload.title,
    description: createPayload.description,
    completed: false
  })
  .then(() => {
    res.send("Todo task created successfully");
  })

});

app.put('/completed', async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updatetodo.safeParse(updatePayload)
  if(!parsedPayload.success) {
    res.status(411).json({
        msg: "You sent the wrong inputs",
    })
    return;
}
  
    await Todo.updateOne({_id: updatePayload.id }, {completed: true})
    .then(() => {
      res.json({msg: "Todo marked as completed"});
    })
  
})

app.listen(3000);