import React, { useState } from "react";
import signup_background from "../../assets/signup-background.png";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Button, FormHelperText, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { signup_schema } from "../../schemas";
import { addUser } from "../../features/Users/user.action";
import { useDispatch } from "react-redux";

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [submitting, setSubmitting] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(signup_schema),
    defaultValues: {
      username: "",
      email: "",
      password: ""
    }
  });

  const signupHandler = async(data) => {
    setSubmitting(true);
     dispatch(addUser(data)).then((res)=>{
      reset();
      navigate("/")
      setSubmitting(false);
     }).catch((error)=>{
      setSubmitting(false);
     });
  };
  return (
    <div className="flex h-screen">
      <div className="w-1/2 hidden md:block" >
        <img
          src={signup_background}
          alt="login-img"
          className="h-screen w-full"
        />
      </div>
      <div className="w-full md:w-2/3 flex items-center justify-center">
        <form
          onSubmit={handleSubmit(signupHandler)}
          className="grid grid-rows-2 gap-4 md:w-1/2"
        >
          <Typography
            variant="h5"
            style={{ fontWeight: "bold" }}
            className="font-serif"
          >
            Sign Up
          </Typography>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth sx={{ m: 1 }} error={!!errors.username}>
                <InputLabel htmlFor="outlined-adornment-username" >
                  Username
                </InputLabel>
                <OutlinedInput
                  {...field}
                  id="outlined-adornment-username"
                  startAdornment={
                    <InputAdornment position="start">
                      <PersonOutlineOutlinedIcon />
                    </InputAdornment>
                  }
                  placeholder="Username"
                  label="Username"
                  size="small"
                />
                <FormHelperText>{errors.username ? errors.username.message : ""}</FormHelperText>
              </FormControl>
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth sx={{ m: 1 }} error={!!errors.email}>
                <InputLabel htmlFor="outlined-adornment-email">
                  Email
                </InputLabel>
                <OutlinedInput
                  {...field}
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  }
                  placeholder="Email"
                  label="Email"
                  size="small"
                />
                 <FormHelperText>{errors.email ? errors.email.message : ""}</FormHelperText>
              </FormControl>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth sx={{ m: 1 }} error={!!errors.password}>
                <InputLabel htmlFor="outlined-adornment-password" >
                  Password
                </InputLabel>
                <OutlinedInput
                  {...field}
                  id="outlined-adornment-password"
                  startAdornment={
                    <InputAdornment position="start">
                      <VpnKeyOutlinedIcon />
                    </InputAdornment>
                  }
                  placeholder="Password"
                  type="password"
                  label="Password"
                  size="small"
                />
                 <FormHelperText >{errors.password ? errors.password.message : ""}</FormHelperText>
              </FormControl>
            )}
          />
          <FormControl fullWidth sx={{ m: 1, gap: 2 }}>
            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              type="submit"
              disabled={submitting}
            >
              Sign Up
            </Button>
            <Typography
              className="text-center font-serif text-blue-600 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Already a Registered User?
            </Typography>
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default Index;
