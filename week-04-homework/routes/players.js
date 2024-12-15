import express from "express"

const router = express.Router()


router.get('/players',(req ,res) => {
    return res.status(200).json(players)
})



router.post('/scout',(req , res) => {
    const {name, speed, shouting, grade} = req.body
    for(let i=0; i<players.length; i++){
    if(name == players[i].name){
        return res.status(400).json({message:"해당 선수는 이미 존재합니다"})
    }}
    const result = players.push({name,speed,shouting,grade})
    return res.status(201).json({message:"정상적으로 등록 되었습니다",
                                result
    })
})

router.patch('/edit',(req,res)=>{
    const {name, speed, shouting, grade} = req.body
    for(let i=0; i<players.length; i++){
        if(name == players[i].name){
                   players[i].speed = speed 
                   players[i].shouting = shouting
                   players[i].grade = grade
                   return res.status(200).json({message:`${name} 정상적으로 수정 되었습니다`})
        }}
        
})


router.delete('/release', (req, res) => {
    const { name } = req.body
    for (let i = 0; i < players.length; i++) {
        if (name === players[i].name) {
            const deletedPlayer = players.splice(i, 1) // 삭제된 선수 정보 저장
            return res.status(200).json({ message: `${deletedPlayer[0].name}가 정상적으로 삭제 되었습니다` })
        }
    }
    return res.status(404).json({ message: "해당 선수를 찾을 수 없습니다" })
})



export default router

