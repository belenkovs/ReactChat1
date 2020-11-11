export  default class ChatService{
	_apiBase = 'http://test14.ru'
	
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
