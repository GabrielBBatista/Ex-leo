const top8tn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
    topBtn.style.display = window.scrollY > 400 ? 'bloke' : 'none';

});

topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

})

document.getElementById('form-contato').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('mensagem enviada com sucesso!');
})