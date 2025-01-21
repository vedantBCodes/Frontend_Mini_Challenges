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
    stopTime=true;
    timeStatement.innerText=`${time} seconds`;
    resetBtn.disabled=true;
}

initialization();

function timeFunction() 
{
   
if (time >= 1 ) 
{ // Replace with your loop condition
    setTimeout(()=>
    {
        time--;
        timeStatement.innerText=`${time} seconds`;
        if(time==0)
            {
              disableBtn();
              resetBtn.disabled=false;
            //   timeOut=true;
              timeStatement.innerText=`Typing speed : ${letterCnt/10} lps (letters per seconds)`;
            }
        timeStatement.style.fontSize="25px";
    },1000)  
    setTimeout(timeFunction, 1000); // Wait for 1 second before the next iteration
}
}

function disableBtn()
{
    for(var i=0;i<buttons.length;i++)
    {
        buttons[i].disabled=true;
        // buttons[i].style.backgroundColor='white';
    }
}

function enableBtn()
{
    for(var i=0;i<buttons.length;i++)
    {
        buttons[i].disabled=false;
        
    }
}
buttons.forEach((button) =>{
    button.addEventListener('click',()=>{
        cnt++;
        if(cnt==1)
        {
            timeFunction();
            stopTime=false;
        }
        if(button.innerText==statementBox.placeholder[0])
        {
            statementBox.placeholder = statementBox.placeholder.slice(1);
            letterCnt++;
            if(statementBox.placeholder[0]==' ')
                {
                    statementBox.placeholder = statementBox.placeholder.slice(1);
                }
            var x=statementBox.placeholder[0];
            statementBox.placeholder = statementBox.placeholder.slice(1);
            // x = <b>x</b>;
            statementBox.placeholder = x + statementBox.placeholder ;
        }
    });
});
document.addEventListener('keydown',(e)=>{
    cnt++;
    if(cnt==1)
    {
        timeFunction();
        stopTime=false;
    }
    if(e.key==statementBox.placeholder[0])
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

