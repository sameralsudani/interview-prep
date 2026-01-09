// A setTimeout method executes a function after a particular time. This can be useful for creating time-based effects, such as showing a loading spinner for a few seconds before loading new data or hiding a success message after a few seconds. To maintain the efficiency of a react application, we need to keep track of the timeouts and clear them up using the useEffect hook. 

//clearTimeout method. This is important to prevent memory leaks in our application, as the callback for setTimeout may still execute if we don’t clear it when the component unmounts. 

import { useState, useEffect, useRef } from 'react';
import './App.css'

const App = () => {
	const [showWarning, setShowWarning] = useState(false);
	const timerId = useRef(null);

	useEffect(() => {
		if (showWarning) {

			//Creating a timeout
			timerId.current = setTimeout(() => {
				setShowWarning(false);
			}, 5000);
		}

		return () => {
			//Clearing a timeout
			clearTimeout(timerId.current);
		};
	}, [showWarning]);

	function handleClick() {
		setShowWarning(true);
	}

	return (
		<div className='warn'>
			{showWarning && <div className='warningMsg'>
				This is a Warning !</div>}
			<button className='btn' onClick={handleClick}>
				Show Warning</button>
		</div>
	);
}
export default App;
