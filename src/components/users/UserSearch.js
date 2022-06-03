import { useState, useContext } from 'react';
import AlertContext from '../context/Alert/AlertContext';
import GitHubContext from '../context/githubContext/GithubContext';

function UserSearch() {
	const [ text, setText ] = useState('');

	const { users, searchUsers, clearUser } = useContext(GitHubContext);
	const { setAlert } = useContext(AlertContext);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim() === '') {
			setAlert('Search field is empty', 'error');
			return;
		} else {
			searchUsers(text);
			setText('');
		}
	};

	const handleClear = () => {
		clearUser();
	};

	return (
		<div>
			<div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
				<form onSubmit={handleSubmit}>
					<h1 className="text-4xl mb-3 ml-2 font-sans font-bold text-white">Search Users</h1>
					<div className="form-control">
						<div className="relative">
							<input
								type="text"
								className="w-full pr-40 bg-gray-400 input input-lg text-black"
								placeholder="Search"
								value={text}
								onChange={handleChange}
							/>
							<button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
								Go
							</button>
						</div>
					</div>
				</form>
			</div>
			{users.length > 0 && (
				<div>
					<button className="btn bg-red-500 btn-lg text-white" onClick={handleClear}>
						Clear
					</button>
				</div>
			)}
		</div>
	);
}

export default UserSearch;
