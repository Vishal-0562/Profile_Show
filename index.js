const model = document.querySelector('.model');
const overlay = document.querySelector('.overlay');

const openProfile =() =>{
    model.classList.add("active");
    overlay.classList.add('overlayactive');
}

const closeModel = () =>{
    model.classList.remove("active");
    overlay.classList.remove("overlayactive");
}