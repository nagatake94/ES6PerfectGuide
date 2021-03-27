function findWhere(array, criteria) {
    return array.find(function(value){
        return value.height === criteria.height;
    });
  }