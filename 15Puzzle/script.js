var btnContainer=document.querySelector('.btnContainer');

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
            btn.style.boxShadow="0.5px 0.5px 2px 2px rgb(165, 216, 245)";
            btn.id=`${i}`;
            btnContainer.appendChild(btn);
        }
}

function createLastEmptyBtn()
{
    var emptyBtn=document.createElement('button');
    emptyBtn.innerText='X';
    emptyBtn.id=16;
    // emptyBtn.style.color='white';
    // emptyBtn.style.border='none';
    emptyBtn.style.padding="5px";
    emptyBtn.style.width=`23%`;
    emptyBtn.style.height=`24%`;
    emptyBtn.style.margin="1px"
    emptyBtn.style.backgroundColor='white';
    btnContainer.appendChild(emptyBtn);
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

function rightPositionedBtns()
{
    var i=1;
    btns.forEach((button)=>{
        if(button.id==i)
        {
            // button.style.border='5px solid rgb(99, 99, 222)';
            button.style.boxShadow="4px 4px 4px 0px rgb(81, 81, 195)"
        }
        i++;
    });
}

function switchButtons(x,y)
{
        // console.log(x.innerText,x.id);
        // console.log(y.innerText,y.id);

        var temp1=x.innerText;
        x.innerText=y.innerText;
        y.innerText=temp1;

        var temp2=x.id;
        x.id=y.id;
        y.id=temp2;

        // console.log(x.innerText,x.id);
        // console.log(y.innerText,y.id);
}



// Start execution

createBtnContainer();
var btns = Array.from(btnContainer.children); //buttons excluding the empty one
console.log(btns);

shuffleBtns(btns);
rightPositionedBtns();
createLastEmptyBtn();
var allBtns = document.querySelectorAll('button'); //buttons including the empty one

console.log(allBtns);
// function onBtnClick()
// {
    allBtns.forEach((button,index)=>{
        button.addEventListener('click',()=>{
            var x=index+1;
            if(x==8 || x==12)
            {
                x=x-1;
                if(allBtns[x-1].id==16 || allBtns[x+4].id==16 || allBtns[x-4].id==16)
                    {
                        console.log("You won");
                    }
                // button.style.backgroundColor="red";
            }
            else if (x==5 || x==9)
            {
                x=x-1;
                if(allBtns[x+1].id==16 || allBtns[x+4].id==16 || allBtns[x-4].id==16)
                {
                    console.log("You won");
                }
                // button.style.backgroundColor="green";
            }
            else if (x==6 || x==7 || x==10 || x==11)
            {
                x=x-1;
                if(allBtns[x+1].id==16 || allBtns[x-1].id==16 || allBtns[x+4].id==16 || allBtns[x-4].id==16)
                {
                    console.log("You won");
                }
                // button.style.backgroundColor="blue";
            }
            else if (x==2 || x==3 )
                {
                    x=x-1;
                    if(allBtns[x+1].id==16 || allBtns[x-1].id==16 || allBtns[x+4].id==16)
                    {
                        console.log("You won");
                    }
                    // button.style.backgroundColor="pink";
                }
            else if (x==1 )
                {
                    x=x-1;
                    if(allBtns[x+1].id==16 || allBtns[x+4].id==16)
                    {
                        console.log("You won");
                    }
                    // button.style.backgroundColor="orange";
                }
            else if (x==13 )
                {
                    x=x-1;
                    if(allBtns[x+1].id==16 || allBtns[x-4].id==16)
                    {
                         console.log("You won");
                    }
                        // button.style.backgroundColor="violet";
                    }
            else if (x==14 || x==15 )
                    {
                    x=x-1;
                    if(allBtns[x-1].id==16 || allBtns[x+1].id==16 || allBtns[x-4].id==16)
                    {
                        var btn=document.getElementById('16');
                        switchButtons(button,btn);
                          console.log(allBtns);
                     }
                        //  button.style.backgroundColor="rgb(113, 113, 151)";
                    }
            else if (x==4)
                    {
                    x=x-1;
                    if(allBtns[x-1].id==16 || allBtns[x+4].id==16)
                    {
                             console.log("You won");
                    }
                        // button.style.backgroundColor="rgb(113, 113, 151)";
                   }
                   else if (x==16)
                    {
                    x=x-1;
                    if(allBtns[x-1].id==16 || allBtns[x-4].id==16)
                    {
                             console.log("You won");
                    }
                        // button.style.backgroundColor="rgb(190, 190, 207)";
                   }
        });
    });
// }

