import axiosClient from './axiosClient';

const socialApi = {
    getSlider() {
        const url = 'socialApi.json'
        return axiosClient.get(url)
    }
}
export default socialApi;