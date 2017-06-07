angular.module('app').controller('studentCtrl', function($scope, $http, $stateParams) {
    $scope.roomId = $stateParams.roomId;

    var loadStudent = function() {
        $http.get('http://104.236.90.147:3003/api/students/').then(function (response) {
            $scope.students = response.data
        });
    };

    var loadRoom = function() {
        $http.get('http://104.236.90.147:3003/api/rooms/').then(function (response) {
            $scope.rooms = response.data
        });
    };

    $scope.addStudent = function(student) {
        $http.post('http://104.236.90.147:3003/api/students/', angular.extend(student, {_room: $stateParams.roomId})).then(function (response) {
            delete $scope.student;
            loadStudent();
        });
    };

    $scope.deleteStudent = function(student) {
        $http.delete('http://104.236.90.147:3003/api/students/' + student._id).then(function (response) {
            loadStudent();
        });
    };

    loadStudent();
    loadRoom();
});
