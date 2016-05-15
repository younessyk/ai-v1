app.controller('homeCtrl', function($scope, $anchorScroll, $location) {

	$scope.talks = [];

  $scope.scroll = function () {
    $location.hash('bottom');
    $anchorScroll();
  }

	$scope.carlineReset = function() {
		carline.reset();
		$scope.carlineStep();
	}

  $scope.firstMsg = function () {
    var fRpl = carline.getInitial();
    speech.speak(fRpl);
    $scope.talks.push({
      text: fRpl,
      usr: false
    });
  }

	$scope.carlineStep = function() {
		var inputTxt = document.getElementById('input');
		var usrTxt = document.getElementById('usr');
		var rplTxt = document.getElementById('rpl');

		if (inputTxt.value != '') {
			var usr = inputTxt.value;
			var rpl = carline.transform(inputTxt.value);
			speech.speak(rpl);
			$scope.talks.push({
				text: usr,
				usr: true
			});
			$scope.talks.push({
				text: rpl,
				usr: false
			});
		}
		inputTxt.value = '';
		inputTxt.focus();
	}

});
