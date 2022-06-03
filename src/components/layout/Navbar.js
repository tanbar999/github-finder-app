import { FaGithub } from 'react-icons/fa';
import PropTypes from 'react';
import { Link } from 'react-router-dom';

function Navbar({ title }) {
	return (
		<div className="navbar bg-neutral drop-shadow-sm">
			<div className="flex-1">
				<Link to="/" className="btn btn-ghost normal-case text-xl">
					<FaGithub className="text-3xl mx-1" />
					{title}
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal p-0">
					<Link to="/">
						<li className="mx-6">Home</li>
					</Link>
					<Link to="/about">
						<li className="mx-6">About</li>
					</Link>
				</ul>
			</div>
		</div>
	);
}

Navbar.defaultProps = {
	title: 'Github Finder'
};

Navbar.propTypes = {
	title: PropTypes.string
};

export default Navbar;
