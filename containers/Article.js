import React, {useEffect, useState} from 'react';

import articleData from '../components/siteData/articleData.js'
import TextBlock from '../components/TextBlock'
import '../App.css'

function Article(props) {
	const routeId =  props.match.params.id;
	const [article, setArticle] = useState({})
	// console.log('props', props, articleData);
	
	useEffect(() => {
		for(let i = 0; i < articleData.length; i++) {
			if(articleData[i].id === routeId) {
				setArticle(articleData[i])
			} else{
				console.log(articleData[i].id)
			}
		}
	},[]);


	console.log('articles', props);

	return (
		<div className="article">
			<nav>
				<a href='/'>Home</a>
			</nav>
			<header>
				<h1>{article.title}</h1>
				<p>{article.publishedDate}</p>
				<h2>{article.blurb}</h2>
			</header>
			
			
			<div className="article_text">
				{article.articleText && article.articleText.map((text, i) => (
					<TextBlock key={i} type={text.type} data={text.data}/>
				))}
			</div>
		</div>
		)
}

export default Article;