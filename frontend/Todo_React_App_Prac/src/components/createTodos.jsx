import React, {useState} from 'react';
import axios from 'axios';

function CreateTodos(){
    const [title, setTitle] = useState('');
    const [description,setDescription] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        console.log(title);
        };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
        console.log(description);
        };

        function handleSubmit(e, callback){
            e.preventDefault();
            axios.post('http://localhost:3000/todo', {
                title: title,
                description: description
            })
            .then(() => {
                if (callback) callback();
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        }

    return <div>
      <h1>Create a new Todo</h1>
      <form style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <label>Title</label>
        <input type='text' title='title' value={title} onChange={handleTitleChange}></input>
        <br/><br/>
        <label>Description</label>
        <input type='text' title='description' value={description} onChange={handleDescriptionChange}></input>
        <br/><br/>
        <button onClick={handleSubmit} >Create</button>

        </form>        
      </div>
}

export default CreateTodos;

