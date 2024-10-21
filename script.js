const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.profile-section');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        
        tabs.forEach(t => t.classList.remove('active'));
        
        sections.forEach(section => section.style.display = 'none');
        
        tab.classList.add('active');
        
        const sectionId = tab.getAttribute('data-section');
        document.getElementById(sectionId).style.display = 'block';
    });
});
