angular.module('app').controller('loansCtrl', function($scope, $http, $stateParams) {
    $scope.bookId = $stateParams.bookId;

    var loadLoan = function() {
        $http.get('http://104.236.90.147:3003/api/loans/').then(function (response) {
            $scope.loans = response.data
        });
    };

    $scope.deleteLoan = function(loan) {
        $http.delete('http://104.236.90.147:3003/api/loans/' + loan._id).then(function (response) {
            loadLoan();
        });
    };

    loadLoan();
});
