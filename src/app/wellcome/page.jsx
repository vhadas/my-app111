"use client";
import React from 'react';
import useStore from '@/store/useUserStore';


const Page = () => {
  const {count, inc, dec}= useStore();
  return (
    <div>
      <p>Count: {count}</p> 
      <button onClick={inc}>Inc</button> 
      <button onClick={dec}>Dec</button> 
    </div>
  );
};

export default Page;
