let url = 'http://localhost:8080';

import {fillSection} from "./seccion.js"
const $container_task = document.querySelector('.container-task');
const $createList = document.querySelector('#btnAddList');


fetch(url+`/lista`)
    .then(response=>response.json())
    .then(cardJson=>showList(cardJson))
    .catch(error=>alert(error.message));

    const showList = (cards)=>{
        let card = "";
        cards.forEach(e => {
            card+= fillSection(e.nombre, e.id);
        });
        $container_task.innerHTML = card;
        
    }


   
    //Funcion crear lista , consulta la ruta del fetch y realiza el metodo post con los datos 
     async function createList(lista) {
             
             let informationReceipt = {
                 method: "POST",
                 headers: {
                     "Content-type": "application/json; charset=utf-8"
                 },
                 body: JSON.stringify({
                     nombre: lista
                 })
             },
                 res = await fetch(`${url}/crearlista`, informationReceipt)
             showList();
         } 
    
         $createList.addEventListener('click', e => {
            e.preventDefault();
            createList(document.getElementById('list-name').value)
            location.reload();
        
         })
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
 * Muestra las listas almacenadas en la base de datos usando una solicitud tipo  GET
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
 * Muestra las tareas almacenadas en la base de datos usando una solicitud tipo  GET
 * en la cual se concatena la URL mas la ruta especifica que tiene el endpoint del backend para traer la información completa
 * 
 */
  async function showTaskstiven(){

      let response = await fetch(`${url}/tareas`)

      let data = await response.json()
      console.log(data)
         insertList(data)
    
  }

 async function deleteList(id){
    try {
         let informationReceipt = {
             method: "DELETE",
             headers: {
               "Content-type": "application/json; charset=utf-8"
             },     
           },
            res = await fetch(`${url}/eliminarlista/${id}`,informationReceipt)
             showList()
             location.reload()

    } catch (error) {
        console.log("Elemento no existe en BD");
    }
}
     

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