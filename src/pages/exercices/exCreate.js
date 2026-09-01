const userData = {
    name: 'John delavega',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img: 'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
};

const divUser=document.querySelector('.container');
console.log(divUser);
divUser.style.background = "linear-gradient(rgb(230, 100, 101), rgb(145, 152, 229))";
divUser.style.width="fit-content";
divUser.style.padding="10px";
divUser.style.margin="auto";
divUser.style.color="white";

// Creation et intégration 
const ImgOne=document.createElement('img');
ImgOne.src=userData.img;
ImgOne.alt='Image du cosplayer fou';
ImgOne.style.height="300px"
divUser.append(ImgOne);
const nameUser=document.createElement('p');
nameUser.textContent= userData.name
divUser.append(nameUser);
const emailUser=document.createElement('p');
emailUser.textContent=userData.email;
divUser.append(emailUser);
const ageUser=document.createElement('p');
ageUser.textContent=userData.age;
divUser.append(ageUser);
const dateUser=document.createElement('p');
dateUser.textContent=userData.dob;
divUser.append(dateUser);
const activeUser=document.createElement('p');
let activity =()=> userData.active ? "Online" : "Offline";
activeUser.textContent= activity();
divUser.append(activeUser);

