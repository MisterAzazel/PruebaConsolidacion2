document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('click', function() {
        const skill = this.getAttribute('data-skill');
        showSkillDetail(skill);
    });
});

function showSkillDetail(skill) {
    const skillDetail = {
        Kamehamehax10: {
            image: '../img/kamehamehax10.png',  // Reemplaza con la ruta correcta a tu imagen
            description: 'El Kamehameha es una técnica de onda de energía de Dragon Ball.'
        },
        AtaqueBrilloFinal: {
            image: '../img/Ataquebrillofinal.png',  // Reemplaza con la ruta correcta a tu imagen
            description: 'El ataque brillo final es una tecnica usada por vegeta en dragon ball gt'
        },
        Bestia: {
            image: '../img/Bestia.png',  // Reemplaza con la ruta correcta a tu imagen
            description: 'La tranformación de bestia es usada por Gohan en la pelicula de dragon ball super super hero'
        },
        BolaMortalVengadora: {
            image: '../img/bolamortalvengadora.png',  // Reemplaza con la ruta correcta a tu imagen
            description: 'La bola mortal vengadora es una tecnica usada por super baby vegeta 2 en dragon ball gt'
        }
    };

    const detail = skillDetail[skill];
    if (detail) {
        document.getElementById('skill-image').src = detail.image;
        document.getElementById('skill-description').textContent = detail.description;
        var myModal = new bootstrap.Modal(document.getElementById('skillModal'), {
            keyboard: false
        });
        myModal.show();
    }
}