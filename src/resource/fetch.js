import axios from 'axios';

export const get = async url => {
  const response = await axios({
    method: 'get',
    url
  });

  return response.data;
};

export const post = async (url, body) => {
  const response = await axios({
    method: 'post',
    url,
    data: body
  });

  return response.data;
};
