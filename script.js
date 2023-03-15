const count = document.querySelector(".count");
const add = document.querySelector(".add");
const resetCount = document.querySelector(".reset");
const sub = document.querySelector(".subtract");
// const buttons = document.querySelector(".buttons")

add.addEventListener("click",()=>{
    count.innerHTML++;
    setColor();
})
sub.addEventListener("click",()=>{
    count.innerHTML--;
    setColor();
})
resetCount.addEventListener("click",()=>{
    count.innerHTML = 0;
    setColor();
})
// buttons.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("add")){
//         count.innerHTML++;
//         setColor();
//     }
//     if(e.target.classList.contains("reset")){
//         count.innerHTML = 0;
//         setColor();
//     }
//     if(e.target.classList.contains("subtract")){
//         count.innerHTML--;
//         setColor();
//     }
// })

function setColor(){
    if(count.innerHTML > 0){
        count.style.color = "yellow";
    }else if(count.innerHTML < 0){
        count.style.color = "red";
    }else{
        count.style.color = "white";
    }
}