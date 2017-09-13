var app = angular.module("SalaryConverter", []);
app.controller("sc", ['$scope', function($scope){
	$scope.input = { hours : null};
	$scope.output = null;
	$scope.money= {money : null};

	$scope.convert = function() {
		$scope.output = $scope.money.money * $scope.input.hours * 4 * 12;
	}
}])