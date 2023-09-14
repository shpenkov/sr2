// let myAnimRight = document.querySelector(".my-anim-right")
// myAnimRight.classList.add("my-active-right")

function offset(param) {
    let rect = param.getBoundingClientRect();
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
}
function myAnimScroll(elem, myActiveClass){
    let elemHeight = elem.offsetHeight;
    let elemPosition = offset(elem);
    let startAnim = window.innerHeight - elemHeight/2;
    if(elemHeight > window.innerHeight){
        startAnim = window.innerHeight - window.innerHeight / 2;
    }
    if ((pageYOffset > elemPosition - startAnim) && pageYOffset < (elemPosition + elemHeight)) {
        elem.classList.add(myActiveClass);
    } else {
        if (!elem.classList.contains('no-anim-again')) {
            elem.classList.remove(myActiveClass);
        }
    }
}
let animRight = document.querySelectorAll(".my-anim-right")
if(animRight.length > 0){
for(let i = 0; i < animRight.length; i++){
myAnimScroll(animRight[i],"my-active-right");
window.addEventListener("scroll", () => {
myAnimScroll(animRight[i],"my-active-right");
});
}
}

let animLeft = document.querySelectorAll(".my-anim-left")
if(animLeft.length > 0){
for(let i = 0; i < animLeft.length; i++){
myAnimScroll(animLeft[i],"my-active-left");
window.addEventListener("scroll", () => {
myAnimScroll(animLeft[i],"my-active-left");
});
}
}
