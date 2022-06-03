import SpinnerGIF from '../../Assets/Images/LoadingSpinner.gif';

function Spinner() {
	return (
		<div className="w-100 mt-20">
			<img src={SpinnerGIF} alt="Loading..." width={180} className="text-center mx-auto" />
		</div>
	);
}

export default Spinner;
