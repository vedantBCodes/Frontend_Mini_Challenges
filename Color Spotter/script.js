var mainBox=document.querySelector(".mainBox");
var scoreBoard=document.querySelector("#score");
var maxScoreBoard=document.querySelector("#maxScore");
var size=3;
var maxScore;
var check=true;
var score=0;
function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256); // Random value between 0-255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

function setBox(size)
{
    var randomInt=getRandomInt(1,size*size);

    var w_size=(100/size)-0.3;
    var h_size=(100/size)-0.3;
    var randomColor=getRandomRGBColor();
    for(var i=1;i<=size*size;i++)
        {
            if(i==randomInt)
            {
                var btn=document.createElement("button");
                btn.style.backgroundColor=`${randomColor}`;
                btn.style.width=`${w_size}%`;
                btn.style.height=`${h_size}%`;
                btn.style.margin="0px 0.7px";
                btn.style.opacity="0.85";
                btn.id="unique";
                mainBox.appendChild(btn);
            }
            else
            {
                var btn=document.createElement("button");
                btn.style.backgroundColor=`${randomColor}`;
                btn.style.width=`${w_size}%`;
                btn.style.height=`${h_size}%`;
                btn.style.margin="0px 1px";
                mainBox.appendChild(btn);
            }          
        }
}

function clickUniqueBtn()
{
    var btns=document.querySelectorAll("button");
    var uniqueBtn=document.querySelector("#unique");

btns.forEach((button) => {
    button.addEventListener('click', () => 
    {
        if(button==uniqueBtn)
        {
            mainBox.innerHTML="";
            size++;
            score++;
            maxScore = +localStorage.getItem('maxScore');
            maxScore = score;
            localStorage.setItem('maxScore', maxScore);
            console.log(maxScore);
            updateScore();
            updateMaxScore()
            setBox(size);
            clickUniqueBtn();
        }
        else
        {
            mainBox.classList.add('shake');
            setTimeout(() => {
              mainBox.classList.remove('shake');
            }, 1000);
            setTimeout(() => {
            mainBox.innerHTML="";
            size=3;
            score=0;
            updateScore();
            updateMaxScore()
            setBox(size);
            clickUniqueBtn();
              }, 1500);
            
        }
        
    });
});
}

function updateScore()
{
    scoreBoard.innerHTML=`<b>Score :${score}</b>`;
}

function shakeTheGrid(callback) {
  board.classList.add('shake');
  setTimeout(() => {
    board.classList.remove('shake');
    callback();
  }, 2000);
}
function updateMaxScore()
{
    maxScoreBoard.innerHTML=`<b>Max Score :${maxScore}</b>`;
}

setBox(size);
clickUniqueBtn();
