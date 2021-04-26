function partitionOn(pred, items) {
    let res1=[],res2=[];
    for(let i of items){
      pred(i) ? res1.push(i) : res2.push(i);
    }
    let temp=[...res2,...res1];
    for(var i=0;i<temp.length;i++){
      items[i]=temp[i];
    }
    return res2.length;
  }