var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce(function(total,desk) {
      if (desk.type === "sitting"){
          return{
              sitting:total.sitting + 1,
              standing: total.standing
          };
      } else {
          return{
              sitting:total.sitting,
              standing: total.standing + 1
          };
      }
      
  }, { sitting: 0, standing: 0 });