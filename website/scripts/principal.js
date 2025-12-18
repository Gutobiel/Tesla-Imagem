    // Carrossel da seção About
    let aboutCurrent = 0;
    const aboutSlides = document.querySelectorAll('.about-slide');
    const aboutDots = document.querySelectorAll('.about-dot');

    function showAboutSlide(idx) {
        aboutSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === idx);
        });
        aboutDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === idx);
        });
        aboutCurrent = idx;
    }

    function nextAboutSlide() {
        let next = (aboutCurrent + 1) % aboutSlides.length;
        showAboutSlide(next);
    }

    aboutDots.forEach((dot, i) => {
        dot.addEventListener('click', () => showAboutSlide(i));
    });

    setInterval(nextAboutSlide, 5000);
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