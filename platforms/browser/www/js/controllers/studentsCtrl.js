angular.module('app').controller('studentsCtrl', function($scope, $http, $stateParams) {

    var loadStudent = function() {
        $http.get('http://104.236.90.147:3003/api/students/').then(function (response) {
            $scope.students = response.data
        });
    };

    $scope.deleteStudent = function(student) {
        $http.delete('http://104.236.90.147:3003/api/students/' + student._id).then(function (response) {
            loadStudent();
        });
    };

    loadStudent();
});
