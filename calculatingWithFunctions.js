function zero(a) {
  if(arguments[0]) return Math.floor(answer("0",a[0],a[1]))
  else return 0
}
function one(a) {
   if(arguments[0]) return Math.floor(answer("1",a[0],a[1]))
  else return 1
}
function two(a) {
   if(arguments[0]) return Math.floor(answer("2",a[0],a[1]))
  else return 2
}
function three(a) {
   if(arguments[0]) return Math.floor(answer("3",a[0],a[1]))
  else return 3
}
function four(a) {
   if(arguments[0]) return Math.floor(answer("4",a[0],a[1]))
  else return 4
}
function five(a) {
   if(arguments[0]) return Math.floor(answer("5",a[0],a[1]))
  else return 5
}
function six(a) {
   if(arguments[0]) return Math.floor(answer("6",a[0],a[1]))
  else return 6
}
function seven(a) {
   if(arguments[0]) return Math.floor(answer("7",a[0],a[1]))
  else return 7
}
function eight(a) {
   if(arguments[0]) return Math.floor(answer("8",a[0],a[1]))
  else return 8
}
function nine(a) {
   if(arguments[0]) return Math.floor(answer("9",a[0],a[1]))
  else return 9
}

 

function answer(a,b,c){
  if(b=="+") return parseInt(a)+parseInt(c);
   if(b=="-") return parseInt(a)-parseInt(c);
   if(b=="*") return parseInt(a)*parseInt(c);
   if(b=="/") return parseInt(a)/parseInt(c);
  
}

 


function plus(a) { return ["+",a]}
function minus(a) {return ["-",a]}
function times(a) {return ["*",a]}
function dividedBy(a) { return ["/",a]}