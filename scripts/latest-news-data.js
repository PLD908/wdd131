const latestNewsArticles = [
    {
        title: "Breakthrough in Quantum Computing",
        image: "../images/quantum-computing.jpg",
        imageAlt: "Quantum Computing",
        description: "Scientists have achieved a significant breakthrough in quantum computing, making quantum supremacy more feasible. This could revolutionize industries such as cybersecurity, pharmaceuticals, and AI.",
        link: "#"
    },
    {
        title: "5G Expands Globally",
        image: "../images/5g-network.jpg",
        imageAlt: "5G Network Expansion",
        description: "The expansion of 5G networks is transforming industries, improving internet speeds, and enabling advanced IoT applications. Countries worldwide are racing to implement nationwide 5G coverage.",
        link: "#"
    },
    {
        title: "AI-Powered Assistants Become Smarter",
        image: "../images/ai-assistant.jpg",
        imageAlt: "AI Assistants",
        description: "Artificial Intelligence continues to improve, with AI assistants now capable of engaging in more natural conversations, handling complex tasks, and integrating seamlessly into daily life.",
        link: "#"
    },
    {
        title: "Apple Unveils New AR Glasses",
        image: "../images/ar-glasses.jpg",
        imageAlt: "Apple AR Glasses",
        description: "Apple's latest AR glasses promise an immersive experience with seamless integration of augmented reality into everyday tasks, gaming, and productivity applications.",
        link: "#"
    },
    {
        title: "SpaceX's Starship Prepares for Mars",
        image: "../images/spacex-starship.jpg",
        imageAlt: "SpaceX Starship",
        description: "Elon Musk's SpaceX is making progress with its Starship project, aiming to send humans to Mars within the next decade. The latest test flights have shown promising results.",
        link: "#"
    }
];

function generateLatestNewsArticles() {
    const latestNewsContainer = document.getElementById('latestNewsContainer');
    
    latestNewsArticles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.className = 'latest-news-article';
        
        const title = document.createElement('h2');
        title.textContent = article.title;
        
        const image = document.createElement('img');
        image.src = article.image;
        image.alt = article.imageAlt;
        image.loading = 'lazy';
        articleElement.appendChild(image);
        
        const description = document.createElement('p');
        description.textContent = article.description;
        articleElement.appendChild(description);
        
        const link = document.createElement('a');
        link.href = article.link;
        link.textContent = 'Read More';
        articleElement.appendChild(link);
        
        latestNewsContainer.appendChild(articleElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    generateLatestNewsArticles();
});