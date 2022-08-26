import axiosClient from './axiosClient';

const socialApi = {
    getSocial() {
        const url = 'socialApi.json'
        return axiosClient.get(url)
    }
}
export default socialApi;