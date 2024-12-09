class createuser{
    constructor({name,lv,hp,power}){
        this.name = name
        this.lv = lv
        this.hp = hp
        this.power = power
    }

    attack(){
        console.log(`${this.name}이 공격을 시도합니다 ${this.power}`)
    }


    heal(){
        this.hp += 30
        console.log(`체력이 30증가 했습니다 ${this.hp}`)
    }

    levelUp(){
        this.lv++
        console.log(`레벨이 1증가 했습니다 ${this.lv}`)
    }

}


const apple = new createuser({name:"apple",lv:1,hp:100,power:10})
const grape = new createuser({name:"pear",lv:2,hp:105,power:11})
const lemon = new createuser({name:"lemon",lv:3,hp:110,power:12})

apple.attack()
apple.heal()
apple.levelUp()


grape.attack()
grape.heal()
grape.levelUp()

lemon.attack()
lemon.heal()
lemon.levelUp()