# Affiliate E-commerce Website

A simple, static e-commerce website template for affiliate marketing. This project is designed to be easy to customize and deploy, with no backend requirements.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Product showcase with images, descriptions, ratings, and prices
- Affiliate link tracking for analytics
- Easy to customize and extend
- Free to host on GitHub Pages

## Getting Started

### Prerequisites

- A basic text editor (like VS Code, Sublime Text, or even Notepad)
- A GitHub account (for free hosting)
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation

1. Download the code files to your computer
2. Open the files in your text editor to customize them

### Customization

#### Adding Your Products

Open the `products.js` file and edit the products array. For each product, you can specify:

```javascript
{
    id: 1, // Unique identifier
    title: "Your Product Name",
    description: "Product description goes here",
    price: 99.99, // Price in dollars
    image: "https://link-to-your-image.jpg", // URL to product image
    rating: 4.5, // Rating from 0 to 5
    affiliateLink: "https://your-affiliate-link" // Your affiliate link
}
```

Replace the sample products with your own. You can add as many products as you like.

#### Customizing the Design

- Edit the `styles.css` file to change colors, fonts, and layout
- Change the logo and site name in the `index.html` file
- Update the About section with your own information

#### Tracking and Analytics

The current implementation logs affiliate link clicks to the console. For real analytics:

1. Create a Google Analytics account
2. Add your Google Analytics tracking code to the `<head>` section of `index.html`
3. Modify the `trackAffiliateClick` function in `app.js` to send events to Google Analytics

## Deployment to GitHub Pages (Free Hosting)

1. Create a new repository on GitHub
2. Upload all the files to this repository
3. Go to Settings > Pages
4. Select the main branch as the source
5. Click Save

Your site will be published at `https://yourusername.github.io/repository-name/`

## Expanding Your Website

Some ideas to expand your affiliate website:

- Add a search functionality
- Create category filters
- Add a product detail page
- Implement a wishlist feature
- Add customer reviews
- Create a blog section for content marketing

## License

This template is free to use for personal or commercial projects.

## Disclaimer

This site template includes placeholder affiliate links. Replace them with your own affiliate links before publishing. Be sure to disclose your affiliate relationships appropriately according to FTC guidelines and other applicable laws.