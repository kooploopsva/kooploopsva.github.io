document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.card-container').addEventListener('click', function() {
        document.querySelector('.card').classList.toggle('flipped');
    });
    
    const cardContainer = document.querySelector('.card-container');
    const clickInstructions = document.querySelector('.click-me');
    let shakeInterval;
    let userInteracted = false;
    
    function addShake() {
        if (!userInteracted) {
            cardContainer.classList.add('shake');
            setTimeout(() => {
                cardContainer.classList.remove('shake');
            }, 500);
        }
    }
    
    function handleUserInteraction() {
        if (!userInteracted) {
            userInteracted = true;
            cardContainer.classList.remove('shake');
            clearInterval(shakeInterval);
            
            clickInstructions.classList.add('fade-out');
            
            setTimeout(() => {
                clickInstructions.style.display = 'none';
            }, 1500);
        }
    }
    
    setTimeout(() => {
        shakeInterval = setInterval(addShake, 5000);
    }, 2000);
    
    cardContainer.addEventListener('mouseenter', handleUserInteraction);
});
