export  default class ChatService{
	_apiBase = 'http://localhost:3000'
	
	async getResource(url) {
		const res =await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url},received ${res.status}`);
		}
		console.log(`${this._apiBase}${url}`);
		return await res.json();
	}

	async  getMessageItems() {
		console.log('getMessageItems');
		return await this.getResource('/message/');
	}

	async sendMessage(message) {
		console.log(message);
	}

}
