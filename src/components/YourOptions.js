import React, { useState } from "react";
import { weapons, winConditions } from "./util";
import ScoreBoard from "./ScoreBoard";
import SelectedOption from "./SelectedOption";

const YourOptions = () => {
	const [score, setScore] = useState({
		you: 0,
		computer: 0,
		tie: 0,
	});
	const [selection, setSelection] = useState({
		you: "",
		computer: "",
	});
	const randomWeapon = () => {
		const result = Math.floor(Math.random() * weapons.length);
		return result;
	};
	const humanMove = (yourMove) => {
		const computerMove = randomWeapon();
		setSelection({
			you: yourMove,
			computer: computerMove,
		});
		if (yourMove === computerMove) {
			setScore({
				...score,
				tie: score.tie + 1,
			});
		} else if (winConditions[yourMove].includes(computerMove)) {
			setScore({
				...score,
				you: score.you + 1,
			});
		} else {
			setScore({
				...score,
				computer: score.computer + 1,
			});
		}
	};
	const resetGame = () => {
		setScore({
			you: 0,
			computer: 0,
			tie: 0,
		});
	};
	return (
		<>
			<ScoreBoard score={score} />
			<SelectedOption selection={selection} />
			<h2>Make Your Selection</h2>
			<div className="choices">
				<i
					className="choice fas fa-hand-rock fa-5x"
					onClick={() => humanMove(0)}
				></i>
				<i
					className="choice fas fa-hand-paper fa-5x"
					onClick={() => humanMove(1)}
				></i>
				<i
					className="choice fas fa-hand-scissors fa-5x"
					onClick={() => humanMove(2)}
				></i>
				<i
					className="choice fas fa-hand-lizard fa-5x"
					onClick={() => humanMove(3)}
				></i>
				<i
					className="choice fas fa-hand-spock fa-5x"
					onClick={() => humanMove(4)}
				></i>
			</div>
			<div className="m67 pl36">
				<button
					className={
						score.you !== 0 ||
						score.computer !== 0 ||
						score.tie !== 0
							? "displayBlock"
							: "restart-btn"
					}
					onClick={() => resetGame()}
				>
					Restart Game
				</button>
			</div>
		</>
	);
};

export default YourOptions;
