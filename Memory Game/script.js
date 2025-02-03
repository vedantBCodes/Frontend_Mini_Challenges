var startBtn=document.querySelector('#startBtn');
var homeContainer=document.querySelector('.homeContainer');
var containerBox=document.querySelector('.btnContainer');
var levelContainer=document.querySelector('.levelContainer');
var nextBtnContainer=document.querySelector('.nextBtnContainer');
var attemptContainer=document.querySelector('.attemptContainer');
var levelStatement=document.createElement('p');
var gameOverStatement=document.createElement('p');
var main=document.querySelector('main');
var homeBtn=document.createElement('button');
var size=3;
var level=1;
var numberOfButtons;
var numberOfColoredButtons=4;
var attempts=5;
function createLevelContainer()
{
    levelStatement.innerText=`Level : ${level}` ;
    levelStatement.style.fontSize='35px';
    levelContainer.appendChild(levelStatement);
}

function getRandomNumbers(min, max, count) {
    let numbers = new Set();

    while (numbers.size < count) {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(randomNum); // Ensures uniqueness
    }

    return Array.from(numbers);
}


function createGameContainer()
{
    var w_size=(100/size)-0.7;
    var h_size=(100/size)-0.01;
    for(var i=1;i<=size*size;i++)
        {
                var btn=document.createElement("button");
                btn.style.backgroundColor='white';
                btn.style.width=`${w_size}%`;
                btn.style.height=`${h_size}%`;
                btn.style.margin="0px 0px";
                btn.style.boxShadow='2px 2px 2px black';
                containerBox.appendChild(btn);
        }
}

function colorRandomButtons()
{
    var btns=document.querySelectorAll('.btnContainer > button');
    numberOfButtons=size*size;

    // Example: Generate n unique numbers between 1 and 9 (n- number of colored buttons)
    let randomNumbers = getRandomNumbers(0, numberOfButtons-1, numberOfColoredButtons);
    console.log(randomNumbers);
    for(var i=0;i<numberOfButtons;i++)
        {
            for(var j=0;j<randomNumbers.length;j++)
            {
            if(i==randomNumbers[j])
            {
                btns[i].style.backgroundColor='black';
                btns[i].className='colored';
            }
            btns[i].style.pointerEvents = "none"; //It is similar to disabled=true but it won't change the style after disabling button
            }
        }
    setTimeout(()=>{
        for(var i=0;i<size*size;i++)
            {
                btns[i].style.backgroundColor='white';
                btns[i].style.pointerEvents = "auto";
                btns[i].style.cursor = "default";  //It will remove the cursor error
            }
    },2000);
}

function setAttemptContainer()
{
    if (window.innerWidth <= 400) 
    {
        for(var i=1;i<=attempts;i++)
            {
                var img=document.createElement('img');
                img.src='stickPerson2.jpg';
                img.style.width="30px";
                img.style.height="30px";
                attemptContainer.appendChild(img);
                attemptContainer.style.marginTop=`${size*15}px`;
            }
            
    } 
    else 
    {
        for(var i=1;i<=attempts;i++)
            {
                var img=document.createElement('img');
                img.src='stickPerson2.jpg';
                img.style.width="30px";
                img.style.height="30px";
                attemptContainer.appendChild(img);
                attemptContainer.style.marginTop=`0px`;
            }
    }
   

}

function addNextBtn()
{
    nextBtnContainer.innerHTML='';
    var btn=document.createElement('button');
    btn.innerText='Next';
    nextBtnContainer.appendChild(btn);
    btn.addEventListener('click' , () =>{
        size++;
        level++;
        numberOfColoredButtons++;
        resetAll();
    });

}

function addHomeBtn()
{
    nextBtnContainer.innerHTML='';
    homeBtn.innerText='Home';
    nextBtnContainer.appendChild(homeBtn);
    homeBtn.addEventListener('click' , () =>{
        size=3;
        level=1
        numberOfColoredButtons=4;
        attempts=5;
        addHomePage()
    });
}

function addHomePage()
{
    levelContainer.innerHTML='';
    attemptContainer.innerHTML='';
    containerBox.innerHTML='';
    gameOverStatement.innerHTML='';
    nextBtnContainer.innerHTML='';
    homeContainer.style.display = "block";
    homeContainer.style.display='flex';
    homeContainer.style.flexDirection='column';
    homeContainer.style.justifyContent='center';
    homeContainer.style.alignItems='center';

}

function gameOver()
{
    
    gameOverStatement.innerText='Game Over';
    gameOverStatement.classList.add('gameOver');
    main.appendChild(gameOverStatement);
    addHomeBtn();
}
function clickTheColoredBtn()
{
    var cnt=0;
    var diableBtns=false;
    var btns=document.querySelectorAll('.btnContainer > button');
    btns.forEach((button) => {
        button.addEventListener('click', () => 
        {
             if(button.classList.contains('colored') && diableBtns==false)
                {
                    button.style.backgroundColor='black';
                    button.disabled='true';
                    cnt++;
                }  
              else if(diableBtns==false)
              {
                attempts--;
                attemptContainer.lastElementChild.classList.add('shrink');
                setTimeout(() =>{
                    attemptContainer.removeChild(attemptContainer.lastElementChild);

                },500);
                setTimeout(() =>{
                if(attemptContainer.childElementCount==0)
                {
                    diableBtns=true;
                    gameOver();
                }
            },700);
             }
              
            if(cnt==numberOfColoredButtons)
               {
                   addNextBtn();
                   diableBtns=true;
               }
        });
    });
}

function resetAll()
{
    nextBtnContainer.innerHTML='';
    levelStatement.textContent=`Level : ${level}`;
    containerBox.innerHTML="";
    createGameContainer();
    colorRandomButtons();
    clickTheColoredBtn();
}

startBtn.addEventListener('click' , () =>{
    homeContainer.style.display = "none";
    createLevelContainer();
    createGameContainer();
    moveMainContainer();
    setAttemptContainer();
    colorRandomButtons();
    clickTheColoredBtn();
});

function moveMainContainer()
{
    if (window.innerWidth >= 400) 
    {
        main.style.marginTop="50px";
    } 
}