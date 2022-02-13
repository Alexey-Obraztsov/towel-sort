module.exports = function towelSort (matrix) {
  if (matrix === undefined)
    return [];

  let arr = [];
  let direction = 0;

  matrix.forEach(x => {
    if (direction == 1){
      arr = arr.concat(x.reverse());
      direction = 0;
    } else {
      arr = arr.concat(x);
      direction = 1;
    }
  });

  return arr;
}
