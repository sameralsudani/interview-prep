// https://www.geeksforgeeks.org/using-settimeouts-in-react-components/#
// A setTimeout method executes a function after a particular time. This can be useful for creating time-based effects, such as showing a loading spinner for a few seconds before loading new data or hiding a success message after a few seconds. To maintain the efficiency of a react application, we need to keep track of the timeouts and clear them up using the useEffect hook. 

import { useState, useEffect } from 'react';
import './App.css'

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState(null);

	useEffect(() => {
		// Creating a timeout within the useEffect hook
		setTimeout(() => {
			setData("Welcome to gfg!");
			setIsLoading(false);
		}, 5000);
	}, []);

	if (isLoading) {
		return <div className='spinner'>
			Loading.....</div>;
	}

	return (
		<div className='container'>
			{data}
		</div>
	);
}
export default App;
