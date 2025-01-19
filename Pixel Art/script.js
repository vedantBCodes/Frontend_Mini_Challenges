var btncontainer = document.querySelector(".btnContainer");

function getRandomRGBColor() 
{
  const r = Math.floor(Math.random() * 256); // Random value between 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function setBtnContainer1() 
{
  var w_size = 100 / 20 - 0.7;
  var h_size = 100 / 15 - 0.7;
  for (var i = 1; i <= 391; i++) {
    var btn1 = document.createElement("button");
    btn1.style.width = `${w_size}%`;
    btn1.style.height = `${h_size}%`;
    btn1.style.margin = "-2px 0px";
    btn1.classList.add("colorlessBtn");
    btncontainer.appendChild(btn1);
  }
}
function setBtnContainer2() 
{
  var w_size = 100 / 25 - 0.7;
  var h_size = 100 / 20 - 0.7;
  for (var i = 1; i <= 600; i++) {
    var btn1 = document.createElement("button");
    btn1.style.width = `${w_size}%`;
    btn1.style.height = `${h_size}%`;
    btn1.style.margin = "-2px 0px";
    btn1.classList.add("colorlessBtn");
    btncontainer.appendChild(btn1);
  }
}

function setColorRow1() 
{
  var w_size = 100 / 20 - 0.7;
  var h_size = 100 / 15 - 0.7;
  for (var i = 1; i <= 23; i++) {
    var randomColor = getRandomRGBColor();
    var btn2 = document.createElement("button");
    btn2.style.backgroundColor = `${randomColor}`;
    btn2.style.width = `${w_size}%`;
    btn2.style.height = `${h_size}%`;
    btn2.style.margin = "-2px 0px";
    btn2.className = "colorBtn";
    btncontainer.appendChild(btn2);
  }
}

function setColorRow2() 
{
  var w_size = 100 / 25 - 0.7;
  var h_size = 100 / 20 - 0.7;
  for (var i = 1; i <= 30; i++) {
    var randomColor = getRandomRGBColor();
    var btn2 = document.createElement("button");
    btn2.style.backgroundColor = `${randomColor}`;
    btn2.style.width = `${w_size}%`;
    btn2.style.height = `${h_size}%`;
    btn2.style.margin = "-2px 0px";
    btn2.className = "colorBtn";
    btncontainer.appendChild(btn2);
  }
}
const screenWidth = window.innerWidth;  //Applying js according to different screen size

  if (screenWidth <= 500) 
    {
    setBtnContainer1();
    setColorRow1();
  } 
  else  if (screenWidth > 500) 
  {
    setBtnContainer2();  
    setColorRow2();
  }


var colorBtns = document.querySelectorAll(".colorBtn");
var colorlessBtns = document.querySelectorAll(".colorlessBtn");
console.log(colorBtns);

chooseColor();

var bc; //bc- backgroundColor
function chooseColor() {
  colorBtns.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Color choose");
      bc = window.getComputedStyle(button).backgroundColor;
      console.log(bc);
      paintColor(bc);
    });
  });
}

function paintColor(bc1) {
  let isDragging = false; // Tracks whether the user is holding the mouse button

  colorlessBtns.forEach((button) => {
    // When the mouse button is pressed down
    button.addEventListener("mousedown", () => {
      isDragging = true;
    });

    // When the mouse moves
    button.addEventListener("mousemove", () => {
      if (isDragging) {
        button.style.backgroundColor = `${bc1}`;
      }
    });

    // When the mouse button is released
    button.addEventListener("mouseup", () => {
      if (isDragging) {
        console.log("Mouse released");
        isDragging = false;
      }
    });

    // When we click a button
    button.addEventListener("click", () => {
        button.style.backgroundColor = `${bc1}`;
    });

    button.addEventListener('dblclick', () => {
        button.style.backgroundColor = "";
    });
  });
}

var resetBtn=document.querySelector("#reset");

resetBtn.addEventListener('click',()=>{
    for(var i=0;i<colorlessBtns.length;i++)
    {
        colorlessBtns[i].style.backgroundColor="";
    }
})
