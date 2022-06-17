let url = 'http://localhost:8080';

import {fillSection, fillSection2} from "./seccion.js"
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
          let tarea ="";
           await cards.forEach(e => {

            tarea ="";
            e.tarea.forEach(task => {
                
                tarea+= `
                <tr>
                    <td>${task.nombre}</td>
                    <td>
                        <input class="form-check-input" type="checkbox" value="" id="checkbox"
                            style="text-align:right">
                    </td>
                    <td><button class="btn btn-warning">Edit Task</button>
                        <button class="btn btn-danger">Delete Task</button>
                    </td>
                </tr>`
            });

                card+= fillSection2(e.nombre, e.id,tarea);
           });

            fillSection(cards);
          $container_task.innerHTML = card;  
        
      }

    //   const showList = async (cards)=>{
    //     let card = "";
    //      await cards.forEach(e => {

    //           card+= fillSection(e.nombre, e.id);
    //      });

    //       fillSection(cards);
    //     $container_task.innerHTML = card;  
      
    // }

    




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
         

         /**
          * Evento que escucha los clicks que se hacen dentro del contenedor, cuando clickeas
          * en el botón eliminar llama el método eliminar tarea y cuando se clickea en create tarea
          * llama la creación de dicho elemento.
          */
         $container_task.addEventListener("click", async (e) => {
            if (e.target.classList[0] == "deleteList") {
               deleteList(e.target.previousElementSibling.textContent)
              
            }
            if (e.target.classList[0] == "createTask") { 
                e.preventDefault()
                console.log(e.path[0].value);
                //if (e.target.parentElement.children[3].textContent == "Crear") {
                  let dato = {
                    nombre:e.target.previousElementSibling.value,
                    id:e.path[0].value
                  }
                  
                  createTask(dato.nombre, dato.id)   
                
                    
              }
        
        })
        /**
         * Función para eliminar una lista recibiendo el
         * @param {*} id que es capturado por el evento listener
         * por ultimo recarga la pagina
         */
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




 async function createTask(nombre,id){
    
        let informationReceipt = {
            method: "POST",
            headers: {
              "Content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({  
              nombre: nombre,
              completado: false,
              lista:{
                      id: id
                  }
            })
            
          },
        
            res = await fetch(`${url}/creartarea`, informationReceipt)
            location.reload()
            
  
}

async function deleteTask(id) {
            
    let informationReceipt = {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=utf-8"
        },
    },
        res = await fetch(`${url}/eliminartarea/${id}`, informationReceipt)

    location.reload()
    
}   





