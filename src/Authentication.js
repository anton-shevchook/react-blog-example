class Authentication {
	constructor() {
		this.authenticated = false;
	}

	login(cb) {
		this.authenticated = true;
		setTimeout(cb, 100); // fake async
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