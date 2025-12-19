    AOS.init();
 
        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
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

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Testimonials carousel
        let currentSlide = 0;
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        const dots = document.querySelectorAll('.dot');

        function showSlide(index) {
            testimonialCards.forEach(card => card.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            testimonialCards[index].classList.add('active');
            dots[index].classList.add('active');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % testimonialCards.length;
            showSlide(currentSlide);
        }

        // Auto-rotate testimonials
        setInterval(nextSlide, 5000);

        // Dot click handlers
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.querySelector('.nav-menu');

        menuToggle.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });

        document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById("carousel");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    
    // Configurações do carrossel
    const SCROLL_AMOUNT = 180 + 80; // largura da imagem + gap
    const AUTO_SCROLL_INTERVAL = 3000; // 3 segundos
    let autoScrollTimer;
    
    // Função para iniciar rolagem automática
    function startAutoScroll() {
        stopAutoScroll(); // Para evitar múltiplos timers
        autoScrollTimer = setInterval(() => {
            if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
                // Volta ao início suavemente
                carousel.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                // Avança um item
                carousel.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
            }
        }, AUTO_SCROLL_INTERVAL);
    }
    
    // Função para parar rolagem automática
    function stopAutoScroll() {
        if (autoScrollTimer) {
            clearInterval(autoScrollTimer);
        }
    }
    
    // Event listeners para as setas
    next.addEventListener("click", () => {
        stopAutoScroll();
        carousel.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
        startAutoScroll();
    });
    
    prev.addEventListener("click", () => {
        stopAutoScroll();
        carousel.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
        startAutoScroll();
    });
    
    // Pausa quando o mouse estiver em cima
    carousel.addEventListener("mouseenter", stopAutoScroll);
    carousel.addEventListener("mouseleave", startAutoScroll);
    
    // Toque para dispositivos móveis
    carousel.addEventListener("touchstart", stopAutoScroll);
    carousel.addEventListener("touchend", () => {
        setTimeout(startAutoScroll, 5000); // Retoma após 5 segundos
    });
    
    // Inicia o carrossel automático
    startAutoScroll();
    
    // Reset no resize da janela
    window.addEventListener('resize', function() {
        stopAutoScroll();
        setTimeout(startAutoScroll, 1000);
    });
});