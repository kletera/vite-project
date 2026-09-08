class Imc {
    //* Constructor -> initialise les données
    constructor(name, poids, taille) {
        this.name=name;
        this.poids=poids;
        this.taille=taille;
    }
    //* Méthode pour Le calcul
    calculImc() {
        return (this.poids/(this.taille*this.taille)).toFixed(2);
    }
    //* methode pour gérer Affichage
    display() {
        console.log(`${this.name} (${this.poids} kg, ${this.taille} M) a un IMC de: ${this.calculImc()}`);
    }
 
}
//* progr principal -> on fait l'injection des données
let list = [
    new Imc("Sébastien Chabal", 135, 1.7),//{nom:blblb, taill:efsdkjfh , poid:rozieurozeiur}
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
    new Imc("LOLO de la Vega", 400, 1.55)
];
console.log(list);
// //*Boucle qui parcourt le tableau pour utiliser la méthode .display sur chacune des cases
for(let i=0; i<list.length;i++){
    list[i].display();
}

class Character{
    // Propriétés 
    constructor(name){
        this.name=name;
        this.hp=100;
        this.maxHp=100;
        this.stamina=50;
        this.mp=50;
        this.attackPower=15;
        this.magicPower=25;
        if(name.startsWith("[boss]")){
            this.hp+=200;
            this.maxHp+=200;
            this.mp+=100;
            this.stamina+=40;
            this.attackPower+=20;
            this.magicPower+=100;
        }
    }

    // Méthodes 
    attack(target){
        if(this.stamina<10){
            console.log("L'attaque du "+this.name+" a échouer stamina insufisant");
        }else if(target.hv<0){
            console.log(`L'attaque du ${this.name} a échouer ${target.name} est déja éliminer`);
        }else{      
            this.stamina-=10;
            target.hp=target.hp-this.attackPower;
            console.log(`${this.name} a infliger ${this.attackPower} dg, ${target.name} n'a plus que ${target.hp}/${target.maxHp}`);
            console.log(`${this.name}-> stamina: ${this.stamina}/50`);
            target.hp<0 ? console.log(`${this.name} bravo vous avez réussi a éliminer ${target.name}`) : "";
        }
        
    }

    attackMagique(target){
        if(this.mp>=15){
            this.mp-=15;
            target.hp=target.hp-this.magicPower;
            console.log(`${this.name} a infliger ${this.magicPower} dg, ${target.name} n'a plus que ${target.hp}/${target.maxHp}`);
            console.log(`${this.name}-> mp: ${this.mp}/50`)

        }else{
            console.log("L'attaque magique du "+this.name+" a échouer mp insufisant");
        }
    }

    soin(amount){
        if(this.hp+amount>this.maxHp){
            this.hp=this.maxHp;
            console.log(`${this.name} se soigne il a récupérer tous ces pv ${this.hp}/${this.maxHp}`);
        }else{
            this.hp+=amount;
            console.log(`${this.name} se soigne il a récupérer ${amount} pv il a maintenant ${this.hp}/${this.maxHp}`);
        }
    }
    bullie(attanquant1,attanquant2,attanquant3,attanquant4, ){
        if(attanquant1.stamina>=10 && attanquant2.stamina>=10 && attanquant3.stamina>=10 && attanquant4.stamina>=10){
            attanquant1.stamina-=10;
            attanquant2.stamina-=10;
            attanquant3.stamina-=10;
            attanquant4.stamina-=10;
            this.hp-=(attanquant1.attackPower+attanquant2.attackPower+attanquant3.attackPower+attanquant4.attackPower);
            console.log(`${this.name} est tomber par terre et se fait ruer de coup par 4 attaquant. Il lui reste ${this.hp}/${this.maxHp}pv.`);
        }else{
            console.log(`${this.name} a reussi a faire une roulade et a échaper a m'attaque de ces bullie.`)
        }
    }
}

// 1. Initialisation du combat
const hero = new Character("Aragon");
const boss = new Character("[boss] Gritch le Troll");

const Frodon = new Character("Frodon");
const Gandalf = new Character("Gandalf ");
const Legolas = new Character("Legolas ");

console.log("--- ⚔️ LE COMBAT COMMENCE ⚔️ ---");
console.log(`${hero.name} arrive face à ${boss.name} !`);
console.log("----------------------------------");

// 2. Tour 1 : Le héros attaque physiquement
hero.attack(boss);

// 3. Tour 2 : Le héros utilise la magie
hero.attackMagique(boss);

// 4. Tour 3 : Le monstre réplique (Test de l'interaction entre deux instances)
// On utilise le boss pour attaquer le héros
boss.attack(hero);

// 5. Tour 4 : Le héros est affaibli, il doit se soigner
console.log("\n--- ⚠️ Le héros est mal en point ! ---");
hero.soin(30);

// 6. Tour 5 : Tentative d'attaque magique alors qu'il n'a presque plus de mana
// (On va forcer une grosse dépense pour tester la limite)
console.log("\n--- 🪄 Tentative de sort ultime ---");
hero.attackMagique(boss); // Doit fonctionner
hero.attackMagique(boss); // Doit échouer (plus de MP)

// 7. Tour 6 : Tentative d'attaque physique alors qu'il n'a plus de stamina
console.log("\n--- 🏃 Tentative d'attaque épuisée ---");
hero.attack(boss); // Doit fonctionner
boss.bullie(hero,Frodon,Gandalf,Legolas);
hero.attack(boss); // Doit échouer (plus de stamina)

// 8. Résultat Final
console.log("----------------------------------");
console.log(" FIN DU COMBAT ");
console.log(`${hero.name} Statut final -> HP: ${hero.hp}/${hero.maxHp} | Stamina: ${hero.stamina} | MP: ${hero.mp}`);
console.log(`${boss.name} Statut final -> HP: ${boss.hp}/${boss.maxHp}`);