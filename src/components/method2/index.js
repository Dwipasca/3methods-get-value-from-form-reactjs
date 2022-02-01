import React, { useState } from "react";

const Index = () => {
  const [dataProfile, setDataProfile] = useState({
    name: "",
    email: "",
    hoHp: "",
  });
  const handleChangeForm = (e) => {
    setDataProfile((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(dataProfile);
  };
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={(e) => handleChangeForm(e)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={(e) => handleChangeForm(e)}
        />
        <label htmlFor="noHp">No Hp</label>
        <input
          id="noHp"
          type="text"
          name="noHp"
          onChange={(e) => handleChangeForm(e)}
        />
        <button id="btn-save" type="button" onClick={handleSubmitForm}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Index;
