"use strict"

let etudiants =["Etudiant1","Etudiant2","Etudiant3"]//les tableaux slide 39

const etudiant ={ //type complexe slide 40
      nom : 'John',
      prenom : 'Doe',
      age : '30',
}

const Etudiants = [ //tableau d'objets slide 41
     {  
      nom : 'nom1',
      prenom : 'person1',
      age : '21',
       
     },
     {  
      nom : 'nom2',
      prenom : 'person2',
      age : '22',
     },
     {  
      nom : 'nom3',
      prenom : 'person3',
      age : '23',
       
     }


]
    function F1() { //les fonctions slide 47
      console.log(etudiants[0]); //sortie log slide 34
      console.log(etudiants[1]);
      console.log(etudiants[2]);  
    }

    function F2() {
      console.log(etudiant)  
    }

    function F3() {
        console.log(Etudiants[0].nom+"-"+Etudiants[0].prenom+"-"+Etudiants[0].age);
        console.log(Etudiants[1].nom+"-"+Etudiants[1].prenom+"-"+Etudiants[1].age);
        console.log(Etudiants[2].nom+"-"+Etudiants[2].prenom+"-"+Etudiants[2].age);
    }