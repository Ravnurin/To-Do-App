mainModule.controller('HomeCtrl', ['$scope', 'apiSrv', function($scope, apiSrv){
        
    var variables = {
        data: {
            persons: {}
        },
        newContact: {
            name: "",
            email: "",
            number: ""
        },
    };
    
    var functions = {
        getContacts: function(){
            apiSrv.getContactList()
                .success(function(data, status){
                    variables.data.persons = data;
                
                    variables.newContact = {};
                })
                .error(function(data, status){
                    console.log(status);
                });                  
        },
        
        addContact: function(){
            var obj = variables.newContact;
            obj._id = "";
            apiSrv.createContact(obj)
                .success(function(data, status){
                    console.log("Success", data);
                    functions.getContacts();
                })
                .error(function(data, status){
                    console.log("Error", data, status);
                });            
        },
        
        editContact: function(contact){
            variables.newContact = contact;          
        },
        
        updateContact: function(){
            var obj = variables.newContact;
            console.log(obj);
            apiSrv.updateContact(obj)
                .success(function(data, status){
                    console.log("success", data);
                    functions.getContacts();
                })
                .error(function(data, status){
                    console.log("error", data, status);
                });
        },
        removeContact: function(id){
            console.log(id);
            apiSrv.removeContact(id)
                .success(function(data, status){
                    console.log("success", data);
                    functions.getContacts();
                })
                .error(function(data, status){
                    console.log("error", data, status);
                });
        },
        
        setup: function(){
            functions.getContacts();
        }
    };
    
    functions.setup();
    
    $scope.variables = variables;    
    $scope.functions = functions;
    
}]);