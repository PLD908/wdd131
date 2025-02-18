const techReviews = [
    {
        title: "Best Smartphones of 2025",
        image: "../images/smartphones-2025.jpg",
        imageAlt: "Best Smartphones of 2025",
        description: "We review the top smartphones of the year, covering camera quality, battery life, and performance. Brands like Apple, Samsung, and Google have introduced cutting-edge technology in their latest models.",
        link: "#"
    },
    {
        title: "Gaming Laptops: Top Picks for 2025",
        image: "../images/gaming-laptops.jpg",
        imageAlt: "Gaming Laptops",
        description: "Looking for the best gaming laptop? We've tested and compared the latest models from Alienware, Razer, ASUS, and more. Check out our in-depth review and rankings.",
        link: "#"
    },
    {
        title: "Smartwatches That Stand Out",
        image: "../images/smartwatches.jpg",
        imageAlt: "Smartwatches",
        description: "From Apple Watch to Samsung Galaxy Watch, here are the best smartwatches of 2025. We evaluate battery life, features, and fitness tracking capabilities.",
        link: "#"
    },
    {
        title: "Best Noise-Canceling Headphones",
        image: "../images/headphones.jpg",
        imageAlt: "Noise-Canceling Headphones",
        description: "We tested top noise-canceling headphones from Bose, Sony, and Apple to find the best for music lovers and frequent travelers. Discover which model suits you best.",
        link: "#"
    },
    {
        title: "Top Budget Laptops for Students",
        image: "../images/budget-laptops.jpg",
        imageAlt: "Budget Laptops",
        description: "Looking for an affordable yet powerful laptop? Our guide covers the best budget laptops for students and professionals in 2025.",
        link: "#"
    }
];

function generateReviewArticles() {
    const reviewsContainer = document.getElementById('reviewsContainer');
    
    techReviews.forEach(review => {
        const articleElement = document.createElement('article');
        articleElement.className = 'review-article';
        
        const title = document.createElement('h2');
        title.textContent = review.title;
        articleElement.appendChild(title);
        
        const image = document.createElement('img');
        image.src = review.image;
        image.alt = review.imageAlt;
        image.loading = 'lazy';
        articleElement.appendChild(image);
        
        const description = document.createElement('p');
        description.textContent = review.description;
        articleElement.appendChild(description);
        
        const link = document.createElement('a');
        link.href = review.link;
        link.textContent = 'Read Full Review';
        articleElement.appendChild(link);
        
        reviewsContainer.appendChild(articleElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    generateReviewArticles();
});