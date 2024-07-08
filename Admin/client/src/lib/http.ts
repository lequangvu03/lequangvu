import axios, { AxiosInstance } from 'axios'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      timeout: 5000
    })

    this.instance.interceptors.request.use(
      (config) => {
        // Handle auth here
        return config
      },
      (error) => error
    )

    this.instance.interceptors.response.use(
      (config) => config,
      (error) => {
        // Handle logout here
        return error
      }
    )
  }
}

const http = new Http().instance

export default http
