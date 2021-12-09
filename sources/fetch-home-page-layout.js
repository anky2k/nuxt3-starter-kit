import { get } from '../network'

export async function fetchHomePage (top = 20) {
  const { data, pending, error, refresh  } =  await useLazyAsyncData('fetchHomePageLayout', 
    async () => await get('https://api.foxweather.com/spark/layouts?type=layout&size=1&subtype=homeLayout'), {
    transform: (data) => data,
    default: ({}) => {}
  })    
  return {
    data,
    pending,
    error,
    refresh
  }  
}
