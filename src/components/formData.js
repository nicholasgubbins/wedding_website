import React from "react";

export default props => {
  const { handleChange, id } = props;
  const { name, email, phnbr,main } = props.values;
  return (
    <div>
      <div>
        <label htmlFor={id + "Name"}>Name:</label>
        <input
          type="text"
          id={id + "Name"}
          name={id + "Name"}
          onChange={handleChange}
          value={name}
          required
        />
      </div>
      <div>
        <label htmlFor={id + "Email"}>Email:</label>
        <input
          type="email"
          id={id + "Email"}
          name={id + "Email"}
          onChange={handleChange}
          value={email}
          required
        />
      </div>

      <div>
        <label htmlFor={id + "Email"}>Phone Number:</label>
        <input
          type="text"
          id={id + "PhNbr"}
          name={id + "PhNbr"}
          onChange={handleChange}
          value={phnbr}
          required
        />
      </div>


      <div>
        <label htmlFor={id + "Main"}>
          What terribly delicious dish would you like for your{" "}
          main?
        </label>
        <select
          id={id + "Main"}
          name={id + "Main"}
          onChange={handleChange}
          value={main}
          required
        >
          <option value="chicken">
            Herb Roasted All Natural Chicken Breast with Corn Whipped Potatoes,
            Confit Leg, Asparagus, Exotic Mushrooms Madeira Sauce (GF)
          </option>
          <option value="steak">
            Black Angus Sirloin &amp; Grilled Loch Duart Salmon with Lemon-Olive
            Oil Crushed Yukon Potatoes, Native Spinach Charred Tomato Coulis
            &amp; Balsamic Reduction (GF)
          </option>
          <option value="ravioli">
            Wild Mushroom Ravioli with Exotic Mushrooms, Native Corn, Asparagus
            and Light Truffle Cream Sauce (V)
          </option>
        </select>
      </div>
      <div>


      </div>
    </div>
  );
};
