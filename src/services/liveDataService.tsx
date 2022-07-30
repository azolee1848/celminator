import axios from 'axios';

class liveDataService {

    async getData(url: string) {
        console.log("url",url);
        return await axios.get("https://my-json-server.typicode.com/azolee1848/azoweb/" + url);
    }
}

export default new liveDataService();