document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.getElementById('typing-text');
    const cursor = document.querySelector('.cursor');
    
    if (typingText) {
        const texts = [
            "Hello, I'm lYNNARD",
            "I Build THIS WEBSITE",
            "I Love CreatiNG Design",
            "Let's Work Together"
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isEnd = false;
        
        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isEnd = true;
                isDeleting = true;
                setTimeout(type, 1500); // Pause at end of text
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500); // Pause before typing next text
            } else {
                const typingSpeed = isDeleting ? 50 : 100;
                setTimeout(type, typingSpeed);
            }
        }
        
        // Start typing animation
        setTimeout(type, 1000);
        
        // Cursor blink animation
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    }
});