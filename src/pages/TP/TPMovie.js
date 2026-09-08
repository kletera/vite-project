const movie=[{
    id : 1,
    title  : "Inception",
    vote : 0,
},
{
    id : 2,
    title  : "The Dark Knight",
    vote : 0,
},
{
    id : 3,
    title  : "Interstellar",
    vote : 0,
},
{
    id : 4,
    title  : "Pulp Fiction",
    vote : 0,
},
{
    id : 5,
    title  : "parasite",
    vote : 0,
},
{
    id : 6,
    title  : "Gladiator",
    vote : 0,
}];

defaultMovies={
    id : 1,
    title  : "Inception",
    vote : 0,
};

localStorage.setItem("movie_vote",JSON.stringify(movie));

console.log(localStorage.getItem("movie_vote"));

function renderMovies(){
    // parse Json
    const jsonMovie=JSON.parse(localStorage.getItem("movie_vote"));
    console.log(jsonMovie.length);

    // Boucle construction html
    const article=document.createElement('div');
    article.classList.add('flex', 'gap-4','flex-wrap');
    document.body.appendChild(article);
    for(let i=0;i<jsonMovie.length ;i++){

        const divMv=document.createElement('div');
        divMv.classList.add("card", "bg-base-100", "w-96", "shadow-sm");
       article.appendChild(divMv);

        const card=document.createElement('div');
        card.classList.add('card-body','items-center', 'text-center', 'gap-4');
        divMv.appendChild(card);
    
        const titleMv=document.createElement('h2');
        titleMv.innerText=jsonMovie[i].title;
        card.appendChild(titleMv);

        const voteMv=document.createElement('span');
        voteMv.innerText=`${jsonMovie[i].vote} votes`;
        card.appendChild(voteMv);

        const btVorteMV=document.createElement('button');
        btVorteMV.innerText='Vote';
        btVorteMV.value=jsonMovie[i].id;
        btVorteMV.classList.add("btn", "btn-primary");
        card.appendChild(btVorteMV);

        vote(btVorteMV, voteMv);
    }
    
}

function vote(btVorteMV, voteMv){
    console.log(btVorteMV.value);
    btVorteMV.addEventListener('click', () => {
        const current = JSON.parse(localStorage.getItem("movie_vote"));
        const result = current.find(n => n.id === JSON.parse(btVorteMV.value));
        result.vote += 1;
        localStorage.setItem("movie_vote", JSON.stringify(current));
        voteMv.innerText = `${result.vote} votes`; 
    });

}
renderMovies();



// console.log(vote(1));
// const jsonMovie=JSON.parse();
