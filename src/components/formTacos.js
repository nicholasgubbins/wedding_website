import React from "react";

export default props => {
  const { handleChange,people } = props;
  const { taco1, taco2,taco3 } = props.values;
  return (
    <div>
      <fieldset>
              <legend>Dinner options</legend>
      Taco choice (3 per person):
      <div>
      <label for="taco1">Pastor</label>
      <input type="number" id="taco1" name="taco1" min="0" max={(people*3-Number(taco2)-Number(taco3))} onChange={handleChange}
          value={taco1}/> 
      </div>
      <div>
      <label for="taco2">Steak:</label>
      <input type="number" id="taco2" name="taco2" min="0" max={(people*3-Number(taco1)-Number(taco3))} onChange={handleChange}
          value={taco2}/> 
      </div>
      <div>
      <label for="taco3">Veggie:</label>
      <input type="number" id="taco3" name="taco3" min="0" max={(people*3-Number(taco2)-Number(taco1))} onChange={handleChange}
          value={taco3}/> 
      </div>
      <br/><br/>
      There will also be a salsa bar with chips and a selection of desserts as well.
      </fieldset>
      Tacos needed: {people*3}, tacos selected : {Number(taco1) + Number(taco2)+Number(taco3)}
    </div>
  );
};
