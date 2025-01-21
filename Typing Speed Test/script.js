var statement='he turned in the research paper on friday otherwise he would have not passed the class ';

var statementBox=document.querySelector('input');
var buttons=document.querySelectorAll('.btnContainer > button');
var timeStatement=document.querySelector('.timeContainer > h3');
var resetBtn=document.querySelector('#reset');

var cnt;
var letterCnt;
var time;
var stopTime;

function initialization()
{
    statementBox.placeholder=statement;
    cnt=0;
    letterCnt=0;
    time=10;
    stopTime=false;
    timeStatement.innerText=`${time} seconds`;
    resetBtn.disabled=true;
}

initialization();

function timeFunction() 
{
   
if (time >= 1 ) 
{ 
    setTimeout(()=>
    {
        time--;
        timeStatement.innerText=`${time} seconds`;
        if(time==0)
            {
              resetBtn.disabled=false;
              stopTime=true;
              timeStatement.innerText=`Typing speed : ${letterCnt/10} lps (letters per seconds)`;
            }
        timeStatement.style.fontSize="25px";
    },1000)  
    setTimeout(timeFunction, 1000); // Wait for 1 second before the next iteration
}
}

buttons.forEach((button) =>{
    button.addEventListener('click',()=>{
        cnt++;
        if(cnt==1)
        {
            timeFunction();
        }
        if(button.innerText==statementBox.placeholder[0] && stopTime==false)
        {
            statementBox.placeholder = statementBox.placeholder.slice(1);
            letterCnt++;
            if(statementBox.placeholder[0]==' ')
                {
                    statementBox.placeholder = statementBox.placeholder.slice(1);
                }
        }
    });
});

document.addEventListener('keydown',(e)=>{
    cnt++;
    if(cnt==1)
    {
        timeFunction();
    }
    if(e.key==statementBox.placeholder[0] && stopTime==false)
    {
        statementBox.placeholder = statementBox.placeholder.slice(1);
        letterCnt++;
        if(statementBox.placeholder[0]==' ')
            {
                statementBox.placeholder = statementBox.placeholder.slice(1);
            }
    }
});

resetBtn.addEventListener('click',()=>{
    initialization();
    enableBtn();
});

