document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.letter');
    const targetText = 'THEATRE';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const frameDuration = 100; // Duration of each frame in milliseconds
    const initialEffectDuration = 1000; // Duration of effect on the first letter in milliseconds
    const subsequentEffectDelay = 500; // Delay between stopping the effect for each subsequent letter in milliseconds

    function getRandomChar() {
        return characters[Math.floor(Math.random() * characters.length)];
    }

    function randomizeLetter(letter, index) {
        letter.textContent = getRandomChar();
    }

    function revealLetter(letter, index) {
        letter.textContent = targetText[index];
        letter.style.opacity = 1;
    }

    function startRandomizing() {
        const intervals = [];
        
        // Start randomizing all letters
        letters.forEach((letter, index) => {
            const interval = setInterval(() => {
                randomizeLetter(letter, index);
            }, frameDuration);
            intervals.push(interval);
        });

        let currentLetter = 0;

        function stopNextInterval() {
            if (currentLetter < letters.length) {
                setTimeout(() => {
                    clearInterval(intervals[currentLetter]);
                    revealLetter(letters[currentLetter], currentLetter);
                    currentLetter++;
                    stopNextInterval();
                }, currentLetter === 0 ? initialEffectDuration : subsequentEffectDelay);
            }
        }

        stopNextInterval();
    }

    startRandomizing();
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => observer.observe(element));
});

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('nav');
    const main = document.querySelector('main');
    const sectionTransition = document.querySelector('.sectionTransition');

    window.addEventListener('scroll', function () {
        const mainRect = main.getBoundingClientRect();
        const sectionRect = sectionTransition.getBoundingClientRect();

        if (mainRect.top <= 0) {
            navbar.classList.add('scrolled');
        } else if (sectionRect.bottom > 0) {
            navbar.classList.remove('scrolled');
        }
    });
});
