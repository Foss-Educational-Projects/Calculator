// Core LIbrary
import { useState } from "react";

// Component Library
import * as math from "mathjs";
import { Button } from "react-bootstrap";

// Stylesheet
import './calculator.component.scss';

// Root Element
const Calculator = () => {
	const [text, setText] = useState("")
	const [result, setResult] = useState("")
	const [decimal, setDecmial] = useState(false)
	const [operator, setOperator] = useState(false)

	const handleInput = (e) => {
		if(text.length < 21) {
			setText((text) => [...text, e.target.value])
		}
		
	}
	const clearDisplayInput = () => {
		setText("")
	}
	const clearFullDisplay = () => {
		setText("")
		setResult("")
	}
	const removeLastInput =() => {
		if(text.length !== 0) {
			setText(text.slice(0, -1))
		}
	}
	const evaluateInput = () => {
		if(text.length > 0) {
			const input = text.join("")
			setResult(math.evaluate(input))
			console.log(input)
		}
		
	}
	return (
		<div className="calculator__main">
			<section className="calculator__display">
				<h4 className="calculator__display__input">{text}</h4>
				<p className="calculator__display__result"><b>{result}</b></p>
			</section>
			<section className="calculator__buttons">
				<div className="calculator__buttons__clear">
					<Button size="lg" variant="dark" onClick={clearFullDisplay}>AC</Button>
					<Button size="lg" variant="dark" onClick={clearDisplayInput}>C</Button>
					<Button size="lg" variant="dark" onClick={removeLastInput}>&lt;</Button>
					<Button size="lg" variant="dark" onClick={evaluateInput}>=</Button>
				</div>
				<section className="calculator__buttons__combined">
					<div className="calculator__buttons__number">
						<Button size="lg" variant="secondary" value="1" onClick={handleInput}>1</Button>
						<Button size="lg" variant="secondary" value="2" onClick={handleInput}>2</Button>
						<Button size="lg" variant="secondary" value="3" onClick={handleInput}>3</Button>
						<Button size="lg" variant="secondary" value="4" onClick={handleInput}>4</Button>
						<Button size="lg" variant="secondary" value="5" onClick={handleInput}>5</Button>
						<Button size="lg" variant="secondary" value="6" onClick={handleInput}>6</Button>
						<Button size="lg" variant="secondary" value="7" onClick={handleInput}>7</Button>
						<Button size="lg" variant="secondary" value="8" onClick={handleInput}>8</Button>
						<Button size="lg" variant="secondary" value="9" onClick={handleInput}>9</Button>
						<Button size="lg" variant="secondary" value="0" onClick={handleInput}>0</Button>
						<Button size="lg" variant="danger" value="%" onClick={handleInput}>%</Button>
						<Button size="lg" variant="danger" value="." onClick={handleInput}>.</Button>
					</div>
					<div className="calculator__buttons__operator">
						<Button size="lg" variant="danger" value="+" onClick={handleInput}>+</Button>
						<Button size="lg" variant="danger" value="-" onClick={handleInput}>-</Button>
						<Button size="lg" variant="danger" value="*" onClick={handleInput}>x</Button>
						<Button size="lg" variant="danger" value="/" onClick={handleInput}>/</Button>
					</div>
				</section>





			</section>
		</div>
	)
}

export default Calculator