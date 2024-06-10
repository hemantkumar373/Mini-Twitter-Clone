import React from 'react'
import Avatar from "react-avatar";
import { Link } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';

const RightSidebar = ({ otherUsers }) => {

  return (
    <div className='w-[25%]'>
      <div className='flex items-center p-2 bg-gray-100 rounded-full outline-none w-full'>
        <IoSearchOutline size="20px" />
        <input type="text" className='bg-transparent outline-none px-2' placeholder='Search' />
      </div>
      <div className='p-4 bg-gray-100 rounded-2xl my-4'>
        <h1 className='font-bold text-lg'>Who to follow</h1>
        {
          otherUsers?.map((user) => {
            return (
              <div key={user?._id} className='flex items-center justify-between my-3'>
                <div className='flex'>
                  <div>
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&s" size="40" round={true} />
                  </div>
                  <div className='ml-2'>
                    <h1 className='font-bold'>{user?.name}</h1>
                    <p className='text-sm'>{`@${user?.username}`}</p>
                  </div>
                </div>
                <div>
                  <Link to={`/profile/${user?._id}`}>
                    <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                  </Link>
                </div>
              </div>
            )
          })
        }



      </div>
    </div>
  )
}

export default RightSidebar