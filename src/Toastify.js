import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toasty = () => {
  const notify = () => toast("Everything alert!");

  return (
    <div>
      <button onClick={notify}>Trigger Toast</button>
      <ToastContainer />
    </div>
  );
};

export default Toasty;
