class Timer {
  
  constructor(power){
    this.time = 20
    this.power = power
  }
 
  timer(power){
    let lol;
    lol = setInterval(() => {
      switch(power){
        case "nut" :
        this.time += 2
        break
        case "cheese" :
        this.time += 10
        break
        case "egg" :
        setInterval(()=>{
          this.nbOfFramesBeforeMoving/2
        },10000)
        break
        case "blueberry" :
        setInterval(()=>{
          clearInterval(lol)
        }, 10000)
        break
        case "apple" :
        this.time -= 10
        break
        case "carrot" :
        setInterval(()=>{
          this.nbOfFramesBeforeMoving*2
        },10000)
        break
        case "poison" :
        this.time === 0
        break
      }
      this.time--;      
    }, 1000);
  }
}