import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { useAuth0 } from '@auth0/auth0-react';

const UserProfile = () => {
  const { currentColor } = useStateContext();
  const {user,logout}=useAuth0();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">Kullanıcı Profili</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={user.picture}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> {user.given_name} {user.family_name}</p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> {user.email} </p>
        </div>
      </div>
      <div>
       
      </div>
      <div className="mt-5">
        <Button
          forPress={true}
          color="white"
          bgColor={currentColor}
          text="Çıkış Yap"
          borderRadius="10px"
          width="full"
          onClick={logout}
        />
      </div>
    </div>

  );
};

export default UserProfile;
