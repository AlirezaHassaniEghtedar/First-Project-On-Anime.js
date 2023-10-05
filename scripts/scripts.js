let container = document.querySelector(".container");
let header = document.querySelector("header");

for (let i = 1; i <= 100; i++) {
    let dot = document.createElement("div");
    dot.classList.add("element");
    container.appendChild(dot);
}

let allDots = document.querySelectorAll(".element");
let animation = anime.timeline({
    targets : allDots ,
    easeing : 'easeInOutExpo' ,
    loop : true,
    delay : anime.stagger(100 , {grid : [10 , 10] , from : 'center'})
})

animation
.add({
    rotateZ : 180 ,
    translateY : anime.stagger(-20 , {grid : [10 , 10] , from : 'center' , 'axis' : 'y'}) , 
    translateX : anime.stagger(-20 , {grid : [10 , 10] , from : 'center' , 'axis' : 'x'}) ,
    opacity : 1 
})

.add({
    borderRadius : 50 ,
})

.add({
    scale : 0.2 ,
    opacity : 0.2 ,
})

.add({
    rotateZ : 180 ,
    translateY : anime.stagger(0 , {grid : [10 , 10] , from : 'center' , 'axis' : 'y'}) , 
    translateX : anime.stagger(0 , {grid : [10 , 10] , from : 'center' , 'axis' : 'x'}) ,
    opacity : 1 
})

.add({
    scale : 1 ,
    borderRadius : 0 ,
})

.add({
    rotateZ : -90 ,
})

window.onscroll = () => {
    if(document.documentElement.scrollTop > 20) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}