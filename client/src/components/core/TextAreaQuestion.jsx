import React, { Fragment } from "react";
import { Field } from "redux-form";
import TextField from "@material-ui/core/TextField";

function renderMultilineTextField({
  meta: { touched, error, warning },
  fullWidth,
  inputClassName,
  warnClassName,
  errorClassName,
  input,
  blur,
  ...custom
}) {
  return (
    <Fragment>
      <TextField
        onBlur={blur}
        fullWidth={fullWidth}
        className={inputClassName ? inputClassName : ""}
        label={input.name}
        multiline
        rows="4"
        {...input}
        {...custom}
      />
      {touched &&
        ((error && <span className={errorClassName}>{error}</span>) ||
          (warning && <span className={warnClassName}>{warning}</span>))}
    </Fragment>
  );
}

export default ({
  fullWidth,
  name,
  label,
  inputClassName,
  warnClassName,
  errorClassName,
  autoFocus,
  ...custom
}) => (
  <Field
    name={name}
    label={label ? label : name}
    fullWidth={fullWidth}
    passedClasses={{
      inputClassName,
      warnClassName,
      errorClassName
    }}
    component={renderMultilineTextField}
    autoFocus={!!autoFocus}
    {...custom}
  />
);
