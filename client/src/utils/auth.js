import decode from 'jwt-decode';

class AuthC {
  logout() {
      localStorage.removeItem('id_token');
      window.location.assign('/');
      debugger
  }
  
  loggedIn() {
    const token = this.getToken();
      const va1 = !this.checkToken(token) && token;      
    return (va1) ? true : false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  getProfile() {
    return decode(this.getToken());
  }

    checkToken(token) {    
        try {
            const decoded = decode(token);
            //Expires in 3 Days 
            if (((24 * 60 * 3)(decoded.exp)) < Date.now()) {
                localStorage.removeItem('id_token');
                return true;
            }
            return false;
        } catch (e) {
            console.log(e);
        }

        return false;
    }

  login(id_token) {
      localStorage.setItem('id_token', id_token);
      window.location.assign('/letsPlay');
  }

}

export default new AuthC();