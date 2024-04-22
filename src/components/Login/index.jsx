import React, { useState } from "react";
import login_background from "../../assets/login-background.png";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import { Button, FormHelperText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { login_schema } from "../../schemas";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUsers } from "../../features/Users/user.action";
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
    resolver: yupResolver(login_schema),
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const loginHandler = (data) => {
    setSubmitting(true);
    dispatch(loginUsers(data)).then((res)=>{
      reset();
      setSubmitting(false);
    }).catch((error)=>{
      setSubmitting(false);
    });
  };
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <form
          onSubmit={handleSubmit(loginHandler)}
          className="grid grid-rows-2 gap-4 md:w-1/2"
        >
          <Typography
            variant="h5"
            style={{ fontWeight: "bold" }}
            className="font-serif"
          >
            Log In
          </Typography>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth sx={{ m: 1 }} error={!!errors.email}>
                <InputLabel htmlFor="outlined-adornment-email" >
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
                  error={!!errors.email}
                />
                <FormHelperText>{errors.email ? errors.email.message : ""}</FormHelperText>
              </FormControl>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth sx={{ m: 1 }}  error={!!errors.password}>
                <InputLabel htmlFor="outlined-adornment-password" error={!!errors.password}>
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
                <FormHelperText>{errors.password ? errors.password.message : ""}</FormHelperText>
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
              Log In
            </Button>
            <Typography
              className="text-center font-serif text-blue-600 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Not a Registered User?
            </Typography>
          </FormControl>
        </form>
      </div>
      <div className="w-2/3 hidden md:block">
        <img
          src={login_background}
          alt="login-img"
          className="h-screen w-full"
        />
      </div>
    </div>
  );
};

export default Index;
