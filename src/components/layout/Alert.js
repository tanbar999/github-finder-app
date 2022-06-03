import { useContext } from 'react';
import AlertContext from '../context/Alert/AlertContext';
import { VscBracketError } from 'react-icons/vsc';

function Alert() {
	const { alert } = useContext(AlertContext);

	return (
		alert !== null &&
		alert.type === 'error' && (
			<div className="flex flex-row text-red-400">
				<VscBracketError className="text-3xl mr-2" />
				<strong className="text-2xl">{alert.msg}</strong>
			</div>
		)
	);
}

export default Alert;
