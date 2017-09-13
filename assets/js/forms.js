var skillsLearned = [];
var tags = [];
var newTags = [];

function submit() {
	document.querySelector('form').submit();
}

function deleteSkill(skill) {
	var idxToRemove = skillsLearned.indexOf(skill.parentNode.firstChild.innerHTML);
	skillsLearned.splice(idxToRemove, 1);
	skill.parentNode.parentNode.removeChild(skill.parentNode);
}

function checkEnter_Skill(event, input) {
	if (event.keyCode === 13) {
		// make sure it isn't a duplicate
		if ((skillsLearned.length > 0) && !(skillsLearned.indexOf(input.value) < 0)) {
			input.value = '';
			var elem = document.querySelector('#skills-learned-hint');
			elem.innerHTML = 'You already put that :)';
			elem.classList.remove('hidden');
			elem.classList.add('visible');
			setTimeout(function () {
				var elem = document.querySelector('#skills-learned-hint');
				elem.innerHTML = '';
				elem.classList.remove('visible');
				elem.classList.add('hidden');
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

function checkEnter_Tag(event, input) {
	// if the event is a keyboardEvent and key was enter
	// or the event is a mouseEvent
	// and the input isn't empty
	if ((event.type === 'keyup' && event.keyCode === 13 && input.value !== '') ||
		(event.type === 'click' && input.parentNode.children[0].value !== '')) {

		document.querySelector('#new-tag-warning-modal').classList.add('active');
		document.querySelector('#new-tag-warning-modal > .modal-container').focus();
		document.querySelector('#new-tag-warning-modal input[type=checkbox]').
				addEventListener('change', function(event) {
					if (event.target.checked) {
						document.getElementById('add-tag-btn').classList.remove('disabled');
					} else {
						document.getElementById('add-tag-btn').classList.add('disabled');
					}
				});
	}
}

function selectTag(tag) {
	tag.classList.toggle('active');

	var idx = tags.indexOf(tag.firstChild.innerHTML);
	if (idx < 0) {
		tags.push(tag.firstChild.innerHTML);
	} else {
		tags.splice(idx,1);
	}
}

function closeModal(event, modal) {
	if (!event.relatedTarget)
		modal.parentNode.classList.remove('active');
}

function addNewTag(modal) {
	var tag = document.getElementById('new-tag-input').value;

	// Add the tag to newTags array
	if (newTags.indexOf(tag) < 0)
		newTags.push(tag);

	// Add a chip for the tag to the display
	var newChip = document.createElement('SPAN');
	newChip.classList.add('chip');
	newChip.classList.add('c-hand');

	var attr = document.createAttribute('onclick');
	attr.value = 'selectTag(this)';
	newChip.setAttributeNode(attr);

	newChip.innerHTML = '<span>' + tag + '</span>' + 
						'<span class="btn btn-clear" aria-label="Close" ' +
						'role="button" onclick="deleteNewTag(this)"></span>';

	document.querySelector('#tag-panel > .panel-body').appendChild(newChip);

	// select it
	selectTag(newChip);

	// close the modal and clear the input
	document.getElementById('new-tag-warning-modal').classList.remove('active');
	document.getElementById('new-tag-input').value = '';

	// Reset the acknowledgement checkbox to false
	document.querySelector('#new-tag-warning-modal input[type=checkbox]').checked = false;
}

function deleteNewTag(tag) {
	console.log(tag);

	// remove it from the array
	var idxToRemove = newTags.indexOf(tag.parentNode.firstChild.innerHTML);
	newTags.splice(idxToRemove, 1);

	// remove it from the window
	tag.parentNode.parentNode.removeChild(tag.parentNode);
}

function getSkillsLearned() {
	return skillsLearned;
}

function getTags() {
	return tags;
}

function getNewTags() {
	return newTags;
}