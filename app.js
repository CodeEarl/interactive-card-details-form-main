const numb = document.getElementById("numb");
const fnumb = document.getElementById("f-numb");

const Cname = document.getElementById("name");
const fname = document.getElementById("f-name");

const month = document.getElementById("month");
const fm = document.getElementById("cdate");

const year = document.getElementById("yr");
const fy = document.getElementById("cy");


const cvc = document.getElementById("cvc");
const fcvc = document.getElementById("f-cvc");

const btn = document.getElementById("submit");
const move = document.getElementById("move");
const next = document.querySelector(".next");
const form = document.querySelector("form");


function setnum(e){
    numb.innerText = format(e.target.value);
}
function setname(e){
    Cname.innerText = e.target.value;
}
function setmon(e){
    month.innerText = e.target.value;
}
function setyr(e){
    year.innerText = e.target.value;
}
function setcvc(e){
    cvc.innerText = e.target.value;
}

function format(s){
    return s.toString().replace(/\d{4}(?=.0)/g, "$4");
}

function submitall(e) {
    e.preventDefault();
    if (!fname.value) {
        fname.classList.add("error");
        fname.parentElement.classList.add("message");
    }
    else{
        fname.classList.remove("error");
        fname.parentElement.classList.remove("message");
    }

    if (!fnumb.value) {
        fnumb.classList.add("error");
        fnumb.parentElement.classList.add("message");
    }
    else{
        fnumb.classList.remove("error");
        fnumb.parentElement.classList.remove("message");
    }

    if (!fm.value) {
        fm.classList.add("error");
        fm.parentElement.classList.add("message");
    }
    else{
        fm.classList.remove("error");
        fm.parentElement.classList.remove("message");
    }
    
    if (!fy.value) {
        fy.classList.add("error");
        fy.parentElement.classList.add("message");
    }
    else{
        fy.classList.remove("error");
        fy.parentElement.classList.remove("message");
    }
    
    if (!fcvc.value) {
        fcvc.classList.add("error");
        fcvc.parentElement.classList.add("message");
    }
    else{
        fcvc.classList.remove("error");
        fcvc.parentElement.classList.remove("message");
    }


    if (fname.value && fnumb.value && fm.value && fy.value && fcvc.value){
        next.classList.remove("done");
        form.classList.add("done");
    }
}

fnumb.addEventListener("keyup", setnum);
fname.addEventListener("keyup", setname); 
fm.addEventListener("keyup", setmon);
fy.addEventListener("keyup", setyr);
fcvc.addEventListener("keyup", setcvc);
btn.addEventListener("click", submitall);

move.addEventListener("click", function(){
    next.classList.add("done");
    form.classList.remove("done");
})