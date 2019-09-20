import React from 'react'
import ArticleData from '../siteData/articleData.js'

function ArticleCard(props){
	console.log("props", props);
	return(
	<div class = "card">
		<img src={props.articlecontent.image.url}></img>
		<wrapper>
			<h2>{props.articlecontent.title}</h2>
			<p>{props.articlecontent.publishedDate}</p>
			<p>{props.articlecontent.blurb}</p>
			
			<a href={`/article/${props.articlecontent.id}`}>Read More</a>
		</wrapper>
	</div>
	)
}

export default ArticleCard;
