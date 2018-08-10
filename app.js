angular.module("RoundHelper",[])
.controller("Controller", function($scope){
	$scope.people = [
	{"name":"Nico"},
	{"name":"Mati"},
	{"name":"Andres"},
	{"name":"Hugo"},
	{"name":"Anita"},
	{"name":"Flor"},
	{"name":"Ago"},
	{"name":"Lechu"},
	{"name":"Dai"},
	{"name":"Orne"},
	{"name":"Giuli"},
	{"name":"Mudo"},
	{"name":"Tina"},
	{"name":"Mariel"},
	{"name":"Noe"},
	{"name":"Pame"}
	];
	$scope.index = 0;
	$scope.in = [];
	$scope.filtro = {"name":""};
	console.log($scope.people);

	$scope.addPerson = function(p){
		$scope.in.push(p);
		$scope.people.splice( $scope.people.indexOf(p), 1 );
	}
	$scope.clear = function(){
		$scope.filtro = {"name":""};
	}
	$scope.removePerson = function(p){
		$scope.people.push(p);
		$scope.in.splice( $scope.in.indexOf(p), 1 );		
	}
	$scope.next = function(){
		if($scope.in.length == 0){
			$scope.index = 0;
		}
		else{
			$scope.index = (($scope.index+1) % $scope.in.length);
		}
	}
})