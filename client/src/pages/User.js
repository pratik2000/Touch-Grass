import React from "react";

function User() {
  return (
    <div className="user">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">User</h1>
            <p>
              Places you've been:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;