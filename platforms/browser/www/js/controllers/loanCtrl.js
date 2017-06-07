angular.module('app').controller('loanCtrl', function($scope, $http, $stateParams) {
    $scope.bookId = $stateParams.bookId;

    var loadStudent = function() {
        $http.get('http://104.236.90.147:3003/api/students/').then(function (response) {
            $scope.students = response.data
        });
    };

    $scope.addLoan = function(student) {
        var dataInicio = new Date();
        $scope.startDate = new Date();
        $scope.endDate = $scope.startDate.setDate($scope.startDate.getDate() + 7);
        var loan = {
            _student: student,
            _book: $stateParams.bookId,
            start_date: dataInicio,
            end_date:  $scope.endDate,
        };
        $http.post('http://104.236.90.147:3003/api/loans/', loan).then(function (response) {
            loadStudent();
        });
    };

    loadStudent();
});
