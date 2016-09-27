mainModule.service('apiSrv', ['$http', function($http) {
    
    var srv = this;
    
    srv.getContactList = function(){
        return $http.get('api/contactList/getContacts');
    };
    
    srv.createContact = function(data){
        return $http.post('api/contactList/createContact', data);
    };
    
    srv.updateContact = function(data){
        return $http.put('api/contactList/updateContact', data);
    };
    
    srv.removeContact = function(id){
        return $http.delete('api/contactList/removeContact?id='+id);
    };
    
    return srv;
    
}]);