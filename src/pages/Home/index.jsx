import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from '../../components/AppBar'
import { Snackbar } from '../../components/SnackBar/SnackBar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMessage } from '../../features/Users/user.slice';
const Index = () => {
  const showSnackbar = Snackbar();
  const dispatch = useDispatch();
  const { message, type } = useSelector((state) => state.user);

  useEffect(() => {
    if (message !== "") {
      showSnackbar(message, type);
      setTimeout(() => {
        dispatch(deleteMessage());
      }, 1000);
    }
  }, [message]);
  return (
    <>
    <AppBar/>
    <Outlet/>
    </>
  )
}

export default Index