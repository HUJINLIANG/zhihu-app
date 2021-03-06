import axios from 'axios'

export function getLatestStory() {
	return axios.get('/api/topStory').then(function(data) {
        console.log(data)
		return data.data
	})
}

export function getHistoryStory(date) {
	return axios({
		url: '/api/history/',
		method: 'GET',
		params: {date: date}
	}).then(function(data) {
		return data.data
	})
}

export function getDetail(id) {
	return axios({
		method: 'GET',
		url: '/api/detail/',
		params: {id: id}
	}).then(function(data) {
		return data.data
	})
}

export function getThemesList() {
	return axios({
		method: 'GET',
		url: '/api/themesList'
	}).then(function(data) {
		return data.data
	})
}

export function getTheme(id) {
	return axios({
		method: 'GET',
		url: '/api/theme/',
		params: {id}
	}).then(function(data) {
		return data.data
	})
}
export function getHot(){
    return axios({
        method:'GET',
        url:'/api/hot'
    }).then(function(data){
        return data.data;
    })
}

