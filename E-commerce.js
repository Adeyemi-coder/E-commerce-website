 document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.fashion-slide');
        const indicators = document.querySelectorAll('.indicator');
        const prevArrow = document.querySelector('.prev-arrow');
        const nextArrow = document.querySelector('.next-arrow');
        let currentSlide = 0;
        let autoSlideInterval;

        function showSlide(slideIndex) {
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));
            
            slides[currentSlide].classList.add('slide-out');
            
            setTimeout(() => {
                slides.forEach(slide => slide.classList.remove('slide-out'));
                slides[slideIndex].classList.add('active');
                indicators[slideIndex].classList.add('active');
                currentSlide = slideIndex;
            }, 400);
        }

        function nextSlide() {
            const nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex);
        }

        function prevSlide() {
            const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prevIndex);
        }

        nextArrow.addEventListener('click', function() {
            nextSlide();
            resetAutoSlide();
        });

        prevArrow.addEventListener('click', function() {
            prevSlide();
            resetAutoSlide();
        });

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', function() {
                showSlide(index);
                resetAutoSlide();
            });
        });

        function startAutoSlide() {
            autoSlideInterval = setInterval(() => {
                nextSlide();
            }, 10000);
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }

        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                resetAutoSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                resetAutoSlide();
            }
        });

        startAutoSlide();
    });






document.addEventListener('DOMContentLoaded', function() {
    const trendingGrid = document.getElementById('trendingGrid');
    const prevArrow = document.querySelector('.nav-arrow.prev');
    const nextArrow = document.querySelector('.nav-arrow.next');
    const categoryTags = document.querySelectorAll('.category-tag');
    
    // Product database with different images
    const allProducts = [
        {
            name: "Urban Street Jacket",
            price: "$95.99",
            image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            category: "men"
        },
        {
            name: "Bohemian Maxi Dress",
            price: "$139.99",
            image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            category: "women"
        },
        {
            name: "Kids Play Set",
            price: "$39.99",
            image: "babyset.jpg",
            category: "baby"
        },
        {
            name: "Leather Crossbody Bag",
            price: "$179.99",
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            category: "fashion"
        },
        {
            name: "Athletic Running Shoes",
            price: "$89.99",
            image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            category: "men"
        },
        {
            name: "Baby Winter Set",
            price: "$45.99",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            category: "baby"
        },
        
        {
            name: "Designer Watch",
            price: "$299.99",
            image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            category: "fashion"
        },
        {
            name: "Casual Blazer",
            price: "$149.99",
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            category: "men"
        },
        {
            name: "Silk Evening Dress",
            price: "$199.99",
            image: "https://images.unsplash.com/photo-1566479179816-d0ed30e6b281?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            category: "women"
        }
    ];

    let currentProducts = [];
    let currentCategory = 'all';
    let autoSlideInterval;

    // Function to create product card HTML
    function createProductCard(product) {
        return `
            <div class="product-card" data-category="${product.category}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-overlay">
                        <div class="view-product">
                            <button class="icon-btn">❤️</button>
                            <button class="icon-btn">🛒</button>
                            <button class="icon-btn">🔍</button>
                        </div>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">${product.price}</p>
                </div>
            </div>
        `;
    }

    // Function to update displayed products without blinking
    function updateProducts(newProducts) {
        const currentCards = trendingGrid.querySelectorAll('.product-card');
        
        if (currentCards.length >= 2) {
            // Animate out the first two cards
            currentCards[0].classList.add('slide-out-left');
            currentCards[1].classList.add('slide-out-left');
            
            setTimeout(() => {
                // Remove the animated out cards
                currentCards[0].remove();
                currentCards[1].remove();
                
                // Add new cards at the end with animation - USING CORRECT ICON BUTTONS
                newProducts.slice(2).forEach((product, index) => {
                    const newCard = document.createElement('div');
                    newCard.className = 'product-card slide-in-right';
                    newCard.style.animationDelay = `${index * 0.1}s`;
                    newCard.innerHTML = `
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}">
                            <div class="product-overlay">
                                <div class="view-product">
                                    <button class="icon-btn">❤️</button>
                                    <button class="icon-btn">🛒</button>
                                    <button class="icon-btn">🔍</button>
                                </div>
                            </div>
                        </div>
                        <div class="product-info">
                            <h3 class="product-name">${product.name}</h3>
                            <p class="product-price">${product.price}</p>
                        </div>
                    `;
                    trendingGrid.appendChild(newCard);
                });
                
                currentProducts = newProducts;
                
                // Remove animation classes after animation completes
                setTimeout(() => {
                    const allCards = trendingGrid.querySelectorAll('.product-card');
                    allCards.forEach(card => {
                        card.classList.remove('slide-in-right');
                    });
                }, 600);
                
            }, 600);
        } else {
            // Initial load
            trendingGrid.innerHTML = '';
            newProducts.forEach(product => {
                trendingGrid.innerHTML += createProductCard(product);
            });
            currentProducts = newProducts;
        }
    }

    // Function to get filtered products
    function getFilteredProducts() {
        if (currentCategory === 'all') {
            return [...allProducts];
        }
        return allProducts.filter(product => product.category === currentCategory);
    }

    // Function to rotate products (remove 2 oldest, add 2 new)
    function rotateProducts() {
        const filteredProducts = getFilteredProducts();
        const currentProductIds = currentProducts.map(p => allProducts.indexOf(p));
        
        // Find 2 new products that aren't currently displayed
        const availableProducts = filteredProducts.filter((_, index) => !currentProductIds.includes(index));
        const newProducts = [...currentProducts.slice(2), ...availableProducts.slice(0, 2)];
        
        if (newProducts.length === 4) {
            updateProducts(newProducts);
        } else {
            // If not enough new products, shuffle from beginning
            const shuffledProducts = [...filteredProducts].sort(() => Math.random() - 0.5);
            updateProducts(shuffledProducts.slice(0, 4));
        }
    }

    // Event listeners for arrows
    nextArrow.addEventListener('click', function() {
        rotateProducts();
        resetAutoSlide();
    });

    prevArrow.addEventListener('click', function() {
        rotateProducts();
        resetAutoSlide();
    });

    // Event listeners for category tags
    categoryTags.forEach(tag => {
        tag.addEventListener('click', function() {
            categoryTags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Set current category based on clicked tag
            const categoryText = this.textContent.toLowerCase();
            currentCategory = categoryText === 'fashion' ? 'all' : categoryText;
            
            // Reset to first 4 products of selected category
            const filteredProducts = getFilteredProducts();
            updateProducts(filteredProducts.slice(0, 4));
            resetAutoSlide();
        });
    });

    // Auto rotate every 10 seconds
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            rotateProducts();
        }, 10000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Initialize with first 4 products
    currentCategory = 'all';
    const initialProducts = getFilteredProducts().slice(0, 4);
    updateProducts(initialProducts);
    startAutoSlide();
});