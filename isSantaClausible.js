/*isSantaClausable takes an object which has some methods and returns true if that 
object has sayHoHoHo, distributeGifts and goDownTheChimney functions as properties in them*/
function isSantaClausable(object) {
  if ((typeof object.sayHoHoHo === 'function')
    && (typeof object.distributeGifts === 'function')
    && (typeof object.goDownTheChimney === 'function')) {
    return true;
  }
  return false;
}
