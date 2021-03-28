// const red = '#ff0000';
// const blue = '#0000ff';

// const COLORS = { red: red, blue: blue };

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue};


// const fields = ['firstName', 'lastName', 'phoneNumber'];
      
// const props = { fields: fields };

const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields };


// const canvasDimensions = function(width, initialHeight) {
//     const height = initialHeight * 9 /16;
//     return { 
//       width: width, 
//       height: height 
//     };
//   }

const canvasDimensions = function(width, initialHeight) {
    const height = initialHeight * 9 /16;
    return { 
      width, 
      height 
    };
  };


//   const color = 'red';

//   const Car = {
//     color: color,
//     drive: function() {
//       return 'ブーーン!';
//     },
//     getColor: function() {
//       return this.color;
//     }
//   };



  const color = 'red';

const Car = {
  color,
  drive() {
    return 'ブーーン!';
  },
  getColor() {
    return this.color;
  }
};