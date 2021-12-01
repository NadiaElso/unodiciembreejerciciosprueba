//Una materia de la carrera de Ingeniería de Sistemas tiene 30 alumnos, divididos en 3 comisiones. Estos arreglos contienen las notas finales de los alumnos en cada comisión :
//comisionA = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8]
//comisionB = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8]
//comisionC = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9]
//1) Crear una función que devuelva el mayor promedio y a que comisión corresponde.
//2) Crear una función que devuelva el menor promedio y a que comisión corresponde.
//3) Teniendo en cuenta que la materia se aprueba con 6, crear una función que
//devuelva la cantidad de desaprobados en una comisión, mostrar el resultado para cada comisión.
//4) Crear una función que devuelva la menor nota de una comisión, mostrar el resultado
let comisionA = [8, 5, 7, 10, 9, 2, 4, 8, 6, 8]
let comisionB = [3, 6, 8, 5, 4, 7, 7, 4, 6, 8]
let comisionC = [7, 6, 9, 8, 9, 8, 5, 7, 10, 9]
function mayorpromedio(array:number[]=[],array1:number[]=[],array2:number[]=[]) {
  let promedio1:number;
  promedio1=0;
  let promedio2:number;
  promedio2=0;
  let promedio3:number;
  promedio3=0;
  for (let index = 0; index < array.length; index++) {
    promedio1+=array[index]/array.length;
   
       }
      for (let inde = 0; inde < array1.length; inde++) {
        promedio2+=array1[inde]/array1.length;
       
          }
for (let ind = 0; ind < array2.length; ind++) {
  promedio3+=array2[ind]/array2.length;
  
  }
  if (promedio1>promedio2&&promedio1>promedio3) {
    console.log(`El Mayor es el promedio de la comision A es: ${promedio1}`)
  }
  if (promedio2>promedio1&&promedio2>promedio3) {
    console.log(`El Mayor promedio es el de la comision B es: ${promedio2}`)
  }
  if (promedio3>promedio1&&promedio3>promedio1) {
    console.log(`El Mayor  promedio es el  de la comision C es: ${promedio3}`)
  }
  return mayorpromedio
}
mayorpromedio(comisionA,comisionB,comisionC)
function menorpromedio(array:number[]=[],array1:number[]=[],array2:number[]=[]) {
  let promedio1:number;
  promedio1=0;
  let promedio2:number;
  promedio2=0;
  let promedio3:number;
  promedio3=0;
  for (let index = 0; index < array.length; index++) {
    promedio1+=array[index]/array.length;
    
       }
      for (let inde = 0; inde < array1.length; inde++) {
        promedio2+=array1[inde]/array1.length;
        
          }
for (let ind = 0; ind < array2.length; ind++) {
  promedio3+=array2[ind]/array2.length;
  
  }
  if (promedio1<promedio2&&promedio1<promedio3) {
    console.log(`El menor promedio es el de la comision A : ${promedio1}`)
  }
  if (promedio2<promedio1&&promedio2<promedio3) {
    console.log(`El menor promedio es el de la comision B : ${promedio2}`)      
  }
  if (promedio3<promedio1&&promedio3<promedio1) {
    
 
  console.log(`El menor promedio es el de la comision C : ${promedio3}`)
  }

  return menorpromedio
}
menorpromedio(comisionA,comisionB,comisionC)
function desaprobados(array:number[]=[],array1:number[]=[],array2:number[]=[]) {
 
 let cantidada:any[]=new Array(10);
 let cantidad1:number;
 cantidad1=0;
 
 let cantidadb:any[]=new Array(array1);
 
 let cantidadc:any[]=new Array(array2);
 
for (let a = 0; a < array.length; a++) {
 if (array[a]<6) {
 cantidad1=array[a]
  
 }

 }
 
  for (let b = 0; b < array1.length; b++) {
    if (array1[b]<6) {
      
    }
    }
    for (let c = 0; c < array2.length; c++) {
      if (array2[c]<6) {
      
    
      }
      }
      console.log("La cantidad de desaprobados en la comision A: "  + cantidada)
      console.log("La cantidad de desaprobados en la comision B: "  + cantidadb)
      console.log("La cantidad de desaprobados en la comision C: "  + cantidadc)
      console.log(cantidad1)
      return desaprobados  
      }
  
       
      desaprobados(comisionA,comisionB,comisionC)
      
 


function menornotadecomision(array:number[]=[]) {
  
  let nota1:number;
  nota1=0;
  let nota2:number;
  nota2=0;
  let nota3:number;
  nota3=0;
  let nota4:number;
  nota4=0;
  let nota5:number;
  nota5=0;

   for (let k = 0; k < array.length; k++) {
  if (array[k]===1) {
   
      nota1=array[k];
    }else if(array[k]===2){
      nota2=array[k];
    }else if(array[k]===3){
      nota3=array[k];
    }else if(array[k]===4){
      nota4=array[k];

    }else if(array[k]===5){
      nota5=array[k];
    }
 
   }
   if (nota1&&nota2&&nota3&&nota4&&nota5) {
     console.log(nota1)
   }else if(nota1&&nota2&&nota3&&nota4){
    console.log(nota1)
   }else if(nota1&&nota2&&nota3)
   

   }
   

   }
   return menornotadecomision

menornotadecomision(comisionA)










