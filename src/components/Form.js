import React from "react";
import Button from "./Button";
import FormInput from "./FormInput";

function Form() {
  return (
    <form className="form">
      <div className="form__item">
        <FormInput 
            name="email"
            label="Your Email"
            placeholder="Fill in email"
            type="email"
            required
        />
        </div>
        <div className="form__item">
        <FormInput 
            name="password"
            label="Your Password"
            placeholder="Fill in password"
            type="password"
            required
        />
      </div>
      <div className="form__btn">
          <Button
            text="submit"
            type="submit"
            modifier="dark" 
          />
      </div>
    </form>
  );
}

export default Form;
