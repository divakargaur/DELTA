let toDo = [];

while(true){
    let req = prompt('Enter Your Request');

    if (req=='quit') {
        console.log('App Closed');
        break
    } else if (req=='list') {
        for(let i = 0; i < toDo.length; i++){
            console.log(i, toDo[i]);
        }
    } else if (req=='add') {
        let task = prompt('Enter the Task to Add');
        toDo.push(task);
    } else if (req=='delete') {
        let idx = prompt('Enter the Index of the Task');
        toDo.splice(idx, 1);
    } else {
        console.log('Enter a Valid Request')
    }
}