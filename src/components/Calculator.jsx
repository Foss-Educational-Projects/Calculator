import React from "react";
import Button from 'react-bootstrap/Button';

const Calculator = () => {
	const text = "6213123 X 123123"
	return (
		<div className="calculator">
			<div className="display-box">
			{text}
			</div>
			<div className="button-box">
				<Button id="one" type="button" variant="primary" size="lg">1</Button>
				<Button id="two" type="button" variant="primary" size="lg">2</Button>
				<Button id="three" type="button" variant="primary" size="lg">3</Button>
				<Button id="four" type="button" variant="primary" size="lg">4</Button>
				<Button id="five" type="button" variant="primary" size="lg">5</Button>
				<Button id="six" type="button" variant="primary" size="lg">6</Button>
				<Button id="seven" type="button" variant="primary" size="lg">7</Button>
				<Button id="eight" type="button" variant="primary" size="lg">8</Button>
				<Button id="nine" type="button" variant="primary" size="lg">9</Button>
				<Button id="zero" type="button" variant="primary" size="lg">0</Button>
			</div>
		</div>
	)
}

export default Calculator