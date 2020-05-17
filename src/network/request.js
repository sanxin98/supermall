import axios from 'axios'

export function request(config) {
	//创建axios实例
		const instance = axios.create({
			baseURL: 'http://152.136.185.210:8000/api/n3',
			timeout: 5000
		})
		
		//使用axios拦截器
		
		//请求拦截
		instance.interceptors.request.use(config => {
			
			return config//不能光拦截还要返回回去,不然内部请求的时候就没有这个config了
		}, err => {
			
		})
		
		//响应拦截,这里拿到的是结果,因为服务器已经响应过了
		instance.interceptors.response.use(res => {
			
			return res.data//这里只需要返回data就可以了,data才是真正的结果
		}, err => {
			
		})
		
		
		//发送真正的网络请求
		return instance(config)
}
