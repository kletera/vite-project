const personage={
    'nom': 'Dupon',
    'prénom': 'Guilaume',
    'age': 26,
};

let tabPersonage=Object.entries(personage);
console.log(tabPersonage);
let title=document.querySelector('h1');
title.textContent=`Exercice 2 : Selection`;
console.log(title);

let tagPersonage=document.querySelectorAll('p');
console.log(tagPersonage[0]);

for(let i=0;i<tagPersonage.length;i++){
    tagPersonage[i].innerText=`${tabPersonage[i][0]} : ${tabPersonage[i][1]}`;
}
console.log(tagPersonage);