import PropTypes from 'prop-types';

function NavBar({handlePre, handleNext}) {
	return (
		<div>
			<button onClick={handlePre}>Pre</button>
			<button onClick={handleNext}>Next</button>
		</div>
	);
}

NavBar.proptypes = {
	handlePre: PropTypes.func.isRequired,
	handleNext: PropTypes.func.isRequired,
};

export default NavBar;