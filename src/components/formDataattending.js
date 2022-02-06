import React from "react";
import { Link } from "gatsby";

export default props => {
  const { handleChange,handleChangenum } = props;
  const { email, phnbr,nattending,welcomedinner } = props.values;
  return (
    <div>
      <div>
        <label htmlFor={"Email"}>Email:</label>
        <input
          type="email"
          name={"Email"}
          onChange={handleChange}
          value={email}
          required
        />
      </div>

      <div>
        <label htmlFor={"Nbr"}>Phone Number:</label>
        <input
          type="tel"
          id={ "Nbr"}
          name={"Nbr"}
          onChange={handleChange}
          value={phnbr}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          title= "Phone number should be formatted like xxx-xxx-xxxx"
          required
        /> Format : xxx-xxx-xxxx
      </div>

      <div>
        <label htmlFor={"nattending"}>How many in your party are attending:</label>
        {/* <input
          type="number"
          list={ "nattending"}
          //id={ "nattending"}
          name={"nattending"}
          onChange={handleChangenum}
          value={nattending}/>
        <datalist id={ "nattending"}>
          <option value={0} />
          <option value={1} />
          <option value={2} />
          <option value={3}/>
          <option value={5}/>
        </datalist> */}
        <select value={nattending} onChange={handleChangenum} name={"nattending"}>
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </select>
        

      </div>

      <div>
      <p>Do you think you might attend the welcome party? (See link <Link to="/schedule">here</Link>)</p>
      <ul>
                  <li>
                    <input
                      type="radio"
                      name="welcomedinner"
                      id="welcomeyes"
                      onChange={handleChange}
                      value = "welcome_yes"
                      defaultChecked={welcomedinner === "welcome_yes"}
                    />
                    <label htmlFor="welcomeyes">Yes</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="welcomedinner"
                      id="welcomeno"
                      onChange={handleChange}
                      value = "welcome_no"
                      defaultChecked={welcomedinner === "welcome_no"}
                    />
                    <label htmlFor="welcomeno">No</label>
                  </li>
                </ul>

      </div>
    </div>
  );
};
