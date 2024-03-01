import { Button, TextField } from "@mui/material";
import "./style.css";
import { useFormik } from "formik";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Loginusers } from "../features/Loginslice/LoginSlice";
import { useNavigate } from "react-router-dom";
export default function Adminpanel() {
  const navigate = useNavigate();
  const [showpass, setShowpass] = useState("password");
  const dispatch = useDispatch();
  const handlevisible = () => {
    if (showpass === "password") {
      setShowpass("text");
    } else {
      setShowpass("password");
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then(({ user }) => {
          dispatch(Loginusers(user));
          localStorage.setItem("users", JSON.stringify(user));
          formik.resetForm();
          setTimeout(() => {
            navigate("/info");
          }, 500);
          console.log("signin hoise");

          // ...
        })
        .catch((error) => {
          console.log("signin hoy nai");
          console.log("code", error.code);
          console.log("message", error.message);
        });
    },
  });
  return (
    <>
      <div>
        <div className="wrapper">
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
          <div>
            <span className="dot"></span>
          </div>
        </div>
      </div>
      <form className="formsignin" onSubmit={formik.handleSubmit}>
        <div className="usernamecss">
          <TextField
            placeholder="email"
            name="email"
            variant="outlined"
            label="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <div className="passwordcss">
          <TextField
            placeholder="password"
            variant="outlined"
            label="password"
            name="password"
            type={showpass}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <div className="relative">
            <div className="eyes" onClick={handlevisible}>
              {showpass === "password" ? <IoEye /> : <IoEyeOff />}
            </div>
          </div>
        </div>

        <div>
          <Button variant="contained" type="submit">
            Sign In
          </Button>
        </div>
      </form>
    </>
  );
}
