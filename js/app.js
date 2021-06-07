// JavaScript Document
var button = document.querySelectorAll('.l-button');
button = Array.from(button);
button.forEach(function(target){
    target.addEventListener('click',()=>{
        var mark = document.querySelectorAll('.mark');
        mark = Array.from(mark);
        if(target.textContent == "呼出"){
            mark[0].classList.toggle('on');
        }else if(target.textContent == "優先"){
            mark[1].classList.toggle('on');
        }else if(target.textContent == "追いだき"){
            mark[2].classList.toggle('on');
        }else if(target.textContent == "ふろ自動"){
            mark[3].classList.toggle('on');
        }else if(target.textContent == "ONOFF"){
            mark[4].classList.toggle('on');
        }
    });
});

const hoverarea = document.getElementById('sample-outer');
const sample1 = document.getElementById('sample1');
var text3d = document.querySelectorAll('.popout');
hoverarea.addEventListener('mousemove',(event)=>{

    var axisX = (window.innerWidth/2 - event.pageX)/120;
    var axisY = (window.innerHeight/2 - event.pageY)/120;
  
    sample1.style.transform = `rotateX(${axisY}deg) rotateY(${-axisX}deg)`;
    sample1.style.transition = "all .8s linear";

    var text3d = document.querySelectorAll('.popout');

    text3d.forEach((target)=>{
        target.style.transform = " translateY(20px) translateZ(70px)";
    });
});
hoverarea.addEventListener('mouseout',(event)=>{
    sample1.style.transform = "rotateX(0deg) rotateY(0deg)";
    sample1.style.transform = "all .6s linear";
    text3d.forEach((target)=>{
        target.style.transform = "translateY(0) translateZ(0)";
        target.style.transition = "all .6s linear";
    });
});

function showTime(){
    const now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes() ;
    var time = document.getElementById('time');
    if(hours < 10 && minutes < 10){
        time.innerHTML = `0${hours}&nbsp;0${minutes}`;
    }else if(hours<10){
        time.innerHTML = `0${hours}&nbsp;${minutes}`;
    }else if(minutes<10){
        time.innerHTML = `${hours}&nbsp;0${minutes}`;
    }else{
        time.innerHTML = `${hours}&nbsp;${minutes}`;
    }
};
setInterval('showTime()',1000);

var buttonToOpen = document.getElementById('jsOpenTrigger');
// console.log(sampleBlock)
// console.log(opentab);

buttonToOpen.addEventListener('click',()=>{
    var jsClickOpen = document.getElementById('js-clickOpen');
    var innerBtn = document.getElementById('innerbtn');
    jsClickOpen.classList.toggle('hideBoxShow');
    innerBtn.classList.toggle('open');
});

var Height = window.innerHeight;
window.addEventListener('scroll',()=>{
    var text = document.querySelectorAll('.hidetext');
    text.forEach((target)=>{
        var targetHeight = target.getBoundingClientRect().top;
        if(targetHeight < 3 * Height / 4){
            target.classList.add('showtext');
        }
    });

    var hugeText = document.querySelectorAll('.slidedown');
    hugeText.forEach((hugetarget)=>{
        var hugeTargetHeight = hugetarget.getBoundingClientRect().top;
        if(hugeTargetHeight < 3 * Height / 4){
            hugetarget.classList.add('slideup');
        }
    });
    
});

var menuItem = document.querySelectorAll('.nav-menu');
menuItem.forEach((target)=>{
    target.addEventListener('mouseenter',(event)=>{
        var footerDisplay = document.getElementById('panel-display');
        footerDisplay.firstElementChild.textContent = target.innerHTML;   
});
});