import * as appConfig from '../config/app_config.json';

export default class HomeServiceClient {

    async getIamHome() {
        let url = (appConfig.monoli_home_endpoint) + (appConfig.i_am_home);
        let result = await fetch(url, { method: 'GET' });
        let json = await result.json();
        return json.answer;
    }

    async setIamHome(toggle) {
        let url = (appConfig.monoli_home_endpoint) + (appConfig.i_am_home);
        let result = await fetch(url, { method: 'POST', body: JSON.stringify({ toggle: toggle }) });
        let json = await result.json();
        console.log(`::: SET IAM HOME RESULT ::: ${JSON.stringify(json)}`);
        return json.set;        
    }
}