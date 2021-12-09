// const parseBody = async (res, type = 'json') => {  
//     switch (type) {
//       case 'blob': return res.blob();
//       case 'text': return res.text();
//       case 'arraybuffer': return res.arrayBuffer();
//       default: return res;
//     }
//   };
  
  const handleError = async res => {
    if (res.ok) return;  
    const body = res;
    const error = new Error(body.message || body);
    error.statusCode = res.status;
    error.code = body.code;
    throw error;
  };
  
  const parseResponse = async res => {
    if (!res.ok) return handleError(res);
    return {
      message: res.statusText,
      success: res.ok,
      status: res.status,
      headers: res.headers,
      data: res
    };
  };
  
  export default parseResponse;
  