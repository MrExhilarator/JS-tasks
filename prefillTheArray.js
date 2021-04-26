function isFloat(value) {
    return Number(value) !== parseInt(value);
}
function prefill(n, v) {
   if(isNaN(parseInt(n)) || n<0 || isFloat(n))throw new TypeError(`${n} is invalid`);
   else{
     return Array(parseInt(n)).fill(v);
   }
}