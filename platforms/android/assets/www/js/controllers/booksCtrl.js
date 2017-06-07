angular.module('app').controller('booksCtrl', function($scope, $http) {
    var loadBook = function() {
        $http.get('http://104.236.90.147:3003/api/books/').then(function (response) {
            $scope.books = response.data
        });
    };

    $scope.addBook = function(book) {
        $http.post('http://104.236.90.147:3003/api/books/', book).then(function (response) {
            delete $scope.book;
            loadBook();
        });
    };

    $scope.deleteBook = function(book) {
        $http.delete('http://104.236.90.147:3003/api/books/' + book._id).then(function (response) {
            loadBook();
        });
    };

    loadBook();
});
