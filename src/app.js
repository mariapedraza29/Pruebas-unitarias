import express from 'express'

const app = express()

app.get("/ping", (req, res)=>{
    res.send("pong");
});
app.get('/tasks', (res, req)=>{
    res.json([])
})
 export default app