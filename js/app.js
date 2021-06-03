// JavaScript Document
var button = document.querySelectorAll('.l-button');
button = Array.from(button);
console.log(button);


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

    var axisX = (window.innerWidth/2 - event.pageX)/10;
    var axisY = (window.innerHeight/2 - event.pageY)/10;
  
    sample1.style.transform = `rotateX(${axisX}deg) rotateY(${axisY}deg)`;
});

hoverarea.addEventListener('mouseout',(event)=>{
    sample1.style.transform = "rotateX(0deg) rotateY(0deg)";
});

