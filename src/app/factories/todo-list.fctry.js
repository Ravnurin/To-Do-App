import angular from 'angular';
import _ from 'lodash';

const todoListFactory = angular.module('app.todoListFactory', [])

.factory('todoListFactory', ($http) => {
    
    function getTasks(variables){
        $http.get('/home').success(response => {
            variables.todos = response.todos;
        }).error(response => {
            console.log(response);
        });
    }
    
    function completeTask(todo){
        todo.isCompleted = !todo.isCompleted;
    }
    
    function createNewTask(variables){
        
        if (variables.createTaskInput === ""){
            return;
        }
        
        $http.post('/home', {
            task: variables.createTaskInput,
            isCompleted: false,
            isEditing: false
        }).success(response => {
            getTasks(variables);
            variables.createTaskInput = "";
           // console.log(response);
        }).error(response => {
            console.log(response);
        });
    }
    
    function updateTask(variables, todo){
        
        $http.put('/home/' + todo._id, {
            task: variables.updatedTaskInput,
            isCompleted: todo.isCompleted
        }).success(response => {
            getTasks(variables);
            todo.isEditing = false;
        }).error(response => {
            console.log(response);
        });
    }
    
    function deleteTask(variables, todoToDelete){
        $http.delete('/home/' + todoToDelete._id)
            .success(response => {
            getTasks(variables);
        }).error(response => {
            console.log(response);
        });
        
        //_.remove(variables.todos, entry => entry.task === todoToDelete.task);
    }
    
    function editTask(variables, todo){
        todo.isEditing = true;
        variables.updatedTaskInput = todo.task;
    }
    
    function cancelEditTask(todo){
        todo.isEditing = false;
    }
    
    function watchCreateTaskInput($scope, variables, val){
        
       const createHasInput = variables.createHasInput;
        
       if (!val && createHasInput){
           variables.todos.pop();
           variables.createHasInput = false;
       }

       else if (val && !createHasInput){
           variables.todos.push({ task: val, isCompleted: false });
           variables.createHasInput = true;
       }
       else if (val && createHasInput){
           variables.todos[variables.todos.length -1].task = val;
       }
    }
    
    return {
        getTasks,
        completeTask,
        createNewTask,
        updateTask,
        deleteTask,
        editTask,
        cancelEditTask,
        watchCreateTaskInput       
    };
});

export default todoListFactory;