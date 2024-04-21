import React, { useEffect } from 'react'
import Signup from '../../components/Signup';
import { Snackbar } from '../../components/SnackBar/SnackBar'
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
   <Signup/>
  )
}

export default Index