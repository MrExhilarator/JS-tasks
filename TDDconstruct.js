/*construct returns an object 
which has name, values as properties*/
function construct(Class, ...args) {
  let object = new Class();
  Class.apply(object, args);
  return object;
}
