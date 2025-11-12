function toggleCard(card) {
    card.classList.toggle('active');
}

// Variables del quiz
let quizAnswered = false;

// Función para verificar respuesta del quiz
function checkAnswer(option, isCorrect) {
    if (quizAnswered) return;
    
    quizAnswered = true;
    const allOptions = document.querySelectorAll('.quiz-option');
    const result = document.querySelector('.quiz-result');
    const resetBtn = document.getElementById('resetBtn');
    
    // Deshabilitar todas las opciones
    allOptions.forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
    
    // Mostrar resultado
    if (isCorrect) {
        option.classList.add('correct');
        result.innerHTML = '✅ ¡Correcto! La Declaración Universal de los Derechos Humanos fue adoptada el 10 de diciembre de 1948 por la Asamblea General de las Naciones Unidas.';
        result.style.background = '#d4edda';
        result.style.color = '#155724';
    } else {
        option.classList.add('incorrect');
        result.innerHTML = '❌ Incorrecto. La respuesta correcta es 1948. La Declaración fue adoptada el 10 de diciembre de 1948.';
        result.style.background = '#f8d7da';
        result.style.color = '#721c24';
    }
    
    result.classList.add('show');
    resetBtn.style.display = 'inline-block';
}

// Función para reiniciar el quiz
function resetQuiz() {
    quizAnswered = false;
    const allOptions = document.querySelectorAll('.quiz-option');
    const result = document.querySelector('.quiz-result');
    const resetBtn = document.getElementById('resetBtn');
    
    // Limpiar estilos de las opciones
    allOptions.forEach(opt => {
        opt.classList.remove('correct', 'incorrect');
        opt.style.pointerEvents = 'auto';
    });
    
    // Ocultar resultado y botón
    result.classList.remove('show');
    resetBtn.style.display = 'none';
}

// Smooth scroll para navegación
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});