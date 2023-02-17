export { time, backgroundTheme, widgetMood };
let date = new Date();
let hour = date.getHours();

let p = document.createElement("p");
date = date.toDateString();
p.classList.add("date");
p.classList.add("fs-3");
p.innerHTML = `${date}`;

function time(props) {
  let parent = document.querySelector(props);
  parent.append(p);
}

function backgroundTheme(sunset, element) {
  console.log(hour);
  Number(sunset.split("", 2).join("")) <= hour
    ? (element.style.backgroundImage =
        "linear-gradient(133deg, rgba(133,23,23,1) 0%, rgba(213,26,26,1) 50%, rgba(223,130,0,1) 100%)")
    : (element.style.backgroundImage =
        "linear-gradient(135deg, #52E5E7 10%, #130CB7 100%)");
}
function widgetMood() {
  console.log("works");
  widget = window.open(
    "https://sheidasepehri01.github.io/weatherApi/",
    "",
    "width=450, height=150"
  );
}
