import {useState,useEffect} from "react";
import React from "react";

const iinitialFormValues ={todoName: "",done:false};

function Form({ todo , addToDo}){
    const [form ,setForm]=useState(iinitialFormValues);

    useEffect( ()=> {
        setForm(iinitialFormValues);
    },[todo]);

    const onChange =(e) => {
        setForm({ ...form, todoName:e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (form.todoinput === "") {
          return false;
        }
        addToDo([...todo, form]);
      };

     return(
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={onSubmit}>
                <input name="todoinput"
                className="new-todo"
                placeholder="What needs to be done ?"
                value={form.todoName}
                onChange={onChange} autoFocus/>
            </form>
        </header>
     );
}

export default Form;