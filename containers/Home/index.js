import React from 'react'
import articleData from '../../components/siteData/articleData'
import ArticleCard from '../../components/articleCard'


export default function home() {
	return (
		<div>
		<h1>Articles</h1>
		{articleData.map(( article, i) => (
			<ArticleCard key={i} articlecontent={article}/>
			))}
		
		</div>
	)}

	
