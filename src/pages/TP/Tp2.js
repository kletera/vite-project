import {teamMembers} from "./team"

const divTeam=document.querySelector("#team-grid");
console.log(divTeam);
function enderTeam(members){
    members.forEach(element => {
        console.log(element);
        const cardMemeber=document.createElement('div');
        cardMemeber.classList.add("card", "bg-base-100", "w-96", "shadow-sm");
        cardMemeber.style.gap="10px";
        cardMemeber.style.alignItems="center";
        divTeam.append(cardMemeber);

        const imgMember=document.createElement('img');
        imgMember.style.borderRadius='100px';
        imgMember.style.width='100px';
        imgMember.src=element.avatar;
        imgMember.alt=`Photo du memebre ${element.name}`

        const nameMember=document.createElement('h2');
        nameMember.classList.add("card-title"); 
        nameMember.innerText=element.name;

        const badgeRole=document.createElement('div');
        badgeRole.classList.add("badge", "badge-soft", "badge-primary");
        badgeRole.innerHTML=element.role;

        const descriptionMember=document.createElement('p');
        descriptionMember.innerText=element.bio;

        const badgeCompetance=document.createElement('div');
        badgeCompetance.style.display="flex";
        badgeCompetance.style.gap="10px"
        for(let i=0; i<element.skills.length;i++){
            const skillM=document.createElement('div');
            skillM.classList="badge badge-outline badge-primary";
            skillM.innerText=element.skills[i];
            badgeCompetance.append(skillM);
        }

        const infoMember=document.createElement('p');
        infoMember.innerText=`${element.experience} ${element.location}`;

        const divBut=document.createElement('div');
        divBut.classList="card-actions";

        cardMemeber.append(imgMember,nameMember,badgeRole,descriptionMember,badgeCompetance,infoMember,divBut);
        
        const btC=document.createElement("button");
        btC.innerText="Contact";
        btC.classList.add("btn", "btn-primary");

        const btP=document.createElement("button");
        btP.innerText="Profil"
        btP.classList.add("btn", "btn-primary");
        divBut.append(btC,btP);

    });
    
}
enderTeam(teamMembers);
/*
<div class="card bg-base-100 w-96 shadow-sm">
  <figure class="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
*/