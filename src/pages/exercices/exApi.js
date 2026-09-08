const mainBody=document.querySelector('main');
mainBody.style.padding='10px';
// console.log(mainBody);
const articleBody=document.querySelector('article');

async function pokemon(url) {
    try{
        const result = await fetch(url);
        if(!result.ok){
            throw new Error("Erreur : "+result.status);
        }
        // console.log(result);
        const data=await result.json();
        // console.log(data);
        // console.log(data.results.length); 
        for(let i=0;i<data.results.length;i++){
            let divData=document.createElement('div');
            divData.classList.add('divPoke');
            let pData=document.createElement('p');
            pData.innerText=data.results[i].name;
            let imgData=document.createElement('img');
            imgData.src=await spritePoke(data.results[i].url);
            articleBody.append(divData);
            divData.append(pData);
            divData.append(imgData);
        }
        return data.next;
    }catch(error){
        console.error("Erreur "+error);
        return null;
    }
}

async function spritePoke(urlSprite) {
    try{
        const result=await fetch(urlSprite);
       if(!result.ok){
            throw new Error("Erreur : "+result.status);
        }
        const data=await result.json();
        let url=data.sprites.front_default;
        // console.log(url);
        return url;
        
    }catch(error){
        console.error("Erreur "+error);
        return "";
    }
}

async function loadAllPokemon(startUrl) {
    let next = startUrl;
    while (next != null) {
        next = await pokemon(next);
    }
}


async function init() {
    await loadAllPokemon('https://pokeapi.co/api/v2/pokemon');
    const divEvent = document.querySelectorAll('.divPoke');
    console.log(divEvent);
    return divEvent;
}

// Ouvrir la popup
init().addEventListener('click', () => {
  popup.classList.add('active');
});

// Fermer la popup
init().addEventListener('click', () => {
  popup.classList.remove('active');
});
// async function user() {
//     try{
//         const result=await fetch(`https://jsonplaceholder.typicode.com/users`);
//         if(!result.ok){
//             throw new Error("Erreur : "+result.status);
//         }
//         const data= await result.json();
//         console.log(data);
//         data.forEach(element => {
//             let pData=document.createElement('p');
//             pData.innerText=`(id:${element.id}) ${element.name} - ${element.email}`
//             mainBody.append(pData);
//         });
//     }catch(error){
//         console.error("Erreur "+error);
//     }
// }
// user()