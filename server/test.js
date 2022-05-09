const axios = require('axios').default;

var poliJson = [];

axios.get('http://holo.dothome.co.kr/poliJson.json',{
    method: 'get',
    responseType: 'json'
  }).then(function (response) {
    //console.log(response);
    var temp = response;
    console.log(typeof(response));
}).catch(function (error) {
    console.log(error);
});

//console.log(poliJson);




/*
var XMLHttpRequest = require('xhr2');
var request = new XMLHttpRequest();

//NodeJS라서 require로 XMLHttpRequest 모듈을 불러옵니다.
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// request로 XMLHttpRequest 객체를 만듭니다.
//var request = new XMLHttpRequest();

// request("method",url)로 서버호출을 위한 파라미터를 전달합니다.
request.open("GET", "http://holo.dothome.co.kr/poliJson.json");

// request를 요청합니다.
request.send();

// readyState 가 "DONE" 됐을 때
if (request.readyState === 4) {

// request 응답이 200 즉 "OK"됐을 때
    if(request.status === 200) {
    
    //원하는 작업을 합니다.
        console.log(request.responseText);
        const data = JSON.parse(request.responseText);
        console.log(data);
    } else {
        console.log('Error Occurred :');
    }
}

// 코드의 끝을 나타는 콘솔 로그
console.log("End of TEST");
*/