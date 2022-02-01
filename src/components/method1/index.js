import React, { useState } from "react";

const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const dataProfile = {
      name,
      email,
      noHp,
    };
    console.log(dataProfile);
  };
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="noHp">No Hp</label>
        <input
          id="noHp"
          type="text"
          value={noHp}
          onChange={(e) => setNoHp(e.target.value)}
        />
        <button id="btn-save" type="button" onClick={handleSubmitForm}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Index;
