const title = document.querySelector('h1');
console.log(title);

const buttonAll = document.getElementsByClassName('buttonEvent');
console.log(buttonAll);

// Utilisation de addEventListener avec classList (add, remove, toggle)
buttonAll[0].addEventListener("click", (event) => {
    title.classList.add("titleStyle");
});
buttonAll[1].addEventListener("click", (event) => {
    title.classList.remove("titleStyle");
});
buttonAll[2].addEventListener("click", (event) => {
    title.classList.toggle("titleStyle");
});

// Style des button
buttonAll[0].style.color="blue";
buttonAll[1].style.color="purple";
buttonAll[2].style.color="#b5b52b";
buttonAll[2].style.backgroundColor="white"
for(let i=0; i<buttonAll.length;i++){
    buttonAll[i].style.border="none";
    buttonAll[i].style.padding="10px"
    buttonAll[i].style.borderRadius="5px";
}

// Selection du body et création d'une balise mis a l'intérieur
const body=document.querySelector("body");
console.log(body);
const pMillion=document.createElement("p");
pMillion.textContent="Tu a gagnier 1 million";
pMillion.style.backgroundColor="green";
pMillion.style.textAlign="center";
pMillion.style.color="red";
console.log(pMillion);
body.prepend(pMillion);

// Apparition et disparition de la balise p quand on part du body
body.addEventListener("mouseleave",(e)=>{
    pMillion.classList.remove("display");
})
body.addEventListener("mouseenter",(e)=>{
    pMillion.classList.add("display");
})

// Localisation de la souris
let mouseEvent={
    x : 0,
    y : 0,
}
body.addEventListener("mousemove",(e)=>{
    mouseEvent.x=e.x;
    mouseEvent.y=e.y;
    console.log(mouseEvent);
});


const inputKey=document.querySelector("input");
const resultKey=document.querySelector("#rendu");
console.log(inputKey);
console.log(resultKey);
const pResultKey=document.createElement('p');
pResultKey.style.backgroundColor="#fbff91";
resultKey.append(pResultKey);
console.log(pResultKey);

const buttonEnvoyer=document.querySelector(`button[type="submit"]`);
buttonEnvoyer.style.color="blue"
buttonEnvoyer.style.border="none";
buttonEnvoyer.style.padding="10px"
buttonEnvoyer.style.borderRadius="5px";
console.log(buttonEnvoyer);

// initialisation du LocalStorage
localStorage.setItem("myText","Smith");
inputKey.value=localStorage.myText;
pResultKey.innerText=inputKey.value;

// input + LocalStorage
inputKey.addEventListener("keyup",(e)=>{
    e.preventDefault();
    pResultKey.innerText=inputKey.value;
    buttonEnvoyer.disabled=inputKey.value.length>5 ? true : false;
    localStorage.setItem("myText",inputKey.value);
})
console.log(inputKey.value.length);

// const formSpy=document.getElementById('#formSpy');
// formSpy.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     localStorage.setItem("myText", pResultKey.value)
// })


