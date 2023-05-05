"use strict";

const container = document.querySelector(".container");
const yAxis = document.querySelector(".vertical-offset");
const xAxis = document.querySelector(".horizontal-offset");
const blurRadius = document.querySelector(".blur-radius");
const blurSpread = document.querySelector(".blur-spread");
const color = document.querySelector(".colorpicker");
const output = document.querySelector(".css-output");

function refreshContainer() {
	const shadow = `${xAxis.value}px ${yAxis.value}px ${blurRadius.value}px ${blurSpread.value}px ${color.value}`;
	output.value = shadow;
	container.style.boxShadow = shadow;
}

[xAxis, yAxis, blurRadius, blurSpread, color].forEach((e) => {
	e.oninput = refreshContainer;
});

refreshContainer();
