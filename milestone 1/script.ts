const tuggleButton = document.getElementById('tuggle-skills') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement
tuggleButton.addEventListener('click' ,()=>{
    if (skills.style.display === 'none') {
        skills.style.display = 'block'
    }else 
    {
        skills.style.display = 'none'
    }
});