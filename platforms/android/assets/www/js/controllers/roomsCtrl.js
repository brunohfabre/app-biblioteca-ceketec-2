angular.module('app').controller('roomsCtrl', function($scope, $http, $stateParams) {
    $scope.unitId = $stateParams.unitId;

    var loadRoom = function() {
        $http.get('http://104.236.90.147:3003/api/rooms/').then(function (response) {
            $scope.rooms = response.data
        });
    };

    var loadUnit = function() {
        $http.get('http://104.236.90.147:3003/api/units/').then(function (response) {
            $scope.units = response.data
        });
    };

    var loadStudent = function() {
        $http.get('http://104.236.90.147:3003/api/students/').then(function (response) {
            $scope.students = response.data
        });
    };

    $scope.addRoom = function(room) {
        $http.post('http://104.236.90.147:3003/api/rooms/', angular.extend(room, {_unit: $stateParams.unitId})).then(function (response) {
            delete $scope.room;
            loadRoom();
        });
    };

    $scope.deleteRoom = function(room) {
        $http.delete('http://104.236.90.147:3003/api/rooms/' + room._id).then(function (response) {
            loadRoom();
        });
    };

    loadRoom();
    loadUnit();
    loadStudent();
});
