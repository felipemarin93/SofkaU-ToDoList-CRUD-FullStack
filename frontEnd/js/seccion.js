
export const fillSection =(titleList,idList,e) =>{
    return `<div class="container-task">
        <div class="card border-info mb-3" style="max-width: 80rem;">
            <div class="card-header">
                <h2 >${titleList}</h2>
                    <input type="text" placeholder="new task" style="width : 250px"></input>
                    <button class= "createTask btn btn-success my-2 my-sm-0" type="submit" value="${idList}" >Add Task</button>
                    <spam  id="novisible"class = "spamId">${idList}</spam>
                    <button class= "deleteList btn btn-danger my-2 my-sm-0" " type="submit" style="margin-left: 200px" value="${idList}">Delete
                List</button>
        </div>
        <div class="card-body">
            <table id="tabla-tarea" class="table table-hover">
                <tr>
                    <th>Task Name</th>
                    <th>Completed</th>
                    <th>Actions</th>

                </tr>
                <tr>
                    <td>My First task</td>
                    <td>
                        <input class="form-check-input" type="checkbox" value="" id="checkbox"
                            style="text-align:right">
                    </td>
                    <td><button class="btn btn-warning">Edit Task</button>
                        <button class="btn btn-danger">Delete Task</button>
                    </td>
                </tr>

            </table>
        </div>
</div>  `

    
}



export const fillSection2 =(titleList,idList,tarea) =>{
    return `<div class="container-task">
        <div class="card border-info mb-3" style="max-width: 80rem;">
            <div class="card-header">
                <h1 >${titleList}</h1>
                    <input type="text" placeholder="new task" style="width : 250px">
                    <button class= "createTask btn btn-success my-2 my-sm-0" type="submit" value="${idList}">Add Task</button>
                    <spam  id="novisible"class = "spamId">${idList}</spam>
                    <button class= "deleteList btn btn-danger my-2 my-sm-0" " type="submit" style="margin-left: 200px" value="${idList}">Delete
                List</button>
        </div>
        <div class="card-body">
            <table id="tabla-tarea" class="table table-hover">
                <tr>
                    <th><h5>Task Name</h5></th>
                    <th><h5>Completed</h5></th>
                    <th><h5>Actions</h5></th>

                </tr>
                ${tarea}

            </table>
        </div>
</div>  `

    
}




