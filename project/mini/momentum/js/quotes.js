'use strict'

const quotes = [
	{
		quote : "I will take it. I will take it! I will take the Ring to Mordor. Though... I do not know the way.",
		authoer : "FRD",
	},
	{
		quote : "Even the smallest person can change the course of the future.",
		authoer : "GRDRL",
	},
	{
		quote : "I would have followed you, my brother... My captain... My king.",
		authoer : "BRMR",
	},
	{
		quote : "Your fingers would remember their old strength better...if they grasped your sword.",
		authoer : "GDF",
	},
	{
		quote : "Looks to my coming at first light on the fifth day. At dawn, look to the east.",
		authoer : "GDF",
	},
	{
		quote : "Ride out with me. Ride out and meet them.",
		authoer : "ARGN",
	},
	{
		quote : "Théoden King stands alone. Not alone. Rohirrim! To the King!",
		authoer : "GDF & EMR",
	},
	{
		quote : "That Frodo is alive. Yes. yes, he is alive.",
		authoer : "GDF",
	},
	{
		quote : "Run! Shadowfax! Show us the meaning of haste.",
		authoer : "GDF",
	},
	{
		quote : "Now is the hour. Riders of Rohan, oath you have taken. Now fulfill them all. To lord and land!",
		authoer : "EMR",
	},
];

const quote = document.querySelector('#quote span:first-child');
const authoer = document.querySelector('#quote span:last-child');
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
authoer.innerText = todaysQuote.authoer;





