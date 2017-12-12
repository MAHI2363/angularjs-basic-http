angular.module('myapp')
  .service('MyService',function($http , $q){
       
    var name="mahi";

    this.getName = function(){
        return name;
    };

    this.setName = function(newVal){
        name = newVal;
    };

    this.getResponse = function(){
      //  var url =  'https://api.github.com/users/jintoppy/repos';
      var url =  'https://jsonplaceholder.typicode.com/users';      
     
        return $http.get(url);
    }

    this.getNameUrl = function(name){
        var defer=$q.defer();
        //  var url =  'https://api.github.com/users/jintoppy/repos';
        var url =  'https://api.github.com/search/repositories?q='+name;      
       var httpPromise = $http.get(url);
       httpPromise.then(function(res){
        var result = res.data.items;
        var finalResponse=result
            .filter(function(item){
                     return item.name.startsWith(name);
             })
             .map(function(item)
            {
               return{
                    full_name: item.full_name
                };
             })
        defer.resolve(finalResponse);
         });
         return defer.promise;

      }


  })