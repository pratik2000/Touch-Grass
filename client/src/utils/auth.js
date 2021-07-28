


import decode from 'jwt-decode';


class AuthMe {
  logout() {
      localStorage.removeItem('id_token');
      window.location.assign('/');      
  }
  
  loggedIn() {
    const token = this.getToken();
      return (!this.CheckToken(token) && token) ? true : false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  getProfile() {
    return decode(this.getToken());
  }

    login(idToken) {    
    localStorage.setItem('id_token', idToken);
    //window.location.assign('/LetsPlay');
  }

    CheckToken(idToken) {
        const decoded = decode(idToken);
        if ( (60*24*3*(decoded.exp)) < Date.now()) { //3 Days
            localStorage.removeItem('id_token');
            return true;
        }
        return false;
    }

    getIDTokenInfo() {
        return decode(this.getToken());
    }
}

export default new AuthMe();