export {createElement , iconChanger, time}

function iconChanger(title){
let icon;
    switch(title){
    case 'rain'||'rainy'||'light rain':{
        icon="icons/rain.png"
    }
    break;
    case 'snow':{
        icon="icons/snow.png"
    }
    break;
    case 'sunny'||'sun'||'partly sunny' :{
        icon="icons/sun.svg"
    }
    break;
    case 'fog'|| 'foggy':{
        icon= "icons/fog.png";
    }
    break;
    case 'cloud'|| 'cloudy':{
        icon= "icons/cloud.png";
    }
    break;
    default:{
        console.log
    }
        
}
}
function createElement(tag , classname,append){
   let elem = document.createElement(tag);
  if (classname){
   elem.classList.add(classname)
}else{
       return elem
   }
   if(append){
   elem.append(append)
}else{
       return elem
   }

return elem;
}
function time(props){
let date = new Date();
 date =date.toDateString();
let p=document.createElement('p');
p.classList.add("date");
p.classList.add("fs-3");
p.innerHTML = `${date}`;
let parent= document.querySelector(props);
parent.append(p)
}