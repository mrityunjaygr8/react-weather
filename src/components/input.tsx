import React from "react";
import { Input } from "baseui/input";
import { FormControl } from "baseui/form-control";
import {useStyletron} from 'baseui';

function InputElement({ city, handleSubmit, handleChange }: {city: string, handleSubmit: React.FormEventHandler<HTMLFormElement>, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void}) {
  const [css] = useStyletron();
  
  return (
      <form onSubmit={handleSubmit}>
        <div className={css({display: "flex"})}>
        <FormControl label={() => "City Name"} caption={()=> "City to be searched"}>
          <Input clearOnEscape placeholder="Enter the city you want" value={city} onChange={handleChange} />
        </FormControl>
        <input type="submit" value="Search City Weather" />
        </div>
      </form>
  )
}

export default InputElement
