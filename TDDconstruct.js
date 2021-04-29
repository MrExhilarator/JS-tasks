/*construct returns an object 
which has name, values as properties*/
function construct(Class) {
  let object = new Class;
  object.name = 'John';
  object.values = [1, 2, 3, 4, 5];
  return object;
}
