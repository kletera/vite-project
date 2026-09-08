const forConnect=document.querySelector('#formConnect');
const inputForm=document.querySelectorAll('input');
const btConnect=document.querySelector('button');
console.log(forConnect,inputForm,btConnect);

const regex= {
    regexMail : /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/,
    charDecimal : /\d/,
    charSpecial : /[$&@!]/,
}

inputForm[0].addEventListener('keyup',(e)=>{
    // console.log(inputForm[0].value)
    const isValid = regex.regexMail.test(inputForm[0].value);
    inputForm[0].style.backgroundColor = isValid ? "green" : "red";
})

const divConnect=document.querySelector('#styleConnect');
const divMessage=document.createElement('div');
divMessage.style.border= '1px solid';
divMessage.style.width='fit-content';
divMessage.style.padding='10px'
divMessage.classList.add('flexMessage');
divConnect.append(divMessage);
const pwMessage=document.createElement("p")
pwMessage.innerText=`Le mot de passe est :`;
divMessage.append(pwMessage);
let pwError=document.createElement('p');
divMessage.append(pwError);

inputForm[1].addEventListener('keyup',(e)=>{
    let errorMessages = '';
    // Ici faudra tester le MDP avec la longueur
    //Si trop court on cumule dans errorMessages "mdp trop court"
    if(inputForm[1].value.length<6 || inputForm[1].value.length>16){
        errorMessages+=`\nVotre mot de passe doit contenir entre 6 et 16 caractère.`;
    }

    // Si le mot de passe ne match pas la regex pour les decimales on on cumule dans errorMessages "il faut un chiffre"
    if(inputForm[1].value.match(regex.charDecimal)==null){
        errorMessages+=`\nVotre mot de passe doit contenir 1 chiffre.`;
    }
    //Si le mot de passe ne match pas la regex pour les charactères spé on cumule dans errorMessages "il faut un caractère spé"
    if(inputForm[1].value.match(regex.charSpecial)==null){
        errorMessages+=`\nVotre mot de passe doit contenir 1 spéciale ($&@!)`;
    }

    //Si notre errorMessages  n'est pas vide, on affiche les erreurs (ce que contiendrai ou pas errorMessages) et on fait un peu de rouge au niveau du style
    if(errorMessages!=""){
        pwError.innerText=errorMessages;
        divMessage.style.borderColor='red';
        divMessage.classList.remove('flexMessage');
    }else{
        //Sinon ca veut dire qu'on a bon on affiche un message de confirmation et on fait un peu de style en vert.
    
        //Logique de vlidation c'est OK le mot de passe est conforme
        pwError.innerText=`\nC'est OK le mot de passe est conforme`;
        divMessage.style.borderColor='green';
        divMessage.classList.remove('flexMessage');
    }

})

