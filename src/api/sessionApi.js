class SessionApi {
  static login(credentials) {
    console.log('Credentials:', credentials);
    const request = new Request(`https://reqres.in/api/login`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({
        username : credentials.uid,
        password: credentials.password
      })
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  } 
}

export default SessionApi;