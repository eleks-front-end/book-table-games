import store from 'store';

// a request helper which reads the access_token from the redux state and passes it in its HTTP request
export default function apiRequest (url, method = 'GET') {
    const user = store.getState().oidc.user;
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    if (user) {
        headers.append('Authorization', `${user.token_type} ${user.id_token}`);
    }

    const options = {
        method,
        headers
    };

    return fetch(url, options)
        .then(res => res.json())
        .then(data => ({ data }))
        .catch(error => ({ error }));
}
