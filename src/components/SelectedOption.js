import React from "react";
import SelectedIcon from "./SelectedIcon";

const SelectedOption = ({ selection }) => {
	return (
		<div className="selection">
			<div className="selection-width fr">
				<SelectedIcon selection={selection.computer} />
			</div>
			<div className="selection-width fr"></div>
			<div className="selection-width">
				<SelectedIcon selection={selection.you} />
			</div>
		</div>
	);
};

export default SelectedOption;
