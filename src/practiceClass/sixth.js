

// class Monster {
//     constructor(options) {
//       this.health = 100;
//       this.name = options.name;
//     }
//   }
  
//   class Snake {
  
//   }



class Monster {
    constructor(options) {
      this.health = 100;
      this.name = options.name;
    }
  }
  
  class Snake extends Monster {
      constructor(options){
          super(options);
      }
      bite(targetSnake){
          return targetSnake.health -= 10;
      }
  }
  
  