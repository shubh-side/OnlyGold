// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the products container element
    const productsContainer = document.getElementById('products-container');
    
    // Function to render stars based on rating
    function renderStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        
        let starsHTML = '';
        
        // Add full stars
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }
        
        // Add half star if needed
        if (halfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        }
        
        // Add empty stars
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="far fa-star"></i>';
        }
        
        return starsHTML;
    }
    
    // Function to format price with currency symbol
    function formatPrice(price) {
        return '$' + price.toFixed(2);
    }
    
    // Function to render product cards
    function renderProducts() {
        // Clear the products container
        productsContainer.innerHTML = '';
        
        // Loop through each product and create a card
        products.forEach(product => {
            // Create product card
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            // Create product image
            const productImg = document.createElement('div');
            productImg.className = 'product-img';
            productImg.style.backgroundImage = `url(${product.image})`;
            
            // Create product info container
            const productInfo = document.createElement('div');
            productInfo.className = 'product-info';
            
            // Create product content
            productInfo.innerHTML = `
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">${formatPrice(product.price)}</p>
                <div class="product-rating">${renderStars(product.rating)} (${product.rating})</div>
                <a href="${product.affiliateLink}" class="btn buy-btn" target="_blank" rel="noopener noreferrer">Buy Now</a>
            `;
            
            // Append elements to product card
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
            
            // Append product card to container
            productsContainer.appendChild(productCard);
        });
    }
    
    // Track affiliate link clicks (for analytics purposes)
    function trackAffiliateClick(productId) {
        console.log(`Product ${productId} affiliate link clicked`);
        // In a real application, you might want to send this data to your analytics service
    }
    
    // Add event listener to capture affiliate link clicks
    productsContainer.addEventListener('click', function(e) {
        // Check if the clicked element is a buy button
        if (e.target.classList.contains('buy-btn')) {
            // Find the product card
            const productCard = e.target.closest('.product-card');
            const productIndex = Array.from(productsContainer.children).indexOf(productCard);
            
            // Track the click
            if (productIndex !== -1) {
                trackAffiliateClick(products[productIndex].id);
            }
        }
    });
    
    // Initialize the page by rendering products
    renderProducts();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });
});