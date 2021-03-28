var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance;

totalDistance = trips.reduce(function(total, trip){
   return total+trip.distance; 
},0);