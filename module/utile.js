export { time}

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