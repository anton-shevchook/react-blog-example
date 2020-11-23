// import { useHistory, useLocation } from 'react-router-dom';

class Authentication {
	constructor() {
		this.authenticated = false;
	}

	login(cb, credentials) {
		const { login, password } = credentials;
		// let history = useHistory();
		// let location = useLocation();


		alert(window.location);

		if(login === 'admin' && password === 'admin') {
			alert('Valid');
			this.authenticated = true;	
			setTimeout(cb, 100); // fake async
		} else {
			alert('Please check your credentials and try again.');
		}
		
		
	}

	logout(cb) {
		this.authenticated = false;
		setTimeout(cb, 100);
	}

	isAuthenticated() {
		return this.authenticated;
	}
}

export default new Authentication();