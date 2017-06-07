angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	//$locationProvider.html5Mode(true)

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html'
		})

		.state('units', {
			url: '/units',
			templateUrl: 'views/units.html',
			controller: 'unitsCtrl'
		})

		.state('rooms', {
			url: '/units/{unitId}/rooms',
			templateUrl: 'views/rooms.html',
			controller: 'roomsCtrl'
		})

		.state('student', {
			url: '/units/{unitId}/rooms/{roomId}/students',
			templateUrl: 'views/student.html',
			controller: 'studentCtrl'
		})

		.state('students', {
			url: '/students',
			templateUrl: 'views/students.html',
			controller: 'studentsCtrl'
		})

        .state('books', {
			url: '/books',
			templateUrl: 'views/books.html',
			controller: 'booksCtrl'
		})

		.state('loan', {
			url: '/loan/{bookId}',
			templateUrl: 'views/loan.html',
			controller: 'loanCtrl'
		})

		.state('loans', {
			url: '/loans',
			templateUrl: 'views/loans.html',
			controller: 'loansCtrl'
		})

        .state('schedulings', {
			url: '/schedulings',
			templateUrl: 'views/schedulings.html',
			controller: 'schedulingsCtrl'
		})

		$urlRouterProvider.otherwise('/home')

		
})
