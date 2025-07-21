import React, { useEffect, useState } from 'react';

const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY');
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="news-list">
            {articles.length > 0 ? (
                articles.map((article, index) => (
                    <div key={index} className="news-item">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </div>
                ))
            ) : (
                <p>No news articles available.</p>
            )}
        </div>
    );
};

export default NewsList;