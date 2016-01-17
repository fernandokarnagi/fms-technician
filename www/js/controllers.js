angular.module('fms.controllers', [])

.controller('TaskListCtrl', function($scope, $state, $window, $stateParams, 
		CaseService, $cordovaDialogs, $cordovaCamera) {
	
	$scope.viewDetails = function() {
		console.log('View task details');
	
	}
})

.controller('SettingCtrl', function($scope, $state, $window, $stateParams, CaseService, 
		$cordovaDialogs) {
	$scope.setting = {};
	$scope.setting.emailNotification = true;
	$scope.setting.smsNotification = true;
	$scope.setting.pushNotification = true;
	$scope.setting.locationTracking = true;
	$scope.setting.nric = 'S7962708I';
	$scope.setting.emailAddress= 'fkarnagi@gmail.com';
	
	$scope.saveSetting = function() {
		console.log("saveSetting");
		$cordovaDialogs.alert('Your setting has been successfully saved', 
			'Confirmation', 'Close')
			.then(function() {
				// callback success
	    });
	
	}
});
