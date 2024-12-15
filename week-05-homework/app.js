import express from "express"
import players_router from "./routes/players.js"

const app = express()
const PORT = 3018

app.use(express.json())
app.use('/api',[players_router])


app.listen(PORT,()=>{
    console.log(`${PORT} 포트번호로 서버가 열렸습니다`)
})