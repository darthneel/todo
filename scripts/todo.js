var new_task_field,
	add_item,
	test,
	unfinished_task_arr = [],
	finished_task_arr = [],
	todo_items,
	completed_items;

window.onload = function() {

	new_task_field = document.getElementById('new-task-field');	
	add_item = document.getElementById('add-item');
	add_item.addEventListener('click', todo_app.addItem);
	todo_items = document.getElementById('todo-items');
	completed_items = document.getElementById('completed-items');
};



var todo_app = {
	addItem: function() {
		var new_item = new todo_app.createTask();
		todo_app.appendTask(new_item);
	},
	createTask: function() {
		this.setTaskText = new_task_field.value;
		this.date = new Date();
		this.completed = 0;
	},
	appendTask: function(new_task_object) {
		if (new_task_object.setTaskText) {
			unfinished_task_arr.push(new_task_object);
			// index = _.indexOf(unfinished_task_arr, new_task_object);
			var newListItem = document.createElement("li");
			// newListItem.setAttribute("id", "index-" + index);
			// console.log(newListItem 	)
			var newListValue = document.createTextNode(new_task_object.setTaskText);
			newListItem.appendChild(newListValue);
			
			var delete_button = document.createElement('button');
				newListItem.setAttribute("id", "complete");
  				delete_button.innerHTML = 'Delete';
  				delete_button.onclick = function(){
  				// item_completed = unfinished_task_arr.splice(index, 1);
  				// finished_task_arr.push(item_completed);
  				delete_button.parentNode.remove();   			
  				};

  			var complete_button = document.createElement('button');
  				complete_button.innerHTML = 'Complete';
  				complete_button.onclick = function(){
					completed_item = complete_button.parentNode.innerText.replace("CompleteDelete","");
					var newListItem = document.createElement("li");
					console.log(completed_item);
					var newListValue = document.createTextNode(completed_item);
					newListItem.appendChild(newListValue);
					var delete_button = document.createElement('button');
		  				delete_button.innerHTML = 'Delete';
		  				delete_button.onclick = function(){
		  				delete_button.parentNode.remove();   			
		  				};
  					newListItem.appendChild(delete_button);
					completed_items.appendChild(newListItem);
					complete_button.parentNode.remove();			
  				};
  			newListItem.appendChild(complete_button);
  			newListItem.appendChild(delete_button);
			var hr = document.createElement("hr");
			newListItem.appendChild(hr);
			todo_items.appendChild(newListItem);


		} else {
			alert("Please enter a task");
		}
	}
};	

// addToUnfinished function() {

// }



// var createTask = function(name) {
// 	var test = new todo_app.createTask(name);
// 	return test;
// }

