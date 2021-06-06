import React from "react";

function ScoreBoard({ score }) {
	return (
		<header className="header">
			<h1>Rock Paper Scissors Lizard Spock</h1>
			<div id="score" className="score">
				<p>You: {score.you}</p>
				<p>Tie: {score.tie}</p>
				<p>Computer: {score.computer}</p>
			</div>
		</header>
	);
}

export default ScoreBoard;
