function type(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
}



function clone(info){
  const t=type(source);
  if(t!=='object'&& t!=='array'){
    return info
  }

  let target;
  if(t=='object'){
    target={};
    for(let i in info){
      if(info.hasOwnProperty(i)){
        target[i]=clone(info[i])
      }
    }
  }else{
    target=[];
    for(let i=0;i<info.length;i++){
      target[i]=clone(info[i])
    }
  }

  return target
}