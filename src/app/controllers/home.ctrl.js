import _ from 'lodash';

export default function($scope, todoListFactory){
    let variables = {
        todos: [],
        createTaskInput: "",
        createHasInput: false,
        updatedTaskInput: ""
    };
    
    const { completeTask, createNewTask, updateTask, deleteTask, editTask, cancelEditTask, watchCreateTaskInput, getTasks } = todoListFactory; // es6 refactoring
    
    let watches = {
        createTaskInputWatch: $scope.$watch('variables.createTaskInput',                                _.partial(watchCreateTaskInput, $scope, variables) // entry is 3rd param
        )
    };

    let functions = {
        completeTask: _.partial(completeTask),
        
        createNewTask: _.partial(createNewTask, variables),
        updateTask: _.partial(updateTask, variables), // entry is 2nd param
        
        deleteTask: _.partial(deleteTask, variables), // entry is 2nd param
        
        editTask: _.partial(editTask, variables), // entry is 2nd param
        
        cancelEditTask: _.partial(cancelEditTask), // entry is 2nd param
        
        setup: () => {
            getTasks(variables);
        }
    };
    
    functions.setup();
    
    $scope.variables = variables;
    $scope.watches = watches;
    $scope.functions = functions;
}