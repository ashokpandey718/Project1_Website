
// Mobile Menu
document.getElementById("hamburguer-icon").onclick=function(){
  document.getElementById("sliding-header-menu-outer").style.right="0";
}
document.getElementById("sliding-header-menu-close-button").onclick=function(){
  document.getElementById("sliding-header-menu-outer").style.right="-320px";
}


// About us Tab

var aboutUs = {
  "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";


var about=document.getElementsByClassName("single-tab");

for(var a=0;a<about.length; a=a+1)
{
  about[a].onclick=function(){
   var clickedTab=this.innerHTML;
    document.getElementById("box-text").innerHTML=aboutUs[clickedTab];

    for (b=0;b<about.length;b++){
      about[b].style.backgroundColor=unseletectedColor;
      about[b].style["font-weight"]="normal";
  
    }

    this.style.backgroundColor=seletectedColor;
    this.style["font-weight"]="bold";
  
  }
  
  
}

// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

var pre=document.getElementById("service-previous");
var next=document.getElementById("service-next");
var title=document.getElementById("service-title");
var text=document.getElementById("service-text");

var startService=0;
next.onclick=function(){
  if(startService==(ourServices.length-1))
  {
    startService=0;
  }
  else{
    startService=startService+1;   
  }
 
 var titleValue=ourServices[startService].title;
  var textValue=ourServices[startService].text;
  title.innerHTML=titleValue;
  text.innerHTML=textValue;
  }

  pre.onclick=function(){
    if(startService==0)
    {
      startService=(ourServices.length-1)
    }
    else{startService=startService-1;}
    var titleValue=ourServices[startService].title;
     var textValue=ourServices[startService].text;
     title.innerHTML=titleValue;
     text.innerHTML=textValue;
     }
   


// Footer

document.getElementById("current_year").innerHTML=new Date().getFullYear();

  
   


   