import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className="hero">
			<div className="hero-content text-center">
				<div className="max-w-lg">
					<h1 className="font-bold text-8xl mb-8">Oops!!</h1>

					<p className="text-5xl mb-8">404 - Page Not found!</p>

					<Link className="btn btn-primary btn-lg" to="/">
						<FaHome className="mr-2" />Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
