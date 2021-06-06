import React from "react";

const SelectedIcon = (selectedState) => {
	const caseText = () => {
		const { selection } = selectedState;
		let icon = "";
		switch (selection) {
			case 0:
				icon = <i className="fas fa-hand-rock fa-5x"></i>;
				break;
			case 1:
				icon = <i className="fas fa-hand-paper fa-5x"></i>;
				break;
			case 2:
				icon = <i className="fas fa-hand-scissors fa-5x"></i>;
				break;
			case 3:
				icon = <i className="fas fa-hand-lizard fa-5x"></i>;
				break;
			case 4:
				icon = <i className="fas fa-hand-spock fa-5x"></i>;
				break;
			default:
				icon = <i className="fas fa-hand-spock fa-5x"></i>;
				break;
		}
		return icon;
	};

	return caseText();
};

export default SelectedIcon;
