function headerFunction(){
    const header=document.createElement('header');
    header.innerHTML=
    `<div class="navbar bg-base-100 shadow-sm">
        <div class="flex-1">
            <a class="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
            <li><a href="http://localhost:5173/">Home</a></li>
            <li><a href="http://localhost:5173/src/pages/exercices/exercice.html">Exercice 1</a></li>
            </ul>
        </div>
    </div>`;
    const bodyPage=document.querySelector('body');
    bodyPage.prepend(header);
}
headerFunction();