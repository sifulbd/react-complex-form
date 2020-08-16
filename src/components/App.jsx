import React, { useState } from "react";

function App() {
  const [fname, setFname] = useState(" ");
  const [lname, setLname] = useState(" ");
  const [fullName, setFullname] = useState(" ");

  function formSubmit(event) {
    setFullname(fname + lname);
    event.preventDefault();
  }

  function fOnchang(event) {
    setFname(event.target.value);
  }
  function lOnchang(event) {
    setLname(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {fname}
        {lname}
        {fullName}
      </h1>
      <form onSubmit={formSubmit}>
        <input
          onChange={fOnchang}
          value={fname}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={lOnchang}
          value={lname}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
