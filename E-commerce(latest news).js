 // Scroll to top functionality
 /*fooster*/

 // Scroll to top functionality
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Show/hide scroll button based on scroll position
        window.addEventListener('scroll', function() {
            const scrollBtn = document.querySelector('.scroll-top');
            if (window.pageYOffset > 300) {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.visibility = 'visible';
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.visibility = 'hidden';
            }
        });

        // Newsletter form submission
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.email-input').value;
            alert('Thank you for subscribing! Welcome to Capital Shop 🎉');
            this.reset();
        });


        const carousel = document.querySelector('.carousel');
        const playPauseBtn = document.getElementById('play-pause');
        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('prev');
        let isPlaying = true;
        
        // Play/Pause functionality
        playPauseBtn.addEventListener('click', function() {
            if (isPlaying) {
                carousel.style.animationPlayState = 'paused';
                this.innerHTML = '<i class="fas fa-play"></i>';
                isPlaying = false;
            } else {
                carousel.style.animationPlayState = 'running';
                this.innerHTML = '<i class="fas fa-pause"></i>';
                isPlaying = true;
            }
        });
        
        // Manual rotation controls
        let rotation = 0;
        
        prevBtn.addEventListener('click', function() {
            rotation += 45;
            carousel.style.animation = 'none';
            carousel.style.transform = `rotateY(${rotation}deg)`;
        });
        
        nextBtn.addEventListener('click', function() {
            rotation -= 45;
            carousel.style.animation = 'none';
            carousel.style.transform = `rotateY(${rotation}deg)`;
        });
        
        // Add click to flip functionality
        const carouselItems = document.querySelectorAll('.carousel-item');
        carouselItems.forEach(item => {
            item.addEventListener('click', function() {
                this.querySelector('.item-content').style.transform = 
                    this.querySelector('.item-content').style.transform === 'rotateY(180deg)' 
                    ? 'rotateY(0deg)' 
                    : 'rotateY(180deg)';
            });
        });
      