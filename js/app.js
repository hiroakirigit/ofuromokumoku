// JavaScript Document

const hoverarea = document.getElementById('sample-outer');
const sample1 = document.getElementById('sample1');
var text3d = document.querySelectorAll('.popout');
hoverarea.addEventListener('mousemove',(event)=>{

    var axisX = (window.innerWidth/2 - event.pageX)/30;
    var axisY = (window.innerHeight/2 - event.pageY)/30;
    sample1.style.transform = `rotateX(${axisY}deg) rotateY(${-2*axisX}deg)`;
    sample1.style.transition = "all .6s linear";
 console.log(axisX,axisY);
    text3d.forEach((target)=>{
        target.style.transform = " skewX(-5deg) translateY(-10px) translateZ(100px)";
    });
});

sample1.addEventListener('mouseenter',()=>{
        text3d.forEach((target)=>{
        target.style.transform = " slewX(-5deg)  translateY(-10px) translateZ(100px)";
    });
});
hoverarea.addEventListener('mouseleave',()=>{
    sample1.style.transform = "rotateX(0deg) rotateY(0deg)";
    sample1.style.transform = "all .6s linear";
    text3d.forEach((target)=>{
        target.style.transform = " skewX(-5deg) translateY(0) translateZ(0)";
        target.style.transition = "all .6s linear";
    });
});


var button = document.querySelectorAll('.js-Btn');
button.forEach(function(target){
    target.addEventListener('click',()=>{
        var mark = document.querySelectorAll('.mark');
        mark = Array.from(mark);
        if(target.textContent == "呼出"){
            mark[0].classList.toggle('on');
        }else if(target.textContent == "優先"){
            mark[1].classList.toggle('on');
        }else if(target.textContent == "追いだき"){
            console.log('hi');
            mark[2].classList.toggle('on');
        }else if(target.textContent == "ふろ自動"){
            mark[3].classList.toggle('on');
        }else if(target.textContent == "ONOFF"){
            mark[4].classList.toggle('on');
        }
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

