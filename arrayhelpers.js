Array.prototype.square= function(){ 
    return this.map((val)=>val*val);
  }
  Array.prototype.cube= function(){
    return this.map((val)=>val*val*val);
  }
  Array.prototype.sum = function(){
    return this.reduce((val,sum) => sum+val);
  }
  Array.prototype.average = function(){
    if(this.length===0) return NaN;
    return this.reduce((val,sum) => sum+val)/this.length;
  }
  Array.prototype.even= function(){
    return this.filter((val)=> val%2===0);
  }
  Array.prototype.odd= function(){
    return this.filter((val)=> val%2!==0);
  }