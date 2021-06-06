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
hoverarea.addEventListener('mousemove',(event)=>{

    var axisX = (window.innerWidth/2 - event.pageX)/90;
    var axisY = (window.innerHeight/2 - event.pageY)/90;
  
    sample1.style.transform = `rotateX(${-axisX}deg) rotateY(${-axisY}deg)`;
    sample1.style.transition = "all .5s linear";
});
var text3d = document.querySelectorAll('.popout');

hoverarea.addEventListener('mousemove',(event)=>{
    text3d.forEach((target)=>{
        target.style.transform = " translateY(10px) translateZ(70px)";
    });
});
hoverarea.addEventListener('mouseleave',(event)=>{
    sample1.style.transform = "rotateX(0deg) rotateY(0deg)";
    text3d.forEach((target)=>{
        target.style.transform = "translateZ(0)";
        target.style.transition = "all .5s linear";
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
