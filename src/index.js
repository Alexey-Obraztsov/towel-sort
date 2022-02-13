module.exports = function towelSort (matrix) {
  let arr = [];

  if (matrix === undefined){
    return [];
  }

  for(let i=0; i<matrix.length; i++){
    matrix.forEach(x => {
      if (i%2==0){
        arr = value.concat(x);
      } else {
        arr = value.concat(x.reverse());
      }
    });
  }

return arr;
}
