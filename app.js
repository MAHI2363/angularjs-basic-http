angular.module('myapp', []);

angular.module('myapp')
    .component('app', {
        templateUrl: 'app.component.html',
        controller: function(MyService){
            var name = MyService.getName();

            var promise = MyService.getResponse();

            this.result=[];
        
            promise.then(function(res){
                console.log(res.data[0].address);

            },function(err){
                console.log(err);
            }); 

            this.onInputChange=function(){
                if(this.name.length>3){
                var promise1 = MyService.getNameUrl(this.name);
                promise1.then(function(res){
                    console.log(res);
                    this.result=res;
    
                }.bind(this));
            }
            }
            
            
        }
    });
