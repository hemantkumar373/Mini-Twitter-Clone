import React, { useEffect } from 'react'
import LeftSidebar from '../Sidebars/LeftSidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import RightSidebar from '../Sidebars/RightSidebar'
import useGetOtherUsers from '../../hooks/useGetOtherUsers';
import { useSelector } from "react-redux";
import useGetMyTweets from '../../hooks/useGetMyTweets';

const Home = () => {
  const { user, otherUsers } = useSelector(store => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  // custom Hook
  useGetOtherUsers(user?._id);
  useGetMyTweets(user?._id);

  return (
    <div className='flex justify-between w-[80%] mx-auto'>
      <LeftSidebar />
      <Outlet />
      <RightSidebar otherUsers={otherUsers} />
    </div>
  )
}

export default Home
