const dt = document.querySelectorAll('dt');

dt.forEach((ele) => {
    ele.addEventListener('click', () => {
        const dd = ele.getAttribute('aria-controls');        
        const ddele = document.getElementById(dd);        
        ddele.classList.toggle('hidden');        
    })
})