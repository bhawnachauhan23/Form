import React from "react";
import "./styles.css";
import { useFormik } from "formik";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
  FormLabel
} from "@material-ui/core";

const countries = ["USA", "Canada", "UK", "Australia", "India"];

const initialValues = {
  name: "",
  address: "",
  country: "",
  gender: "",
  hobbies: []
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.address) {
    errors.address = "Required";
  }

  if (!values.country) {
    errors.country = "Required";
  }

  if (!values.gender) {
    errors.gender = "Required";
  }

  if (values.hobbies.length === 0) {
    errors.hobbies = "Required";
  }

  return errors;
};

const onSubmit = (values) => {
  console.log(values);
  window.alert("Form submitted");
};

const Form = () => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit
  });

  return (
    <div className="container">
      <form className="form" onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          fullWidth
          margin="normal"
        />

        <TextField
          id="address"
          name="address"
          label="Address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />

        <FormControl
          fullWidth
          margin="normal"
          error={formik.touched.country && Boolean(formik.errors.country)}
        >
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            id="country"
            name="country"
            labelId="country-label"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {countries.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl
          component="fieldset"
          fullWidth
          margin="normal"
          error={formik.touched.gender && Boolean(formik.errors.gender)}
        >
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            id="gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
        </FormControl>

        <FormControl
          component="fieldset"
          fullWidth
          margin="normal"
          error={formik.touched.hobbies && Boolean(formik.errors.hobbies)}
        >
          <FormLabel component="legend">Hobbies/Interests</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="hobbies"
                  value="reading"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              }
              label="Reading"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="hobbies"
                  value="music"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              }
              label="Music"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="hobbies"
                  value="sports"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              }
              label="Sports"
            />
          </FormGroup>
          {formik.touched.hobbies && formik.errors.hobbies && (
            <span style={{ color: "red" }}>{formik.errors.hobbies}</span>
          )}
        </FormControl>

        <Button
          color="primary"
          variant="contained"
          type="submit"
          style={{ marginTop: "16px" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
