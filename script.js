// Love Counter - Set your anniversary date here
const anniversaryDate = new Date('2024-01-01'); // Change this to your actual anniversary date

// Update counters every second
function updateCounters() {
    const now = new Date();
    const timeDifference = now - anniversaryDate;
    
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    document.getElementById('days-counter').textContent = days;
    document.getElementById('hours-counter').textContent = hours;
    document.getElementById('minutes-counter').textContent = minutes;
    document.getElementById('seconds-counter').textContent = seconds;
}

// Update counters every second
setInterval(updateCounters, 1000);
updateCounters(); // Initial call

// Smooth scrolling for navigation links
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

// Love Message Modal
function showLoveMessage() {
    const modal = document.getElementById('loveModal');
    modal.style.display = 'block';
    
    // Add floating hearts animation
    createFloatingHearts();
}

// Close modal when clicking on X or outside
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('loveModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('loveModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Create floating hearts animation
function createFloatingHearts() {
    const modal = document.getElementById('loveModal');
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('i');
            heart.className = 'fas fa-heart';
            heart.style.cssText = `
                position: fixed;
                color: #e91e63;
                font-size: 20px;
                pointer-events: none;
                z-index: 2001;
                left: ${Math.random() * window.innerWidth}px;
                top: ${window.innerHeight}px;
                animation: floatUp 3s ease-out forwards;
            `;
            document.body.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 200);
    }
}

// Add CSS for floating hearts animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Memory cards functionality
function showMemory(memoryId) {
    const memories = {
        1: {
            title: "Our First Coffee Date",
            description: "That magical moment when our eyes first met over steaming cups of coffee. The way you smiled made my heart skip a beat. I knew right then that you were someone special.",
            icon: "fas fa-coffee"
        },
        2: {
            title: "Starry Nights",
            description: "Counting stars and sharing dreams together. Your laughter under the moonlight is a sound I'll never forget. Those nights made me realize how much I love you.",
            icon: "fas fa-moon"
        },
        3: {
            title: "Beach Walks",
            description: "Walking hand in hand by the ocean, feeling the sand between our toes. The sound of waves and your presence made everything perfect. I love every moment with you.",
            icon: "fas fa-umbrella-beach"
        }
    };
    
    const memory = memories[memoryId];
    if (memory) {
        showMemoryModal(memory);
    }
}

// Memory modal
function showMemoryModal(memory) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <div class="modal-body">
                <div class="memory-icon" style="font-size: 3rem; color: #e91e63; margin-bottom: 1rem;">
                    <i class="${memory.icon}"></i>
                </div>
                <h3 style="color: #e91e63; font-family: 'Dancing Script', cursive; font-size: 2rem; margin-bottom: 1rem;">
                    ${memory.title}
                </h3>
                <p style="line-height: 1.8; font-size: 1.1rem;">
                    ${memory.description}
                </p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.remove();
        }
    });
}

// Virtual kiss function
function sendVirtualKiss() {
    // Create kiss animation
    const kiss = document.createElement('div');
    kiss.innerHTML = '💋';
    kiss.style.cssText = `
        position: fixed;
        font-size: 50px;
        z-index: 2001;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: kissAnimation 2s ease-out forwards;
        pointer-events: none;
    `;
    document.body.appendChild(kiss);
    
    // Add kiss animation CSS
    const kissStyle = document.createElement('style');
    kissStyle.textContent = `
        @keyframes kissAnimation {
            0% {
                transform: translate(-50%, -50%) scale(0) rotate(0deg);
                opacity: 1;
            }
            50% {
                transform: translate(-50%, -50%) scale(1.5) rotate(180deg);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) scale(0) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(kissStyle);
    
    // Show love message
    setTimeout(() => {
        showNotification('💋 Virtual kiss sent to Bhakti! 💋');
    }, 1000);
    
    // Remove kiss element
    setTimeout(() => {
        kiss.remove();
    }, 2000);
}

// Love magic animation
function showLoveAnimation() {
    // Create multiple hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.cssText = `
                position: fixed;
                font-size: 30px;
                z-index: 2001;
                left: ${Math.random() * window.innerWidth}px;
                top: ${Math.random() * window.innerHeight}px;
                animation: loveMagic 3s ease-out forwards;
                pointer-events: none;
            `;
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 100);
    }
    
    // Add love magic animation CSS
    const magicStyle = document.createElement('style');
    magicStyle.textContent = `
        @keyframes loveMagic {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 1;
            }
            50% {
                transform: scale(1.5) rotate(180deg);
                opacity: 1;
            }
            100% {
                transform: scale(0) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(magicStyle);
    
    showNotification('✨ Love magic activated! ✨');
}

// Play music function (placeholder)
function playMusic() {
    showNotification('🎵 Playing our special song... 🎵');
    // You can add actual music functionality here
    // For example, using HTML5 audio element
}

// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #e91e63, #ff6b9d);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        box-shadow: 0 4px 15px rgba(233, 30, 99, 0.4);
        z-index: 2002;
        animation: slideIn 0.5s ease-out;
        font-weight: 600;
    `;
    document.body.appendChild(notification);
    
    // Add slide in animation
    const slideStyle = document.createElement('style');
    slideStyle.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(slideStyle);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease-in forwards';
        const slideOutStyle = document.createElement('style');
        slideOutStyle.textContent = `
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(slideOutStyle);
        
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
});

// Add some random floating hearts on page load
function addRandomHearts() {
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every interval
            const heart = document.createElement('i');
            heart.className = 'fas fa-heart';
            heart.style.cssText = `
                position: fixed;
                color: rgba(233, 30, 99, 0.3);
                font-size: 15px;
                left: ${Math.random() * window.innerWidth}px;
                top: ${window.innerHeight}px;
                pointer-events: none;
                z-index: 1;
                animation: floatUp 4s ease-out forwards;
            `;
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }
    }, 2000);
}

// Initialize random hearts
addRandomHearts();

// Add click effect for buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation CSS
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        typeWriter(typingElement, 'Dear Bhakti', 150);
    }
});

// Add scroll reveal animations
function revealOnScroll() {
    const elements = document.querySelectorAll('.counter-item, .memory-card, .gallery-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
}

// Add reveal animation CSS
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    .counter-item, .memory-card, .gallery-item {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.6s ease;
    }
    
    .counter-item.revealed, .memory-card.revealed, .gallery-item.revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(revealStyle);

// Listen for scroll events
window.addEventListener('scroll', revealOnScroll);

// Initialize reveal on page load
document.addEventListener('DOMContentLoaded', function() {
    revealOnScroll();
});

console.log('💕 Love website loaded for Bhakti! 💕');
