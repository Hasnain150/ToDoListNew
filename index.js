let Addbtn=document.querySelector("#inputBtn");
let searchBar=document.querySelector("#inputText");
function AddtoDo(){
    
     
}
function AddtoDoWithKeyboard(e){
    if(e.key==="Enter" || e.key===13){
        if(searchBar.value){
            let li =document.createElement("li");
            li.innerHTML=searchBar.value;
            let div=document.querySelector("#ToDos");
            div.appendChild(li);
            let theImage=document.createElement("img");
            theImage.setAttribute("src","img/cross.png");
            console.log(theImage)
            li.appendChild(theImage)
            searchBar.value="";
            saveData();
           
         }
         else if(searchBar.value===""){
            alert("PLEASE ENTER A VALID TO DO");
         }
}

    
}
Addbtn.addEventListener('click',AddtoDo);
searchBar.addEventListener('keydown',AddtoDoWithKeyboard);
const listContainer=document.getElementById("ToDos")
listContainer.addEventListener("click",function(e)  {
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function loadData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
loadData();
let valueForImg=1;
let row2=document.querySelector(".row2");
row2.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        if(valueForImg==1){
            console.log(e)
            e.target.src="img/arrow-down.png"
            document.querySelector("#ToDos").style.display="none";
        }
        else{
            e.target.src="img/arrow-up.png"
            document.querySelector("#ToDos").style.display="inherit";
        }
        valueForImg=1-valueForImg;
       
    }
})
