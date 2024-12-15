import express from "express"
import { PrismaClient } from "@prisma/client"

const router = express.Router()
const prisma = new PrismaClient()




// 선수 조희
router.get('/players', async (req, res) => {
    try {
            const players = await prisma.Players.findMany()
            return res.status(200).json(players)
    } catch (error) {return res.status(500).json({ message: "선수 목록 조회 오류가 발생" })}
})

// 선수 등록
router.post('/scout', async (req, res) => {
    const { name, speed, shouting, grade } = req.body
    try {
        const exist_player = await prisma.Players.findUnique({
            where: { name }
        })

        if (exist_player) {
            return res.status(400).json({ message: "해당선수는 이미 존재" })
        }
        const newplayer = await prisma.Players.create({
            data: { name, speed, shouting, grade }})



        return res.status(201).json({ message: "새로운선수 등록 완료료", result: newplayer })
    } catch (error) {
        
        
        return res.status(500).json({ message: "선수 등록 오류 발생" })
    }
})

// 선수 수정
router.patch('/edit', async (req, res) => {
    const { name, speed, shouting, grade } = req.body
    try {
        const Players = await prisma.Players.findUnique({
            where: { name }
        })
        if (!Players) {
            return res.status(404).json({ message: "해당 선수는 존재하지 않습니다다" })
        }
        const update_player = await prisma.Players.update({
            where: { name },
            data: { speed, shouting, grade }
        })
        return res.status(200).json({ message: `${name} 선수 정보가 변경되었습니다다`, result: update_player })
    } catch (error) {return res.status(500).json({ message: "선수 수정 오류 발생" })}
})


// 선수 삭제
router.delete('/release', async (req, res) => {
    const { name } = req.body

    try {
        const Players = await prisma.Players.findUnique({
            where: { name }
        })

        if (!Players) {
            return res.status(404).json({ message: "해당 선수는 존재하지 않습니다다" })
        }

        const deletedPlayer = await prisma.Players.delete({
            where: { name }
        })

        return res.status(200).json({ message: `${deletedPlayer.name}가 삭제 되었습니다다` })
    } catch (error) {
return res.status(500).json({ message: "서버 오류" })
    }
})

export default router
