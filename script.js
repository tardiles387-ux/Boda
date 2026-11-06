// ABRIR INVITACIÓN (Animación del sobre al hacer clic)
function abrirInvitacion() {
        const pantallaSobre = document.getElementById('pantalla-sobre');
        const pantallaInvitacion = document.getElementById('pantalla-invitacion');

        // Desvanecer sobre
        if (pantallaSobre) {
                pantallaSobre.classList.add('fade-out');
        }

        setTimeout(() => {
                if (pantallaSobre) {
                        pantallaSobre.style.display = 'none';
                }
                if (pantallaInvitacion) {
                        pantallaInvitacion.classList.remove('hidden');
                }

                // Iniciar reproducción del video al abrir
                if (video) {
                        video.play().then(() => {
                                const btnIcon = document.getElementById('btn-video-icon');
                                if (btnIcon) btnIcon.className = 'fa-solid fa-pause';
                        }).catch(err => {
                                console.log("Autoplay bloqueado por navegador:", err);
                        });
                }
        }, 700);
}

// ABRIR INVITACIÓN, MÚSICA Y VIDEO AL MISMO TIEMPO
function abrirInvitacion() {
        const pantallaSobre = document.getElementById('pantalla-sobre');
        const pantallaInvitacion = document.getElementById('pantalla-invitacion');
        const musica = document.getElementById('musica-fondo');
        const video = document.getElementById('video-invitacion');
        const btnIcon = document.getElementById('btn-video-icon');

        // Desvanecer el sobre
        if (pantallaSobre) {
                pantallaSobre.classList.add('fade-out');
        }

        setTimeout(() => {
                if (pantallaSobre) {
                        pantallaSobre.style.display = 'none';
                }
                if (pantallaInvitacion) {
                        pantallaInvitacion.classList.remove('hidden');
                }

                // 1. Reproducir la música de fondo
                if (musica) {
                        musica.play().catch(err => {
                                console.log("Audio autoplay bloqueado por el navegador:", err);
                        });
                }

                // 2. Reproducir el video de fotos y cambiar el ícono a pausa
                if (video) {
                        video.play().then(() => {
                                if (btnIcon) btnIcon.className = 'fa-solid fa-pause';
                        }).catch(err => {
                                console.log("Video autoplay bloqueado por el navegador:", err);
                        });
                }
        }, 700);
}

// CUENTA REGRESIVA CONFIGURADA PARA LA BODA (30 de Enero de 2027 a las 11:30 hs)
const fechaBoda = new Date("Jan 30, 2027 11:30:00").getTime();

const interval = setInterval(function() {
        const ahora = new Date().getTime();
        const distancia = fechaBoda - ahora;

        if (distancia < 0) {
                clearInterval(interval);
                document.getElementById("countdown").innerHTML = "¡HOY ES EL GRAN DÍA!";
                return;
        }

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = dias < 10 ? '0' + dias : dias;
        document.getElementById("hours").innerText = horas < 10 ? '0' + horas : horas;
        document.getElementById("minutes").innerText = minutos < 10 ? '0' + minutos : minutos;
        document.getElementById("seconds").innerText = segundos < 10 ? '0' + segundos : segundos;
}, 1000);


// MODAL CBU / DATOS
function mostrarModalCBU() {
        document.getElementById('modal-cbu').style.display = 'flex';
}

function cerrarModalCBU() {
        document.getElementById('modal-cbu').style.display = 'none';
}

// COPIAR ALIAS
function copiarAlias() {
        const alias = document.getElementById('alias-texto').innerText;
        navigator.clipboard.writeText(alias).then(() => {
                alert('¡Alias copiado al portapapeles!: ' + alias);
        }).catch(err => {
                console.error('Error al copiar: ', err);
        });
}

// COPIAR ALIAS DINÁMICO (Sirve para Iara o para Kevin)
function copiarAlias(idElemento) {
        const alias = document.getElementById(idElemento).innerText;
        navigator.clipboard.writeText(alias).then(() => {
                alert('¡Alias copiado al portapapeles!: ' + alias);
        }).catch(err => {
                console.error('Error al copiar: ', err);
        });
}

// ABRIR Y CERRAR MODAL DE CONFIRMACIÓN (RSVP)
function mostrarModalRSVP() {
        document.getElementById('modal-rsvp').style.display = 'flex';
}

function cerrarModalRSVP() {
        document.getElementById('modal-rsvp').style.display = 'none';
}