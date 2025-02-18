const latestNews = [
    {
        title: "Breakthrough in Quantum Computing",
        description: "Researchers achieve a significant milestone in quantum computing, bringing us closer to real-world applications.",
        link: "#"
    },
    {
        title: "Electric Vehicles: What's Next?",
        description: "EV technology is evolving rapidly. Here's what the future holds for electric cars.",
        link: "#"
    },
    {
        title: "Meta's Vision for the Metaverse",
        description: "Mark Zuckerberg unveils new features and updates for the Metaverse, redefining how we interact online.",
        link: "#"
    },
    {
        title: "5G Expansion Worldwide",
        description: "Countries around the world are rapidly deploying 5G networks. What does this mean for consumers?",
        link: "#"
    }
];

const techReviews = [
    {
        title: "Smartphone of the Year",
        description: "We put the latest flagship smartphones to the test. See which one stands out.",
        link: "#"
    },
    {
        title: "Best Laptops for Developers",
        description: "A roundup of the best laptops for coding and development in 2025.",
        link: "#"
    },
    {
        title: "Top Smartwatches of 2025",
        description: "We review the latest smartwatches that combine fitness tracking, style, and innovation.",
        link: "#"
    },
    {
        title: "Gaming Consoles Face-Off",
        description: "PlayStation vs Xbox vs Nintendo Switch: Which gaming console dominates in 2025?",
        link: "#"
    }
];

function generateNewsArticles() {
    const latestNewsContainer = document.querySelector('.latest-news');
    
    latestNews.forEach(news => {
        const article = document.createElement('article');
        
        const title = document.createElement('h3');
        title.textContent = news.title;
        
        const description = document.createElement('p');
        description.textContent = news.description;
        
        const link = document.createElement('a');
        link.href = news.link;
        link.textContent = 'Read More';
        
        article.appendChild(title);
        article.appendChild(description);
        article.appendChild(link);
        
        latestNewsContainer.appendChild(article);
    });
}

function generateReviewArticles() {
    const reviewsContainer = document.querySelector('.reviews');
    
    techReviews.forEach(review => {
        const article = document.createElement('article');
        
        const title = document.createElement('h3');
        title.textContent = review.title;
        
        const description = document.createElement('p');
        description.textContent = review.description;
        
        const link = document.createElement('a');
        link.href = review.link;
        link.textContent = 'Read More';
        
        article.appendChild(title);
        article.appendChild(description);
        article.appendChild(link);
        
        reviewsContainer.appendChild(article);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    generateNewsArticles();
    generateReviewArticles();
});