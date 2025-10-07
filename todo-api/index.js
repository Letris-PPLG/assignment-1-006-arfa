import express from "express";

const app = express();
app.use(express.json());

/*Cek server*/
let pesanPertama = [
    { msg:"API berjalan normal", code:200 }
];

app.get("/", (req,res) =>{
    res.send(pesanPertama)
});

/*Ambil semua todo*/ 
let todos = [
    { id:1, title:"Belajar Node.js", done:false },
    { id:2, title:"Belajar Express.js", done:true }
];

app.get("/todos", (req,res) =>{
    res.send(todos)
});

/*Tambah todo baru*/
app.post("/todos", (req,res) =>{
    const { title, done } = req.params;
    const newTodos = { id:todos.length + 1, title : title, done : done };
    todos.push(newTodos);
    res.status(201).send(newTodos);
});

/*update todos*/
app.put("/todos/:id", (req,res) =>{

});

/*delete todos*/
app.delete("/todos/:id", (req,res) =>{

});

/*listen*/
app.listen(3001 , () => console.log("Server running on http://localhost:3001"));
