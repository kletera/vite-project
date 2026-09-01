const title = document.querySelector('h1');
console.log(title);

const buttonAll = document.getElementsByClassName('buttonEvent');
console.log(buttonAll);

// const titleStyle;

buttonAll[0].addEventListener("click", (event) => {
    title.classList.add("titleStyle");
});
buttonAll[1].addEventListener("click", (event) => {
    title.classList.remove("titleStyle");
});
buttonAll[2].addEventListener("click", (event) => {
    title.classList.toggle("titleStyle");
});

buttonAll[0].style.color="blue";
buttonAll[1].style.color="purple";
buttonAll[2].style.color="#b5b52b";
// buttonAll.style.border="none";none;

const body=document.querySelector("body");
console.log(body);
const pMillion=document.createElement("p");
pMillion.textContent="Tu a gagnier 1 million";
console.log(pMillion);
body.append(pMillion);
body.addEventListener("mouseleave",(e)=>{
    pMillion.classList.remove("display");
})
body.addEventListener("mouseenter",(e)=>{
    pMillion.classList.add("display");
})

