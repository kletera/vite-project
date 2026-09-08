function modifInterval(){
    const titleInterval=document.createElement('h2');
    titleInterval.innerText='Titre Time';
    setInterval(() => {
        console.log('time')
        document.body.append(titleInterval);
        document.body.style.backgroundImage = 'linear-gradient(#e66465, #9198e5)';
    }, 3000);
}
modifInterval();