var container=document.querySelector('.container');
var moveCountClass=document.querySelector('.moveCountClass');
var btnContainer=document.querySelector('.btnContainer');
var emptyBtn=document.createElement('button');
var reset=document.querySelector('#reset');
var winStatement=document.createElement('p');

var moveCount=0;
var win=false;
function createBtnContainer()
{
    for(var i=1;i<=15;i++)
        {
            var btn=document.createElement('button');
            btn.innerText=`${i}`;
            btn.style.padding="5px";
            btn.style.width=`24.5%`;
            btn.style.height=`24.2%`;
            btn.style.margin="1px"
            btn.style.border='1px solid black';
            btn.style.boxShadow="0.5px 0.5px 2px 2px rgb(165, 216, 245)";
            btn.id=`${i}`;
            btn.style.backgroundColor="rgb(237, 237, 245)";
            btnContainer.appendChild(btn);
        }
}

function createLastEmptyBtn()
{
    emptyBtn.innerText='X';
    emptyBtn.id=16;
    emptyBtn.style.color="white";
    emptyBtn.style.border='none';
    emptyBtn.style.padding="5px";
    emptyBtn.style.width=`24.5%`;
    emptyBtn.style.height=`24%`;
    emptyBtn.style.margin="1px"
    emptyBtn.style.boxShadow="0.5px 0.5px 2px 2px white";
    emptyBtn.style.backgroundColor='white';
    btnContainer.appendChild(emptyBtn);
}
function updateMoveCount()
{
    moveCountClass.innerHTML='';
    var moveCountStatement=document.createElement('p');
    moveCountStatement.innerText= `Total moves : ${moveCount}`;
    moveCountClass.appendChild(moveCountStatement);

}
function shuffleBtns(btns)
{
        // Fisher-Yates shuffle algorithm
    for (let i = btns.length - 1; i > 0; i--) 
    {
        let j = Math.floor(Math.random() * (i + 1));
        [btns[i], btns[j]] = [btns[j], btns[i]];
    }

    // Append shuffled buttons back to the container
    btns.forEach(button => btnContainer.appendChild(button));
}

function colorRightPositionedBtns()
{
    var i=1;
    btns.forEach((button)=>{
        if(button.id==i)
        {
            button.style.border='2px solid rgb(99, 99, 222)';
        }
        i++;
    });
}

function switchButtons(x,y)
{
    //    rotateBtn(x);
        var temp1=x.innerText;
        x.innerText=y.innerText;
        y.style.transition='all 0.3s ease';
        y.innerText=temp1;

        var temp2=x.id;
        x.id=y.id;
        y.id=temp2;

        if(x.innerText=='X')
        {
            y.style.backgroundColor='rgb(237, 237, 245)';
            y.style.border='1px solid black';
            y.style.boxShadow="0.5px 0.5px 2px 2px rgb(165, 216, 245)";
            y.style.color='black';
            x.style.backgroundColor='white';
            x.style.borderColor='white';
            x.style.boxShadow="0.5px 0.5px 2px 2px white";
            x.style.color='white';


        }
        else
        {
            x.style.backgroundColor='rgb(237, 237, 245)';
            x.style.border='1px solid black';
            x.style.boxShadow="0.5px 0.5px 2px 2px rgb(165, 216, 245)";
            x.style.color='black';
            y.style.backgroundColor='white';
            y.style.borderColor='white';
            y.style.boxShadow="0.5px 0.5px 2px 2px white";
            y.style.color='white';

        }
}

function checkForWin()
{
    var cnt=0;
    btns.forEach((button,index)=>{
        if(button.id==(index+1))
        {
            cnt++;
        }
    });
    if(cnt==15)
    {
        printWinMessage();
    }
}
function printWinMessage()
{
    winStatement.innerText='Congrats ! You won';
    winStatement.classList.add('winMessage');
    container.appendChild(winStatement);
}
// Start execution

createBtnContainer();
var btns = Array.from(btnContainer.children); //buttons excluding the empty one

shuffleBtns(btns);
colorRightPositionedBtns();
createLastEmptyBtn();
updateMoveCount();
onClickEvent();


function onClickEvent()
{
var allBtns = document.querySelectorAll('.btnContainer > button'); //buttons including the empty one

allBtns.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        var x=index+1;
        if(x==8 || x==12)
        {
            x=x-1;
            if(allBtns[x-1].id==16 || allBtns[x+4].id==16 || allBtns[x-4].id==16)
                {
                    var emptyBtn2=document.getElementById('16');
                    switchButtons(button,emptyBtn2);
                    colorRightPositionedBtns();
                }
        }
        else if (x==5 || x==9)
        {
            x=x-1;
            if(allBtns[x+1].id==16 || allBtns[x+4].id==16 || allBtns[x-4].id==16)
            {
                var emptyBtn2=document.getElementById('16');
                switchButtons(button,emptyBtn2);
                colorRightPositionedBtns();
            }
        }
        else if (x==6 || x==7 || x==10 || x==11)
        {
            x=x-1;
            if(allBtns[x+1].id==16 || allBtns[x-1].id==16 || allBtns[x+4].id==16 || allBtns[x-4].id==16)
            {
                var emptyBtn2=document.getElementById('16');
                switchButtons(button,emptyBtn2);
                colorRightPositionedBtns();
            }
        }
        else if (x==2 || x==3 )
            {
                x=x-1;
                if(allBtns[x+1].id==16 || allBtns[x-1].id==16 || allBtns[x+4].id==16)
                {
                    var emptyBtn2=document.getElementById('16');
                    switchButtons(button,emptyBtn2);
                    colorRightPositionedBtns();
                }
            }
        else if (x==1 )
            {
                x=x-1;
                if(allBtns[x+1].id==16 || allBtns[x+4].id==16)
                {
                    var emptyBtn2=document.getElementById('16');
                    switchButtons(button,emptyBtn2);
                    colorRightPositionedBtns();
                }
            }
        else if (x==13 )
            {
                x=x-1;
                if(allBtns[x+1].id==16 || allBtns[x-4].id==16)
                {
                    var emptyBtn2=document.getElementById('16');
                    switchButtons(button,emptyBtn2);
                    colorRightPositionedBtns();
                }
                }
        else if (x==14 || x==15 )
                {
                x=x-1;
                if(allBtns[x-1].id==16 || allBtns[x+1].id==16 || allBtns[x-4].id==16)
                {
                    var emptyBtn2=document.getElementById('16');
                    switchButtons(button,emptyBtn2);
                    colorRightPositionedBtns();
                    
                 }
                }
        else if (x==4)
                {
                x=x-1;
                if(allBtns[x-1].id==16 || allBtns[x+4].id==16)
                {
                    var emptyBtn2=document.getElementById('16');
                    switchButtons(button,emptyBtn2);
                    colorRightPositionedBtns();
                }
               }
               else if (x==16)
                {
                x=x-1;
                if(allBtns[x-1].id==16 || allBtns[x-4].id==16)
                {
                    var emptyBtn2=document.getElementById('16');
                    switchButtons(button,emptyBtn2);
                    colorRightPositionedBtns();
                }
               }
        checkForWin();
        moveCount++;
        updateMoveCount();
    });
});
}


reset.addEventListener('click',()=>{
    moveCount=0;
    btnContainer.innerHTML='';
    winStatement.innerText='';
    createBtnContainer();
    btns = Array.from(btnContainer.children); //buttons excluding the empty one

    shuffleBtns(btns);
    colorRightPositionedBtns();
    createLastEmptyBtn();
    updateMoveCount();
    onClickEvent();
});

