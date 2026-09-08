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
    for(let i=0;i<jsonMovie.length ;i++){
        const divMv=document.createElement('div');
        document.body.appendChild(divMv);
    
        const titleMv=document.createElement('h2');
        titleMv.innerText=jsonMovie[i].title;
        divMv.appendChild(titleMv);

        const voteMv=document.createElement('span');
        voteMv.innerText=`${jsonMovie[i].vote} votes`;
         divMv.appendChild(voteMv);

        const btVorteMV=document.createElement('button');
        btVorteMV.innerText='Vote';
        btVorteMV.value=jsonMovie[i].id;
        
        divMv.appendChild(btVorteMV);

        btVorteMV.addEventListener('click', () => {
            const current = JSON.parse(localStorage.getItem("movie_vote"));
            const result = current.find(n => n.id === jsonMovie[i].id);
            result.vote += 1;
            localStorage.setItem("movie_vote", JSON.stringify(current));
            voteMv.innerText = `${result.vote} votes`; 
        });

    }
    
}
renderMovies();



// console.log(vote(1));
// const jsonMovie=JSON.parse();
