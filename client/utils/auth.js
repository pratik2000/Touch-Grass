


import decode from 'jwt-decode';


class Auth {
  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
   }
  
  loggedIn() {
    const token = this.getToken();
    return token ? true : false;
  }
  getToken() {

    return localStorage.getItem('id_token');
  }
  getProfile() {
    return decode(this.getToken());
  }
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }
}

export default new Auth();