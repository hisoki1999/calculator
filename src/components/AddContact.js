import React from "react";

class AddContact extends React.Component {
    render() {
        return (
          <div className="main">
            <h2>Add Contact</h2>
            <form className="form">
              <div className="field space-y-3">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="border"
                />
              </div>
              <div className="field space-y-3">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="border"
                />
              </div>
              <button>Add</button>
            </form>
          </div>
        );
    }
}

export default AddContact;