import axiosClient from './axiosClient';

const aboutApi = {
    getAbout() {
        const url = 'aboutApi.json'
        return axiosClient.get(url)
    }
}
export default aboutApi;