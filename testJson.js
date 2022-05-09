//import fetch from "node-fetch";
import fetch from 'cross-fetch';

function getPolicyJson() {
	return fetch('http://holo.dothome.co.kr/poliJson.json')
	.then(response => {return response.json();})
	.then(response => { console.log(response); });
}

globalThis.fetch = fetch;

var list = getPolicyJson();
console.log(list);