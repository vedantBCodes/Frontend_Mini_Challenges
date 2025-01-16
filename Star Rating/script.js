var buttons=document.querySelectorAll("button");
var smileyContainer=document.querySelector("#smiley");

var smileys = ['😢', '😞', '😐', '😀', '😎'];

function addSmiley(x)
{
    smileyContainer.innerHTML="";
    var smiley=document.createElement('p');
    smiley.innerText=smileys[x];
    smiley.style.fontSize = '100px'
    smileyContainer.appendChild(smiley);
}

buttons.forEach((button,index) => {
    button.addEventListener('click', () => 
    {
      var i=-1;
      while(buttons[i]!=button)
      {
        i++;
        buttons[i].innerText="⭐";
      }
      for(var j=i+1;j<buttons.length;j++)
      {
        buttons[j].innerText="☆";
      }
      addSmiley(index);
    });
  });
  
// buttons.forEach(button => {
//     button.addEventListener('mouseover', () => 
//     {
//        var i=-1;
//       while(buttons[i]!=button)
//       {
//         i++;
//         buttons[i].innerText="⭐";
//       }
//     });
//   });

//   buttons.forEach(button => {
//     button.addEventListener('mouseleave', () => 
//     {
//       var i=-1;
//       while(buttons[i]!=button)
//       {
//         i++;
//         buttons[i].innerText="☆";
//       }
//     });
//   });


