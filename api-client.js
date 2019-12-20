const END_POINT =  "https://wincacademydatabase.firebaseio.com/paulien.json";

//{tasks: [
//		{id: 1, description: "Make todo app in JS", done: false},
//		{id: 2, description: "Make pancakes", done: true },
//	]
//}
const someAPICallToGetAllTasks = async () => {
	const apiUrl = "https://wincacademydatabase.firebaseio.com/paulien/tasks.json";
	try{
		const res = await fetch(apiUrl, {method: "GET"});
		const data = await res.json(); 
		console.log("the response from the API URI in getData function is: ", res);
		console.log("dit is alle data na .json ", typeof data); 
		console.log(data);
		return data;

	}catch(error){
		console.log(error);
	}
}

const makePostAPICallWithInput = async (input) => {
	const apiUrl = "https://wincacademydatabase.firebaseio.com/paulien/tasks.json";
	const options = {
	    method: "POST", 
	    headers: {
	      "Accept": "application/json",
	      "Content-Type": "application/json"
	      },  
	    body: JSON.stringify({"description": input, "done": "false"})
	}
	try{
		const res = await fetch(apiUrl, options);
		const data = await res.json(); 
		return data;

	}catch(error){
		console.log(error);
	}
}
const makeDeleteAPICallWithIdTask = async (idTask) => {
	const apiUrl = `https://wincacademydatabase.firebaseio.com/paulien/tasks/${idTask}.json`;
		const options = {
		    method: "DELETE",
		}
		try{
			const res = await fetch(apiUrl, options);
			const data = await res.json(); 
			return data;

		}catch(error){
			console.log(error);
		}
	}

