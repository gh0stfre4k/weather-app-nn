import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';

// const DemoUI = () => {
//   return(
//     <div>Hi Demo UI</div>
//   );
  

// }

// export default DemoUI;

const DemoUI = () => {
	return (
    <div>
		<ButtonGroup variant="contained" aria-label="outlined primary button group">
			<Button>One</Button>
			<Button>Two</Button>
			<Button>Three</Button>
		</ButtonGroup>
	</div>
	);
};
export default DemoUI;