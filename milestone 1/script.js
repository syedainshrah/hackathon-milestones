var tuggleButton = document.getElementById('tuggle-skills');
var skills = document.getElementById('skills');
tuggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
