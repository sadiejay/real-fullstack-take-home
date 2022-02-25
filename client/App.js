import React from 'react';
import WallEImg from './images/wall-e.png';
import Coordinate from './Coordinate-system'

function App() {
	return (
		<div className='App' style={{ textAlign: 'center' }}>
			<img src={WallEImg} height="200" alt="wall-e robot"/>
			<h1>MARS ROVER</h1>
			{/* <Coordinate /> */}
		</div>
	);
}

export default App;
