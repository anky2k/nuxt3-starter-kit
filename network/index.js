import parseResponse from './parse-response';

const options = (methodName, body, headersOpt = {}) => ({
    method: methodName,
    ...body && { body: JSON.stringify(body) },
    headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        ...headersOpt
    }
});

// eslint-disable-next-line max-len
const createFetcher = methodName => async (url, body, headers) => {
  let response = {}
  try {
    response = await $fetch(url, options(methodName, body, headers))
    response.ok = true
  } catch (err) {
    response.ok = false
    response = {...response, ...err}
  }
  return parseResponse(response);
  
};
export const get = createFetcher('get');
export const post = createFetcher('post');
export const put = createFetcher('put');
export const patch = createFetcher('patch');
export const del = createFetcher('delete');
