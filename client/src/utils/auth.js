


import decode from 'jwt-decode';


class AuthC {
  logout() {
      localStorage.removeItem('id_token');
      window.location.assign('/');      
  }
  
  loggedIn() {
    const token = this.getToken();
    return (!this.isTokenExpired(token) && token) ? true : false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  getProfile() {
    return decode(this.getToken());
  }

  login(id_token) {

    localStorage.setItem('id_token', id_token);
    window.location.assign('/letsPlay');

    
  }

}

export default new AuthC();