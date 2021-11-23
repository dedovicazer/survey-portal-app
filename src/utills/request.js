import { getCurrentUser } from './user';

const parseJSON = (response) => {
  return response.text().then((text) => (text ? JSON.parse(text) : {}));
};

export const request = (url, options) => {
  return fetch(url, options)
    .then(parseJSON)
    .then((data) => ({ data }))
    .catch((error) => {
      return parseJSON(error.response).then((data) => Promise.reject(data));
    });
};

export const fetchNext = (type, url, bodyData) => {
  let user = getCurrentUser();

  const fullUrl = String(process.env.REACT_APP_API_URL) + url;

  let contentType = 'application/json';

  let options = {
    method: type,
    headers: {
      'Content-Type': contentType,
      'AUTH-TOKEN': user ? user.authentication_token : '',
      Accept: 'application/json',
    },
  };

  if (bodyData && type !== 'GET') {
    options = { ...options, body: JSON.stringify(bodyData) };
  }

  if (user) {
    return request(fullUrl, options);
  }
};

export const loginUser = (url, body) => {
  const fullUrl = String(process.env.REACT_APP_API_URL) + url;
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return request(fullUrl, options);
};
