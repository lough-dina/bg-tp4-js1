"use strict"
const Students = [ //tableau d'objets slide 41
     {id : '1000',  
      nom : 'JOHN',
      prenom : 'DOE',
      note : 14.5,
       
     },
     { id : '2000',  
      nom : 'BOB',
      prenom : 'CARTLON',
      note : 7.1, 
      
     },
     {id : '3000',  
      nom : 'RAYANE',
      prenom : 'SMITH',
      note : 13.3,  
      
       
     }

]

function B(a){ //les fonctions slide 47
   if(a>=10)
      return"ADMIS";
   else
      return"AJOURNE";

}

function A() { //les fonctions slide 47
   console.log(Students[0].id+"-"+B(Students[0].note)); 
   console.log(Students[1].id+"-"+B(Students[1].note));
   console.log(Students[2].id+"-"+B(Students[2].note)); 
}