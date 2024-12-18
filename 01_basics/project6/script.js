const inputbox=document.getElementById("input box");
const listcontainer=document.getElementById("list-container");

function addtask(){
    if(inputbox.value === ''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    setdata();
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        setdata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        setdata();
    }
}, false);

function setdata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showdata(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showdata();