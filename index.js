// document.getElementsByClassName("drum")[6].addEventListener("click", handleClick);
// document.getElementsByClassName("drum")[5].addEventListener("click", handleClick);
// document.getElementsByClassName("drum")[4].addEventListener("click", handleClick);
// document.getElementsByClassName("drum")[3].addEventListener("click", handleClick);
// document.getElementsByClassName("drum")[2].addEventListener("click", handleClick);
// document.getElementsByClassName("drum")[1].addEventListener("click", handleClick);
// document.getElementsByClassName("drum")[0].addEventListener("click", function(){
//     alert("I got clicked");
// });

// function handleClick(){
//     alert("Clicked");
// }


// // less code for above program
// for(i = 0; i < document.querySelectorAll(".drum").length; i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//         alert("Clicked");
//     })
// }


// let audio = new Audio("sounds/tom-1.mp3")

// for(i = 0; i < document.querySelectorAll(".drum").length; i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//         this.style.color = "White"
//     })
// }

// audios
let tom1 = new Audio("sounds/tom-1.mp3")
let tom2 = new Audio("sounds/tom-2.mp3")
let tom3 = new Audio("sounds/tom-3.mp3")
let tom4 = new Audio("sounds/tom-4.mp3")
let snare = new Audio("sounds/snare.mp3")
let crash = new Audio("sounds/crash.mp3")
let kick = new Audio("sounds/kick-bass.mp3")

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    animetion(event.key);
})

for(i = 0; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        let key = this.innerHTML;
        makeSound(key);
        animetion(key);
    })
}

function makeSound(key){

    switch(key){

        case "w":
            tom1.play();
            break;

        case "a":
            tom2.play();
            break;

        case "s":
            tom3.play();
            break;

        case "d":
            tom4.play();
            break;

        case "j":
            snare.play();
            break;

        case "k":
            crash.play();
            break;

        case "l":
            kick.play();
            break;
        
    default: console.log(key);
    }
}

function animetion(key){

    document.querySelector('.'+key).classList.add("pressed");

    setTimeout(function(){
        document.querySelector('.'+key).classList.remove("pressed");
    }, 100)
}