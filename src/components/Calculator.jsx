import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { addDecimal, addOperator, addStuffs, clearStuff, getResult, removeStuff } from "../features/writeSlice";
import { buttons } from "../data/button";

const Calculator = () => {
	const dispatch = useDispatch();
	let readValue = useSelector(state => state.read.value)
	let writeValue = useSelector(state => state.write.value)
	useEffect(() => {
		window.addEventListener("keydown", (e) => {
			switch (e.key) {
				case '1':
					dispatch(addStuffs(e.key));
					break;
				case '2':
					dispatch(addStuffs(e.key));
					break;
				case '3':
					dispatch(addStuffs(e.key));
					break;
				case '4':
					dispatch(addStuffs(e.key));
					break;
				case '5':
					dispatch(addStuffs(e.key));
					break;
				case '6':
					dispatch(addStuffs(e.key));
					break;
				case '7':
					dispatch(addStuffs(e.key));
					break;
				case '8':
					dispatch(addStuffs(e.key));
					break;
				case '9':
					dispatch(addStuffs(e.key));
					break
				case '0':
					dispatch(addStuffs(e.key));
					break;
				case '+':
					console.log(e.key)
					dispatch(addOperator(e.key));
					break;
				case '-':
					console.log(e.key)
					dispatch(addOperator(e.key));
					break;
				case '*':
					console.log(e.key)
					dispatch(addOperator(e.key));
					break;
				case '/':
					console.log(e.key)
					dispatch(addOperator(e.key));
					break;
				case '.':
					console.log(e.key)
					dispatch(addOperator(e.key));
					break;
				case '=':
					console.log(e.key)
					dispatch(getResult())
					break;
				case 'c':
					dispatch(clearStuff())
					break;
				case 'Shift':

					break;
				case 'Backspace':
					dispatch(removeStuff())
					break;
				default:
					console.log("Key Is Not Assigned To Any Operation")
					break;
			}
		})
	}, [1])
	const getValue = (e) => {
		switch (e.target.getAttribute("data-value")) {
			case 'number':
				dispatch(addStuffs(e.target.textContent))
				break;

			case 'decimal':
				dispatch(addDecimal("."));
				break;

			case 'clear':
				dispatch(clearStuff())
				break;

			case 'multiply': 
				dispatch(addOperator("*"));
				break;

			case 'divide': 
				dispatch(addOperator("/"));
				break;

			case 'add': 
				dispatch(addOperator("+"));
				break;

			case 'subtract': 
				dispatch(addOperator("-"));
				break;

			case 'equal': 
				dispatch(getResult())
				break;

			case 'backspace':
				dispatch(removeStuff())
				break;
			default:
				console.log("Unknown Operator Or Undefined")
				break;
		}
	}

	return (
		<div className="calculator">
			<div className="display-box">
				<p>{readValue}</p>
				<div className="display-box-rows">
					<p id="display">{writeValue}</p>
				</div>
			</div>
			<div className="button-box">
				{
					buttons.map((btn) => {
						return <Button 
							data-value={btn.data}
							data-btn-type={btn.type}
							id={btn.id}
							key={btn.id}
							type="button"
							onClick={getValue}
							className="btn"
							variant={btn.variant}>
							{btn.value}</Button>
					})
				}
			</div>
		</div>
	)
}

export default Calculator