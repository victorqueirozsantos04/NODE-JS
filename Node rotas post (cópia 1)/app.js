import expres from "express";
const app = express ();


app.get('/usuarios',(req, res)=>{
    res.send("informacao enviada")
})


app.listen(3000, ()=>{
    console.log("servidor rodando!")
})
//http:/lovalhost:3000
