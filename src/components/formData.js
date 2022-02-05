import React from "react";

export default props => {
  const { handleChange } = props;
  const { name } = props.values;
  return (
    <div>
      <div>
        <label htmlFor={"Name"}>Name:</label>
        <input
          type="text"
          id={"Name"}
          name={"Name"}
          onChange={handleChange}
          value={name}
          required
        />
      </div>
      {/* <div>
      <label htmlFor={"Attending"}>Is anyone from your party attending?:</label>
      <select
          id={"Attending"}
          name={"Attending"}
          onChange={handleChange}
          value={attending}
          required
        >
          <option value="no">
            No
          </option>
          <option value="yes">
            Yes
          </option>

        </select>
      </div> */}
    </div>
  );
};
