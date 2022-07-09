
export const fillSection2 =(titleList,idList,tarea) =>{
    return `<div class="container-task">
        <div class="card border-info mb-3" id="${idList}" style="max-width: 80rem;">
            <div class="card-header">
                <h1 >${titleList}</h1>
                    <input id= "inputTask" type="text" placeholder="new task" style="width : 250px">
                    <button class= "createTask btn btn-success my-2 my-sm-0" type="submit" value="${idList}" id="createTask">Add Task</button>
                    <spam  id="novisible"class = "spamId">${idList}</spam>
                    <button class= "deleteList btn btn-danger my-2 my-sm-0" " type="submit" style="margin-left: 200px" value="${idList}">Delete
                List</button>
        </div>
        <div class="card-body">
            <table id="${idList}" class="table table-hover">
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




