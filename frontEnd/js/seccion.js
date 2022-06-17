
export const fillSection =(title,id) =>{
    return `<div class="container-task">
        <div class="card border-info mb-3" style="max-width: 80rem;">
            <div class="card-header">
                <h2>${title}</h2>
                    <input type="text" placeholder="new task" style="width : 250px">
                    <button class= "createList btn btn-success my-2 my-sm-0" type="submit">Add Task</button>
                    <button class= "deleteList btn btn-danger my-2 my-sm-0" onclick="deleteList(${id})" type="submit" style="margin-left: 200px">Delete
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
                    <td><button class="btn btn-warning">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </td>
                </tr>

            </table>
        </div>
</div>  `

    
}

export const fillTask = (task)=>{

}


