import axiosClient from './axiosClient';

const sliderApi = {
    getSlider() {
        const url = 'sliderApi.json'
        return axiosClient.get(url)
    }
}
export default sliderApi;