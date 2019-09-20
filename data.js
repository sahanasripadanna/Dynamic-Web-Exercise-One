import React from 'react';
// import data from 'data.json'

const sampleData = [
	{ title: 'Words', text: 'More Words' },
	{ title: 'Words', text: 'More Words' },
	{ title: 'Words', text: 'More Words' }
];

export default function testingContainer(props) {
	let city = 'NYC'
	let county = 'Kings';
	let me = 'Sahana';
	return (
		<div>
		{sampleData.map((article, i) => (
			<div>
			<h2>{article.title}</h2>
			<p>{article.text}</p>
			</div>
			))}
		</div>
	);
}