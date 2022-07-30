import {VideosArray} from "../components/Content/Helpers/VideosArray";
import VideosArrayProps from "../Interfaces/VideosArrayProps";

class fakeVideoService {
    protected db: Array<VideosArrayProps>;

    constructor() {
        this.db = VideosArray;
    }

    getVideos() {
        return this.db;
    }
}

export default new fakeVideoService();