

var acumuladorApp = angular.module( 'acumuladorApp', [] );
        
        acumuladorApp.controller( "acumuladorAppCtrl",
            
            //[ "$scope",  //Originalmente solo se minificaba el scope. Esta linea también funciona en lugar de la de abajo.
            [ "$scope", "$http", //Esto es para minificar, pero interfiere con lo de php, hay que minificar las otras variables.
             
                function( $scope, $http )
                {                    
                    

                     $scope.cargar_datos = function()
                    {	var numero=document.getElementById('numero').value;
                    console.log(numero);
                    var result="";

                    
                       for (var i =0; i <= 12; i++) {
                      
                       	var resultado=numero*i;
                       	var result=result+"el resultado de    "+numero+"  *  " +i+ " es "+resultado+"<br>";
                       	$scope.numdi=numero;

                       	document.getElementById('resul').innerHTML= result;
                       }
						
                    };
                }
            ] //Si se minifica, se deben minificar todas las llamadas inyecciones, de lo contrario mejor no minifique nada.
        );
