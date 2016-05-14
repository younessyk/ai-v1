app.controller('homeCtrl', function($scope, $anchorScroll, $location) {

	$scope.talks = [];

  $scope.scroll = function () {
    $location.hash('bottom');
    $anchorScroll();
  }

	$scope.elizaReset = function() {
		eliza.reset();
		$scope.elizaStep();
	}

  $scope.firstMsg = function () {
    var fRpl = eliza.getInitial();
    // speech.speak(fRpl);
    $scope.talks.push({
      text: fRpl,
      usr: false
    });
  }

	$scope.elizaStep = function() {
		var inputTxt = document.getElementById('input');
		var usrTxt = document.getElementById('usr');
		var rplTxt = document.getElementById('rpl');

		if (inputTxt.value != '') {
			var usr = inputTxt.value;
			var rpl = eliza.transform(inputTxt.value);
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
