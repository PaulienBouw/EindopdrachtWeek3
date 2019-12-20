const makeCleanArray = async () => {
	const result = await someAPICallToGetAllTasks();
	console.log("Before (the raw result):", result);
	let data = Object.keys(result).map(key => ({
	      id: key,
	      description: result[key].description,
	      done: result[key].done
	  }));
	  console.log("After the tasks array", data);
	  return data;
	}
const emptyTasksInDom = () =>{

	let taskParent = document.getElementById("showTasksList");
	taskParent.innerHTML = '';
}

const showTasksInDom = (data) =>{
	//empty all current tasks
	let taskParent = document.getElementById("showTasksList");

	//show all tasks in database
	data.forEach(task =>{
		let taskElement = document.createElement("label");
		taskElement.id = "labelTaskPair";
	 	let newInputTask = document.createElement("input"); 
	 	let newInputDone = document.createElement("input"); 
	 	let deleteButton = document.createElement("button");
	 	deleteButton.id = task.id;
	 	deleteButton.addEventListener('click', deleteTaskFromList);

	 	//Hier komt ook nog een update button

	 	newInputTask.value = task.description;
	 	newInputTask.name = "task";

	 	newInputDone.value = task.done;
	 	newInputDone.name = "task";

	 
		let txtButton = document.createTextNode("delete");     
		deleteButton.appendChild(txtButton);                                  
	    
	    //ik heb geprobeerd dit korter op te schrijven, door bijvoorbeeld meerdere argumenten mee te geven maar heb de juiste manier nog niet gevonden.
	 	taskParent.appendChild(taskElement);
	    taskElement.appendChild(newInputTask);
	    taskElement.appendChild(newInputDone);
	    taskElement.appendChild(deleteButton);

	})


}
const deleteTaskFromList = async (event) =>{
	const idTask = event.target.id;
	console.log(idTask);
	await makeDeleteAPICallWithIdTask(idTask);
	//hier gaat nog iets niet goed. Als de laatste taak verwijderd wordt geeft ie een foutmelding, maar bij refresh is de taak wel weg. Ik weet nog even niet hoe dit op gelost moet worden
	loadApp();
}

const doSomethingWithInput = async () =>{
	console.log("submit button is geklikt");
	let input = document.getElementById("submit").value;
	await makePostAPICallWithInput(input);
	loadApp();
}	

const addEventListener = () => {
  const button = document.getElementById("submitTask");
  button.addEventListener("click", doSomethingWithInput);

}
const loadApp = async () =>{
	const data = await makeCleanArray();
	emptyTasksInDom();
	showTasksInDom(data);
	let input = document.getElementById("submit");
	input.value = "";

}
//deze 2 functions moeten in de addEventListener. Maar die krijg ik net als afgelopen weken nog niet aan de praat. Blijkbaar weet hij niet of de pagina geladen is.
addEventListener();
loadApp();

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('hello world');
});
