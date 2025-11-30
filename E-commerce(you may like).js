document.addEventListener('DOMContentLoaded', function() {
            const productsTrack = document.getElementById('productsTrack');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            
            // Different product database - NOT used in trending section
            const allProducts = [
                {
                    name: "Cashmere Tank + Bag",
                    price: "$129.99",
                    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                    name: "Premium Leather Boots",
                    price: "$249.99",
                    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                    name: "Designer Sunglasses",
                    price: "$159.99",
                    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                    name: "Summer Skincare Set",
                    price: "$79.99",
                    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                    name: "Wool Blend Coat",
                    price: "$299.99",
                    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                    name: "Canvas Sneakers",
                    price: "$69.99",
                    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                    name: "Gold Chain Necklace",
                    price: "$189.99",
                    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                    name: "Denim Jacket",
                    price: "$119.99",
                    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                    name: "Luxury Face Cream",
                    price: "$95.99",
                    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                    name: "Minimalist Watch",
                    price: "$199.99",
                    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                    name: "Cotton Tote Bag",
                    price: "$49.99",
                    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                },
                {
                    name: "Silk Scarf",
                    price: "$89.99",
                    image: "https://images.unsplash.com/photo-1601924287953-23c6e81bfb60?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                }
            ];

            let currentIndex = 0;
            let autoSlideInterval;

            function createProductHTML(product) {
                return `
                    <div class="product-item">
                        <div class="product-image-wrapper">
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                        <div class="product-details">
                            <h3 class="product-title">${product.name}</h3>
                            <p class="product-price">${product.price}</p>
                        </div>
                    </div>
                `;
            }

            function initializeProducts() {
                productsTrack.innerHTML = '';
                allProducts.forEach(product => {
                    productsTrack.innerHTML += createProductHTML(product);
                });
            }

            function slideProducts(direction) {
                const cardWidth = productsTrack.querySelector('.product-item').offsetWidth;
                const gap = 30;
                const slideAmount = cardWidth + gap;

                if (direction === 'next') {
                    currentIndex++;
                    if (currentIndex >= allProducts.length - 3) {
                        currentIndex = 0;
                    }
                } else {
                    currentIndex--;
                    if (currentIndex < 0) {
                        currentIndex = allProducts.length - 4;
                    }
                }

                const translateX = -(currentIndex * slideAmount);
                productsTrack.style.transform = `translateX(${translateX}px)`;
            }

            function startAutoSlide() {
                autoSlideInterval = setInterval(() => {
                    slideProducts('next');
                }, 5000);
            }

            function resetAutoSlide() {
                clearInterval(autoSlideInterval);
                startAutoSlide();
            }

            // Event listeners
            nextBtn.addEventListener('click', function() {
                slideProducts('next');
                resetAutoSlide();
            });

            prevBtn.addEventListener('click', function() {
                slideProducts('prev');
                resetAutoSlide();
            });

            // Initialize
            initializeProducts();
            startAutoSlide();
        });