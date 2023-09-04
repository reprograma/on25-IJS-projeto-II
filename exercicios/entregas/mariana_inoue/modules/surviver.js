export class Surviver{
  name
  injuries
  constructor(name,injuries){
    this.name = name;
    this.injuries = injuries
  }

  killZombie(){
    console.log('Vc matou  um zumbi')
  }

  surviverDie(){
    if(this.injuries>= 3){
      console.log('Sobrevivente foi morto')
    }else{
      console.log('Cuidado!')
    }
   
  }
}

const surviver = new Surviver('Juliana', 2)

surviver.killZombie()

surviver.surviverDie()