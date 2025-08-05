function abrirInvitacion() {
  // Animar los flaps
  document.querySelector('.flap-top').style.transform = 'rotateX(-180deg)';
  document.querySelector('.flap-bottom').style.transform = 'rotateX(180deg)';

  // Esperar la animación y mostrar el contenido
  setTimeout(() => {
    document.getElementById('envelope').style.display = 'none';
    document.getElementById('contenido').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 1000);
}

