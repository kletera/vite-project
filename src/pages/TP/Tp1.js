// Préparation
const cardUser=document.querySelector('#cardUser');
const imgUser=document.querySelector('#imgUser');
const btuser=document.querySelector('button');
const nameUser=document.createElement('h2');
nameUser.classList.add('card-title','text-2xl');
const emailUser=document.createElement('p');
const adresseUser=document.createElement('p');
const phoneUser=document.createElement('p');
console.log(cardUser, imgUser);

// Apèlle de l'Api randomeuser
async function fetchUser() {
    try{
        const reponse=await fetch('https://randomuser.me/api/');
        if(!reponse.ok){
            throw new Error("Erreur"+reponse.status);   
        }
        const data=await reponse.json();
        const user=data.results[0];
        console.log(user)
        renderUser(user);
    }catch(err){
        console.log("Erreur"+err);
    }
}

// Insertion des information de l'utilisateur
function renderUser(user){
    imgUser.src=user.picture.medium;
    nameUser.innerText=`${user.name.title} ${user.name.first} ${user.name.last}`;
    emailUser.innerText=user.email;
    adresseUser.innerText=`${user.location.street.number} ${user.location.street.name} ${user.location.city} ${user.location.country}`;
    phoneUser.innerText=user.phone;
    cardUser.prepend(nameUser,emailUser,adresseUser, phoneUser);
}
fetchUser();

// Au click changement d'utilisateur
btuser.addEventListener('click',(e)=>{
    fetchUser();
})
