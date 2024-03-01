import { Button, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
import Image from "../Image";
import "./style.css";
import { Field, FormikProvider, useFormik } from "formik";
import { getDatabase, push, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const cover = "/kotlin.jpg";
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      picked: "",
      email: "",
      phone: "",
    },
    onSubmit: (e) => {
      const db = getDatabase();
      set(push(ref(db, "users/")), {
        firstname: e.firstname,
        lastname: e.lastname,
        picked: e.picked,
        email: e.email,
        phone: e.phone,
      }).then(() => {
        setTimeout(() => {
          navigate("/thankyouforregistration");
        }, 1000);
      });
    },
  });

  return (
    <>
      <div className="container">
        <div className="positioncenter">
          <div className="flex">
            <div className="bannerside">
              <div className="banner">
                <Image
                  src="/kotlin.jpg"
                  width="100%"
                  height="100%"
                  alt="heelo"
                />
              </div>
            </div>
            <FormikProvider value={formik}>
              <form className="form" onSubmit={formik.handleSubmit}>
                <div className="inputname">
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    name="firstname"
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                  />
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    name="lastname"
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                  />
                </div>
                <p className="bangla">
                  আমাদের মেহেদী স্যার এর Advanced App ডেভেলপমেন্ট শিখতে যারা
                  আগ্রহী , তারা তোমাদের মতামত জানাও ||
                </p>
                <div>
                  <label className="labelcss">Are you interested?</label>
                  <br />
                  <div className="btnflex">
                    <FormControl>
                      <Field
                        as={RadioGroup}
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Yes"
                        name="picked"
                      >
                        <div>
                          <FormControlLabel
                            value="Yes"
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            value="No"
                            control={<Radio />}
                            label="No"
                          />
                        </div>
                      </Field>
                    </FormControl>
                    {/* <Button variant="contained">Yes</Button>
                  <Button variant="outlined">No</Button> */}
                  </div>
                  <div className="extraname">
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      placeholder="example@gmail.com"
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Phone Number"
                      type="tel"
                      placeholder="01XXXXXXXXX"
                      variant="outlined"
                      name="phone"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />
                  </div>

                  <div className="flexo">
                    <Button variant="contained" type="submit">
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </FormikProvider>
          </div>
        </div>
      </div>
    </>
  );
}
