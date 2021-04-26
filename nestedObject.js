Object.prototype.hash = function(string) {
    string=string.split(".");
    var ans = this[string[0]];
    for(var i=1;i<string.length;i++){
      if(ans[string[i]])
       ans = ans[string[i]]
      else return undefined
    }
    return ans
  }