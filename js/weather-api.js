/*
공공데이터포털
*/

var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst';   /*URL*/

var queryParams =   '?' +   encodeURIComponent('serviceKey')    +   '=' +   '서비스키';  /*Service Key - 서비스키*/
queryParams     +=  '&' +   encodeURIComponent('pageNo')        +   '=' +   encodeURIComponent('1');        /*페이지 번호*/
queryParams     +=  '&' +   encodeURIComponent('numOfRows')     +   '=' +   encodeURIComponent('1000');     /*한 페이지 결과 수*/
queryParams     +=  '&' +   encodeURIComponent('dataType')      +   '=' +   encodeURIComponent('XML');      /*응답자료형식*/
queryParams     +=  '&' +   encodeURIComponent('base_date')     +   '=' +   encodeURIComponent('20210628'); /*발표일자*/
queryParams     +=  '&' +   encodeURIComponent('base_time')     +   '=' +   encodeURIComponent('0600');     /*발표시각*/
queryParams     +=  '&' +   encodeURIComponent('nx')            +   '=' +   encodeURIComponent('55');       /*예보지점 X 좌표*/
queryParams     +=  '&' +   encodeURIComponent('ny')            +   '=' +   encodeURIComponent('127');      /*예보지점 Y 좌표*/

xhr.open('GET', url + queryParams);
xhr.setRequestHeader('X-PINGOTHER', 'pingpong');

xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');