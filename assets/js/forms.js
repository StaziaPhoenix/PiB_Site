var skillsLearned = [];

function submit() {
	document.querySelector('form').submit();
}

function deleteSkill(skill) {
	var idxToRemove = skillsLearned.indexOf(skill.parentNode.firstChild.innerHTML);
	skillsLearned.splice(idxToRemove, 1);
	skill.parentNode.parentNode.removeChild(skill.parentNode);
}

function checkEnter(event, input) {
	if (event.keyCode === 13) {
		// make sure it isn't a duplicate
		if ((skillsLearned.length > 0) && !(skillsLearned.indexOf(input.value) < 0)) {
			console.log("duplicate");
			input.value = '';
			var elem = document.querySelector('.native-form-hint');
			elem.innerHTML = 'You already put that :)';
			setTimeout(function () {
				var elem = document.querySelector('.native-form-hint');
				elem.innerHTML = '';
			}, 2000);
			return;
		}

		var skillList = document.getElementById('skill-list');
		var newChip = document.createElement('SPAN');
		newChip.classList.add('chip');
		newChip.innerHTML = '<span>' + input.value + '</span>' +
			'<span class="btn btn-clear" aria-label="Close" ' +
			'role="button" onclick="deleteSkill(this)"></span>';

		skillList.appendChild(newChip);

		skillsLearned.push(input.value);
		input.value = '';
	}
}

function getSkillsLearned() {
	return skillsLearned;
}