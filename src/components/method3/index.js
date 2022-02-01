import React from "react";

const index = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const noHp = form.noHp.value;

    const dataProfile = {
      name,
      email,
      noHp,
    };

    console.log(dataProfile);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
        <label htmlFor="noHp">No Hp</label>
        <input id="noHp" type="text" />
        <button id="btn-save" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default index;
