// main.ts


const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-item') as NodeListOf<HTMLAnchorElement>;

navLinks.forEach(link => {
  if (link.href.includes(currentPath)) {
    link.classList.add('active'); 
  }
});


const downloadBtn = document.getElementById('download-resume');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {

        const link = document.createElement('a');
        link.href = 'assets/resume.pdf'; 
        link.download = 'Aayush_Gadamshetty_Resume.pdf';
        link.click();
    });
}