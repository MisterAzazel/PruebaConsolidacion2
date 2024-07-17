document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('click', function() {
        const skill = this.getAttribute('data-skill');
        showSkillDetail(skill);
    });
});

function showSkillDetail(skill) {
    const skillDetail = {
        kamehameha: {
            image: '../img/kamehamehax10.png',  // Reemplaza con la ruta correcta a tu imagen
            description: 'El Kamehameha es una técnica de onda de energía de Dragon Ball.'
        },
        puñoPelao: {
            image: '../img/Ataquebrillofinal.png',  // Reemplaza con la ruta correcta a tu imagen
            description: 'El Puño Pelao es un ataque físico poderoso.'
        },
        modoBestia: {
            image: '../img/Bestia.png',  // Reemplaza con la ruta correcta a tu imagen
            description: 'Modo Bestia es un estado de aumento de poder.'
        },
        kamehamehaInstantaneo: {
            image: '../img/bolamortalvengadora.png',  // Reemplaza con la ruta correcta a tu imagen
            description: 'Kamehameha Instantáneo es una versión rápida del Kamehameha.'
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