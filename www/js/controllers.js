angular.module('fms.controllers', [])

.controller('TaskListCtrl', function($scope, $state, $window, $stateParams, 
		TaskService, $cordovaDialogs, $cordovaCamera) {
	
	$scope.tasks = [];
	$scope.tasks.push({
		"taskId": "2016/01/15/OMB/127",
		"job": "Air Condition Maintenance",
		"property": "One Marina Boulevard",
		"address": "One Marina Boulevard",
		"date": "18-January-2016"
	})
	
	$scope.tasks.push({
		"taskId": "2016/01/15/OMB/128",
		"job": "Escalator Condition Maintenance",
		"property": "One Raffles Quay",
		"address": "One Raffles Quay",
		"date": "19-January-2016"
	})
	
	$scope.tasks.push({
		"taskId": "2016/01/15/OMB/130",
		"job": "Lift Condition Maintenance",
		"property": "NTUC Fair Price SunPlaza",
		"address": "Near Sembawang MRT",
		"date": "20-January-2016"
	})
	
	$scope.reloadTaskList = function() {
		console.log("reloadTaskList");
		$cordovaDialogs.alert('Please wait to reload your assignment list', 
			'Confirmation', 'Close')
			.then(function() {
				// callback success
	    });
	}
	
	$scope.viewDetails = function(task) {
		console.log('View task details');
	
		var task = {
			"task": task
		};
		console.log(task);
		var taskJson = angular.toJson(task);
		$state.go('tab.taskdetails', {'task' : taskJson});
			  
	}
})

.controller('SettingCtrl', function($scope, $state, $window, $stateParams, TaskService, 
		$cordovaDialogs) {
	$scope.setting = {};
	$scope.setting.emailNotification = true;
	$scope.setting.smsNotification = true;
	$scope.setting.pushNotification = true;
	$scope.setting.locationTracking = true;
	$scope.setting.nric = 'S7962708I';
	$scope.setting.password = 'password';
	$scope.setting.confirmPassword = 'password';
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
