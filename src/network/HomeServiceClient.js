import * as appConfig from '../config/app_config.json';

export default class HomeServiceClient {

     _headers = { 'Content-Type': 'application/json; charset=UTF-8' };

    async getIamHome() {
        let url = (appConfig.monoli_home_endpoint) + (appConfig.i_am_home);
        // console.log(`::: URL AM I HOME RESULT ::: ${JSON.stringify(url)}`);

        let result = await fetch(url, { method: 'GET' });
        // console.log(`::: RESULT AM I HOME RESULT ::: ${JSON.stringify(result)}`);

        let json = await result.json();
        // console.log(`::: GET I AM HOME RESULT ::: ${JSON.stringify(json)}`);
        // console.log(`::: GET I AM HOME RESULT ::: ${JSON.stringify(json.answer)}`);
        return json.answer;
    }

    async setIamHome(toggle) {
        let url = (appConfig.monoli_home_endpoint) + (appConfig.i_am_home);
        // console.log(`::: URL IAM HOME RESULT ::: ${JSON.stringify(url)}`);

        let result = await fetch(url, { method: 'POST', body: JSON.stringify({ toggle: toggle }), headers: this._headers });
        // console.log(`::: RESULT I AM HOME RESULT ::: ${JSON.stringify(result)}`);

        let json = await result.json();
        // console.log(`::: SET I AM HOME RESULT ::: ${JSON.stringify(json)}`);
        return json.set;        
    }
}