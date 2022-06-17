let url = 'http://localhost:8080';
const taskSection = document.querySelector('.contenedor-card');
const Createbtn = document.querySelector('#btnAddList');


// taskSection.addEventListener("click", (e) => {
//     if (e.target.classList[0] == "DeleteList") {
//       DeleteList(e.target.previousElementSibling.textContent)
//     }else{
//       modifyTask(e.target.previousElementSibling.textContent)
//     } 
//   })
  
//   btn.addEventListener("click", (e) => {    
//       createList(document.querySelector('#list').value)
//   })
  
  
  
//   const insertList = (tareas) => {
//       let results = ''
//       let subta = ''
//       tareas.forEach(list => {
//         console.log(list)
//         list.tasks.forEach(task => {
//           subta += `
//           <tr class="table-light">
//                       <th scope="row">${task.id}</th>
//                       <td>${task.nombre}</td>
//                       <td><div class="form-check form-switch">
//                           <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">                        
//                         </div></td>
//                       <td><button type="submit" id="btnEditarSub" class="btn btn-info">Editar</button></td>
//                       <td><button type="submit" id="btnEliminarSub" class="btn btn-danger">Eliminar</button></td>                                 
//                     </tr>        
//           `
//         })
//           results += `
//           <div class="containerTarea card border-primary mb-3">
//                   <div class="cabezaTarea">
//                       <h2>${list.nombre}</h2>
//                       <spam class = "spamId">${list.id}</spam>
//                       <button type="submit" id="btnEliminar${list.id}" class="DeleteList btn btn-danger">Eliminar</button>
//                       <input type="text" class="form-control" id="task" aria-describedby="crear task" placeholder="task">                    
//                       <button type="submit" id="btnCrearSubtarea${list.id}" class="btn btn-primary">Agregar</button>
//                   </div>                        
//                 <table class="table table-hover">
//                   <thead>
//                     <tr>
//                       <th scope="col">ID</th>
//                       <th scope="col">Nombre task</th>
//                       <th scope="col">Completado?</th>                                  
//                     </tr>
//                   </thead>
//                   <tbody>
//                   ${subta}
//                   </tbody>                              
//                 </table>              
//               </div>
//                       `    
//       })    
//       taskSection.innerHTML = results    
//   }

/**
 * Muestras las listas almacenadas en la base de datos usando una solicitud tipo  GET
 * en la cual se concatena la URL mas la ruta especifica que tiene el endpoint del backend para traer la información completa
 * 
 */

async function showList(){

    let response = await fetch(`${url}/lista`)

    let data = await response.json()
    console.log(data)
    // insertList(data)
    
}

showList()





/**
 * Muestras las tareas almacenadas en la base de datos usando una solicitud tipo  GET
 * en la cual se concatena la URL mas la ruta especifica que tiene el endpoint del backend para traer la información completa
 * 
 */
async function showTask(){

    let response = await fetch(`${url}/tareas`)

    let data = await response.json()
    console.log(data)
    // insertList(data)
    
}

showTask()

// async function createList(nombre){
    
//     let informationReceipt = await{
//       method: "POST",
//       headers: {
//         "Content-type": "application/json; charset=utf-8"
//       },
//       body: JSON.stringify({
//         nombre: nombre
        
//       })
//     },
//       response = await fetch(`${url}/crearlista`, informationReceipt)
//       showList()             
// }

// async function DeleteList(id){
    
//     let informationReceipt = {
//       method: "DELETE",
//       headers: {
//         "Content-type": "application/json; charset=utf-8"
//       },     
//     },
//       res = await fetch(`${url}/api/list/${id}`, informationReceipt)
//       showList()
// }

// ///CRUD tasks

// async function crearSubTarea(){
    
//     let informationReceipt = {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json; charset=utf-8"
//       },
//       body: JSON.stringify({        
//             list: {
//                 id: 6
//             },
//             nombre: "pruebasubtarea"                 
                 
//       })
//     },
//       res = await fetch(`${url}/api/task`, informationReceipt)

// }

// async function modifyTask(id){
    
//     let informationReceipt = {
//       method: "PUT",
//       headers: {
//         "Content-type": "application/json; charset=utf-8"
//       },
//       body: JSON.stringify({        
//             list: {
//                 id: 6
//             },
//             nombre: "pruebassssssa"                 
                 
//       })
//     },
//       res = await fetch(`${url}/api/task/${id}`, informationReceipt)
// }

// async function eliminarSubTarea(id){
    
//     let informationReceipt = {
//       method: "DELETE",
//       headers: {
//         "Content-type": "application/json; charset=utf-8"
//       },     
//     },
//       res = await fetch(`${url}/api/task/${id}`, informationReceipt)
// }