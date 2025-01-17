var symbols1 = [ '🍇', '🍉', '🚗', '🍌','🏠', '🥭','🍎','🐯', '🍇','🍉', '🚗', '🍌','🏠','🥭', '🍎','🐯'];
var symbols2 = [ '🍒', '🍓','🐵','🥝', '🍿','🏀','🎱', '🐻','🍒', '🍓','🐵','🥝', '🍿','🏀','🎱', '🐻'];
var symbols3 = [  '🍜','🍢','🎓','🍤', '🦀','🍦','🍩','🎂','🍜','🍢','🎓','🍤', '🦀','🍦','🍩','🎂'];
var symbols=[];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function setSymbols()
  {
    var temp=getRandomInt(1,4);
  if(temp==1)
  {
    symbols=symbols1;
  }
  else if(temp==2)
  {
    symbols=symbols2;
  }
  else
  {
    symbols=symbols3;
  }
  }

  var attemptCnt=0;
  var attemptContainer=document.querySelector("#attempts");
  var attemptMsg=document.createElement("p");
  var restartBtn=document.querySelector("input");
  var buttons=document.querySelectorAll("button");
  var preIndex;
var check;
var cnt;
setSymbols();
function shuffleAndSetValues(symbols)
{
    symbols = shuffle(symbols);
    console.log(symbols);
    for(var i=0;i<symbols.length;i++)
        {
            buttons[i].innerText=symbols[i];
            buttons[i].style.fontSize="40px";
            buttons[i].style.backgroundColor = '#7fffd4';
            buttons[i].style.color = 'transparent'; // Hide the text temporarily
            buttons[i].disabled=false;
        }
    cnt=0;
    check=false;
    attemptCnt=0;
    updateAttempt();
}
shuffleAndSetValues(symbols);
  function updateAttempt()
  {
  attemptMsg.innerText=`Attempts : ${attemptCnt}`;
  attemptMsg.style.fontSize="30px";
  attemptMsg.style.fontStyle="bold";
  attemptContainer.appendChild(attemptMsg);
  }
updateAttempt();

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      const j = Math.floor(Math.random() * (i + 1));
      
      // Swap elements at index i and j
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  restartBtn.addEventListener('click',() =>{
    setSymbols();
    shuffleAndSetValues(symbols);
  })

buttons.forEach((button,index) => {
    button.addEventListener('click', () => 
    {
        button.style.backgroundColor = ''; // Reset background color
        button.style.color = ''; // Reset text color
        if(cnt>0)
        {
        if((buttons[preIndex].innerText==buttons[index].innerText) && index!=preIndex && cnt!=0)
        {
            buttons[index].style.backgroundColor="yellowgreen";
            buttons[preIndex].style.backgroundColor="yellowgreen";
            buttons[index].disabled=true;
            buttons[preIndex].disabled=true;
            check=true;
        }
        else if(buttons[preIndex].innerText!=buttons[index].innerText && index!=preIndex && cnt!=0)
        { 
            setTimeout(changeColor,1000,index,preIndex);
            check=true;
        }
    }
    cnt++;
        updateAttempt();
    preIndex=index;
        if(check==true)
        {
                cnt=0;
                check=false;
        }
        attemptCnt++;
        
    });
}
);

function changeColor(x,y)
{
            buttons[x].style.backgroundColor = '#7fffd4';
            buttons[x].style.color = 'transparent'; // Hide the text temporarily  
 
            buttons[y].style.backgroundColor = '#7fffd4';
            buttons[y].style.color = 'transparent'; // Hide the text temporarily
}


