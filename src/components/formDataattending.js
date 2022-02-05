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
          id={"Email"}
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
      Do you think you might attend the welcome party? (See link <Link to="/schedule">here</Link>)
      <ul>
                  <li>
                    <input
                      type="radio"
                      id="weclome_no"
                      name="Welcome"
                      onChange={handleChange}
                      checked={"false"}
                      value = {welcomedinner}
                    />
                    <label htmlFor="guest_no">Yes</label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="welcome_yes"
                      name="Welcome"
                      onChange={handleChange}
                      checked={"true"}
                      value = {welcomedinner}
                    />
                    <label htmlFor="guest_yes">No</label>
                  </li>
                </ul>

      </div>
    </div>
  );
};
