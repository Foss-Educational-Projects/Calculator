import React from "react";
import Button from 'react-bootstrap/Button';

const Calculator = () => {
	const text = "6213123 X 123123"
	const size = ""
	const color = ""
	return (
		<div className="calculator">
			<div className="display-box">
				{text}
			</div>
			<div className="button-box">
				<Button id="one" type="button" variant={color} size={size}>1</Button>
				<Button id="two" type="button" variant={color} size={size}>2</Button>
				<Button id="three" type="button" variant={color} size={size}>3</Button>
				<Button id="four" type="button" variant={color} size={size}>4</Button>
				<Button id="five" type="button" variant={color} size={size}>5</Button>
				<Button id="six" type="button" variant={color} size={size}>6</Button>
				<Button id="seven" type="button" variant={color} size={size}>7</Button>
				<Button id="eight" type="button" variant={color} size={size}>8</Button>
				<Button id="nine" type="button" variant={color} size={size}>9</Button>
				<Button id="zero" type="button" variant={color} size={size}>0</Button>
				<Button id="decimal" type="button" variant={color} size={size}>.</Button>
				<Button id="all-clear" type="button" variant={color} size={size}>AC</Button>
				<Button id="clear" type="button" variant={color} size={size}>C</Button>
				<Button id="multiply" type="button" variant={color} size={size}>X</Button>
				<Button id="division" type="button" variant={color} size={size}>/</Button>
				<Button id="addition" type="button" variant={color} size={size}>+</Button>
				<Button id="subtraction" type="button" variant={color} size={size}>-</Button>
				<Button id="equals" type="button" variant={color} size={size}>=</Button>
			</div>
		</div>
	)
}

export default Calculator