import axios from 'axios'
// this is a bit of update not as detailed as my original
// https://github.com/sataylor7/fluffy-resources <== the original one I wrote 5+ yrs ago in JS
const client = (base: string) => {
  return axios.create({
    baseURL: base,
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const request = (Client: (arg0: any) => Promise<any>, options: any) => {
  // I could setup interceptors to do this cleaner
  return Client(options)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => {
      console.log(
        `Error when making an http request to url: ${options.url}`,
        error,
      )
      return Promise.reject(error)
    })
}

export default client
