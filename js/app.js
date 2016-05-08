var speech = new rsSpeech();
var eliza = new ElizaBot();

function elizaReset() {
	eliza.reset();
	elizaStep();
}

function elizaStep() {
	var form = document.getElementById('form');
	var inputTxt = document.getElementById('input');
	var usrTxt = document.getElementById('usr');
	var rplTxt = document.getElementById('rpl');

	if (eliza.quit) {
		inputTxt = '';
		if (confirm("This session is over.\nStart over?")) elizaReset();
		inputTxt.focus();
		return;
	}
	else if (inputTxt.value != '') {
		var usr = inputTxt.value;
		var rpl = eliza.transform(inputTxt.value);
		speech.speak(rpl);
		usrTxt.innerHTML = 'YOU:   ' + usr;
		rplTxt.innerHTML = 'JS-AI: ' + rpl;
	}
	inputTxt.value = '';
	inputTxt.focus();
}