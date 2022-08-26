import axiosClient from './axiosClient';

const tieuChiApi = {
    getTieuChi() {
        const url = 'tieuChiApi.json'
        return axiosClient.get(url)
    }
}
export default tieuChiApi;