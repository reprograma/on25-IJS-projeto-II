export class Surviver {
  name
  injuries
  points = 0
  constructor(name, injuries) {
    this.name = name;
    this.injuries = injuries
  }

  attackZombie(zombie) {

    if (zombie === true) {
      this.points++
      console.log(`You heat the zombie, now you have ${this.points}`)

    } else {
      console.log(`Run run and be quiet!`)
    }
  }

  

  killZombie() {
    console.log(this.points)
    console.log('Vc matou  um zumbi')
  }

  surviverDie() {
    if (this.injuries >= 3) {
      console.log('Sobrevivente foi morto')
    } else {
      console.log('Cuidado!')
    }

  }
}

const surviver = new Surviver('Juliana', 2)

surviver.killZombie()

surviver.surviverDie()

surviver.attackZombie(false)
surviver.attackZombie(true)
surviver.attackZombie(true)
surviver.attackZombie(true)
surviver.attackZombie(true)
surviver.killZombie()

surviver.surviverDie()
