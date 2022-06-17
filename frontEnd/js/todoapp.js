let url = 'http://localhost:8080';

import {fillSection} from "./seccion.js"
const $container_task = document.querySelector('.container-task');
const $createList = document.querySelector('#btnAddList');
let result = "";
let resultTask="";


/**
 * Este Fetch obtiene la data de las listas de la BD y transforma dicho objeto en uno JSON, también llama el
 * método showList para mostralas
 */

fetch(url+`/lista`)
    .then(response=>response.json())
    .then(cardJson=>showList(cardJson))
    .catch(error=>alert(error.message));

     /**
    * Función que obtiene las listas en el DOM con sus respectivas listas,
    * además recorre cada element de dicho arreglo obtenido para obtener el nombre y el id de las listas
    * Por último agrega cada card para cada lista en el HTML principal
    */ 
    const showList = async (cards)=>{
        let card = "";
        cards.forEach(e => {
            card+= fillSection(e.nombre, e.id);
        });
        $container_task.innerHTML = card;
        
    }
    /**
    * Función de evento del click para agregar lista capturando el valor que tiene el input del
    * HTML, y llama a la función crear enviandole dicho valor, por último recarga la página para actualizar los cambios.
    */   
     $createList.addEventListener('click', e => {
        e.preventDefault();
        createList(document.getElementById('list-name').value)
        location.reload();
    
     })

/**
 * Esta función de  crear Lista recibe como paramentro el arreglo y lo transforma en JSON para enviar la 
 * solicitud de tipo POST al backend para insertar un nuevo registro en la entidad de Listas, por ultima trae la información
 * y refresca la página.
 */
   
      async function createList(newLista) {
            
             let informationReceipt = {
                 method: "POST",
                 headers: {
                     "Content-type": "application/json; charset=utf-8"
                 },
                 body: JSON.stringify({
                     nombre: newLista
                 })
             },
                 res = await fetch(`${url}/crearlista`, informationReceipt)

                showList();
         } 
    

         
    //muestra las listas en la BD
    // async function mostrarList() {
    //     let res = await fetch(`${url}/listas`)
    //     let data = await res.json()
    //     .catch(error => console.log(error))
    //     console.log(data)
    //     mostrar(data)
    // }

    // async function createList(nombre){
    
    //          let informationReceipt = await{
    //            method: "POST",
    //            headers: {
    //              "Content-type": "application/json; charset=utf-8"
    //            },
    //            body: JSON.stringify({
    //              nombre: nombre
                
    //            })
    //          },
    //            response = await fetch(`${url}/crearlista`, informationReceipt)
    //            showList()    
    //         }
    
/**
 * Esta función muestra las listas almacenadas en la base de datos usando una solicitud tipo  GET
 * en la cual se concatena la URL mas la ruta especifica que tiene el endpoint del backend para traer la información completa
 * 
 */


 const showTask = (tasks) =>{
     let card = "";
     tasks.forEach(element => {
         card+= fillSection(element.nombre);
     });
     $container_task.innerHTML = card;
 }


/**
 * Esta función Muestra las tareas almacenadas en la base de datos usando una solicitud tipo  GET
 * en la cual se concatena la URL mas la ruta especifica que tiene el endpoint del backend para traer la información completa
 * 
 */
//   async function showTaskstiven(){

//       let response = await fetch(`${url}/tareas`)

//       let data = await response.json()
//       console.log(data)
//          insertList(data)
    
//   }

//  async function deleteList(id){
//     try {
//          let informationReceipt = {
//              method: "DELETE",
//              headers: {
//                "Content-type": "application/json; charset=utf-8"
//              },     
//            },
//             res = await fetch(`${url}/eliminarlista/${id}`,informationReceipt)
//              showList()
//              location.reload()

//     } catch (error) {
//         console.log("Elemento no existe en BD");
//     }
// }
     

    // deleteList(14)

    // taskSection.addEventListener("onclick", (event) => {
    //     if (event.target.classList[0] == "DeleteList") {
    //       deleteList(event.target.previousElementSibling.textContent)
    //     }else{
    //       modifyTask(event.target.previousElementSibling.textContent)
    //     } 
    //   })
    
    //   btn.addEventListener("onclick", (event) => {    
    //       deleteList(document.querySelector('.deleteList').value)
    //   })


    $container_task.addEventListener("click", async (e) => {
        if (e.target.classList[0] == "deleteList") {
           deleteList(e.target.previousElementSibling.textContent)
          
        }
        
        //revisar
        if (e.target.classList[0] == "createTask") {    
          
            if (e.target.parentElement.children[3].textContent == "Crear") {
              let dato = {
                nombre:e.target.previousElementSibling.value,
                id:e.target.parentElement.children[1].children[1].textContent
              }
              
              createTask(dato.nombre,dato.id)   
              console.log(dato.nombre);   
            }
                
          }
    
    })

    async function deleteList(id) {
        
        let informationReceipt = {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=utf-8"
            },
        },
            res = await fetch(`${url}/eliminarlista/${id}`, informationReceipt)
    
        location.reload()
        
    }