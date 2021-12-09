import { get } from '../network'

export const fetchPosts = () => get('https://jsonplaceholder.typicode.com/posts')
