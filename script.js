// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }

    lastScroll = currentScroll;
});

// Form Submission Handler
const enrollmentForm = document.getElementById('enrollmentForm');

if (enrollmentForm) {
    enrollmentForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            nivel: document.getElementById('nivel').value,
            mensagem: document.getElementById('mensagem').value
        };

        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        console.log('Form Data:', formData);

        // Show success message
        alert('Obrigado pelo seu interesse! Entraremos em contato em breve.');

        // Reset form
        enrollmentForm.reset();

        // In a real implementation, you would do something like:
        /*
        try {
            const response = await fetch('/api/enrollment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Obrigado pelo seu interesse! Entraremos em contato em breve.');
                enrollmentForm.reset();
            } else {
                alert('Ocorreu um erro. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Ocorreu um erro. Por favor, tente novamente.');
        }
        */
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.diferencial-card, .nivel-card, .testimonial-card, .stat-item'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Phone number formatting (Brazilian format)
const phoneInput = document.getElementById('telefone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length <= 10) {
            // Format: (00) 0000-0000
            value = value.replace(/(\d{2})(\d)/, '($1) $2');
            value = value.replace(/(\d{4})(\d)/, '$1-$2');
        } else {
            // Format: (00) 00000-0000
            value = value.replace(/(\d{2})(\d)/, '($1) $2');
            value = value.replace(/(\d{5})(\d)/, '$1-$2');
        }
        
        e.target.value = value;
    });
}

// Add loading animation to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        if (!this.classList.contains('loading')) {
            this.style.position = 'relative';
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                this.style.pointerEvents = 'auto';
            }, 1000);
        }
    });
});