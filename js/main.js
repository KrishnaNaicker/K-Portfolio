// ============================================
// KRISHNA NAICKER - PORTFOLIO
// Main JavaScript - Final Version with Getform
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portfolio loaded!');
    
    initModal();
    initScrollAnimations();
    initNavigation();
    initTerminalTyping(); // ← ADD THIS LINE
});

// ============================================
// MODAL FUNCTIONALITY
// ============================================
function initModal() {
    const modal = document.getElementById('contact-modal');
    const contactBtn = document.getElementById('contact-btn');
    const emailBtn = document.getElementById('email-btn');
    const closeBtn = document.getElementById('modal-close');
    const form = document.getElementById('contact-form');

    if (!modal || !contactBtn || !emailBtn || !closeBtn || !form) {
        console.error('❌ Modal elements not found!');
        return;
    }

    console.log('✅ Modal initialized');

    // Open modal - Contact button
    contactBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Open modal - Email icon
    emailBtn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close modal - X button
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close modal - Click outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal - Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // ============================================
    // FORM SUBMISSION - GETFORM.IO
    // ============================================
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('user-name').value;
        const email = document.getElementById('user-email').value;
        const message = document.getElementById('user-message').value;
        
        // Validate
        if (!name || !email || !message) {
            showSuccessMessage('Please fill all fields!', true);
            return;
        }
        
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            console.log('📧 Sending email via Getform...');
            
            // Create FormData
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);
            
            // Send to Getform
            const response = await fetch('https://getform.io/f/bllqrmgb', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                console.log('✅ Email sent successfully!');
                showSuccessMessage('Message sent successfully! ✅');
                
                // Close modal
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
                
                // Reset form
                form.reset();
            } else {
                const errorData = await response.json();
                console.error('❌ Getform error:', errorData);
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('❌ Error sending email:', error);
            showSuccessMessage('Error sending message. Please try again.', true);
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// ============================================
// SCROLL ANIMATIONS (INTERSECTION OBSERVER)
// ============================================
function initScrollAnimations() {
    console.log('🎨 Initializing scroll animations...');
    
    // Get all elements to animate
    const animateElements = document.querySelectorAll(`
        .about-section,
        .terminal-card,
        .skills-section .section-title,
        .skill-bubble,
        .projects-section .section-title,
        .project-card,
        .contact-section
    `);

    if (animateElements.length === 0) {
        console.warn('⚠️ No elements found for animation');
        return;
    }

    console.log(`Found ${animateElements.length} elements to animate`);

    // Add initial animation class
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
    });

    // Create Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Check if element should have staggered animation
                const isStagger = entry.target.classList.contains('skill-bubble') || 
                                 entry.target.classList.contains('project-card');
                
                if (isStagger) {
                    // Stagger animation for skills and projects
                    const siblings = Array.from(entry.target.parentElement.children);
                    const index = siblings.indexOf(entry.target);
                    const delay = index * 100; // 100ms between each
                    
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, delay);
                } else {
                    // Immediate animation for sections
                    entry.target.classList.add('animate-in');
                }
                
                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements
    animateElements.forEach(el => {
        observer.observe(el);
    });

    console.log('✅ Scroll animations initialized');
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link:not(.resume-link)');
    const sections = document.querySelectorAll('section[id]');
    
    if (navLinks.length === 0) {
        console.warn('⚠️ No navigation links found');
        return;
    }

    // Smooth scroll on click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without page jump
                history.pushState(null, null, targetId);
            }
        });
    });

    // Highlight active nav link on scroll
    let scrollTimeout;
    
    window.addEventListener('scroll', () => {
        // Debounce scroll event for performance
        clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(() => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                // Check if section is in viewport
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            // Update active state
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }, 100);
    });

    console.log('✅ Navigation initialized');
}

// ============================================
// SUCCESS/ERROR MESSAGE
// ============================================
function showSuccessMessage(message, isError = false) {
    // Remove any existing message
    const existingMsg = document.querySelector('.success-message');
    if (existingMsg) {
        existingMsg.remove();
    }
    
    // Create message element
    const msgDiv = document.createElement('div');
    msgDiv.className = 'success-message';
    msgDiv.textContent = message;
    
    // Style for error messages
    if (isError) {
        msgDiv.style.background = 'rgba(239, 68, 68, 0.95)';
        msgDiv.style.color = '#fff';
    }
    
    // Add to page
    document.body.appendChild(msgDiv);
    
    // Trigger animation
    requestAnimationFrame(() => {
        msgDiv.classList.add('show');
    });
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        msgDiv.classList.remove('show');
        
        setTimeout(() => {
            if (document.body.contains(msgDiv)) {
                msgDiv.remove();
            }
        }, 300);
    }, 3000);
}

// ============================================
// PERFORMANCE MONITORING
// ============================================
window.addEventListener('load', () => {
    // Check page load performance
    if ('performance' in window && 'timing' in performance) {
        const perfData = performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        
        if (pageLoadTime > 0) {
            console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
            
            // Warn if load time is slow
            if (pageLoadTime > 3000) {
                console.warn('⚠️ Page load time is slow. Consider optimizing assets.');
            }
        }
    }
    
    // Log browser info
    console.log(`📱 User Agent: ${navigator.userAgent}`);
    console.log(`🌐 Language: ${navigator.language}`);
    console.log(`📊 Screen: ${screen.width}x${screen.height}`);
});

// ============================================
// ERROR HANDLING
// ============================================
window.addEventListener('error', (e) => {
    console.error('❌ JavaScript Error:', e.message);
    console.error('📍 Location:', e.filename, 'Line:', e.lineno);
});

// Handle promise rejections
window.addEventListener('unhandledrejection', (e) => {
    console.error('❌ Unhandled Promise Rejection:', e.reason);
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ============================================
// TERMINAL TYPING EFFECT
// ============================================
// ============================================
// TERMINAL TYPING - ULTRA SMOOTH VERSION
// ============================================
function initTerminalTyping() {
    const terminalOutput = document.querySelector('.terminal-output');
    
    if (!terminalOutput) {
        console.warn('⚠️ Terminal output not found');
        return;
    }
    
    const fullText = terminalOutput.textContent.trim();
    terminalOutput.textContent = '';
    terminalOutput.style.whiteSpace = 'pre-wrap';
    
    let hasTyped = false;
    
    function typeText() {
        if (hasTyped) return;
        hasTyped = true;
        
        let charIndex = 0;
        const charsPerFrame = 1; // Characters to add per interval
        const intervalDelay = 30; // Milliseconds between characters
        let lastTime = 0;
        
        console.log('⌨️ Starting terminal typing animation...');
        
        function animate(currentTime) {
            if (lastTime === 0) lastTime = currentTime;
            const elapsed = currentTime - lastTime;
            
            if (elapsed >= intervalDelay) {
                if (charIndex < fullText.length) {
                    terminalOutput.textContent += fullText.charAt(charIndex);
                    charIndex++;
                    lastTime = currentTime;
                } else {
                    console.log('✅ Terminal typing complete!');
                    return; // Stop animation
                }
            }
            
            if (charIndex < fullText.length) {
                requestAnimationFrame(animate);
            }
        }
        
        // Start animation after delay
        setTimeout(() => {
            requestAnimationFrame(animate);
        }, 500);
    }
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasTyped) {
                typeText();
                observer.disconnect();
            }
        });
    }, observerOptions);
    
    const terminalCard = document.querySelector('.terminal-card');
    if (terminalCard) {
        observer.observe(terminalCard);
        console.log('✅ Terminal typing initialized');
    }
}

// ============================================
// CONSOLE WELCOME MESSAGE
// ============================================
console.log('%c👋 Hi there!', 'font-size: 24px; font-weight: bold; color: #00d9ff;');
console.log('%cWelcome to Krishna Naicker\'s Portfolio', 'font-size: 16px; color: #a1a1aa;');
console.log('%c🚀 Built with vanilla JavaScript, Vanta.js, and passion!', 'font-size: 14px; color: #71717a;');
console.log('%c💼 Want to collaborate? Let\'s connect!', 'font-size: 14px; color: #00d9ff;');
console.log('%c📧 krishnanaicker2005@gmail.com', 'font-size: 12px; color: #a1a1aa;');
console.log('%c🔗 https://github.com/KrishnaNaicker', 'font-size: 12px; color: #a1a1aa;');
console.log(' ');