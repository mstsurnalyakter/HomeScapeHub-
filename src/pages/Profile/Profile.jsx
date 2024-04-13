import React from 'react'
import PropTypes from 'prop-types'
import useContextData from '../../hooks/useContextData';

const Profile = () => {
  const {user} = useContextData();
  console.log(user);
  return (
    <div className="flex  min-h-[500px] items-center justify-center">
      {user && (
        <div
          className="flex border w-96 flex-col py-16 justify-center mx-auto  shadow-md  text-white rounded-xl sm:px-12
        bg-gradient-to-r from-[#328EFF] via-purple-600 to-pink-300 bg-300%  animate-gradient
        "
        >
          <img
            src={user?.photoURL}
            alt=""
            className="w-32 h-32 border-[4px] mx-auto rounded-full dark:bg-gray-500 aspect-square
            bg-gradient-to-r from-pink-300 via-purple-600 to-[#328EFF] bg-300%  animate-gradient

            "
          />
          <div className="space-y-4 text-center divide-y dark:divide-gray-300">
            <div className="my-2 space-y-3">
              <h2 className="text-xl font-semibold sm:text-2xl">
                {user?.displayName}
              </h2>
              <p className=" text-xs sm:text-base dark:text-gray-600 font-medium">
                {user?.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

}

Profile.propTypes = {}

export default Profile