import axiosClient from './axiosClient';

const serviceApi = {
    getService() {
        const url = 'serviceApi.json'
        return axiosClient.get(url)
    },
    getServiceById(id){
        // const url = '/products/' + id
        const url = '/serviceApi.json'
        // const url = `/serviceApi.json/${id}`
        return axiosClient.get(url)
    },
}
export default serviceApi;