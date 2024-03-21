import React, { useContext ,useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import useAuthCheck from "./../../hooks/useAuthCheck.jsx";
import { useMutation } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "./../../context/UserDetailContext";
import {updateFavourites} from "../../utils/common.js"
import { toFav } from '../../utils/api.js';
import { checkFavourites } from './../../utils/common.js';

const Heart = ({ id }) => {
  const [heartColor, setHeartColor] = useState("white");
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();
  const {
    userDetails: { favourites, token },
    setUserDetails,
  } = useContext(UserDetailContext);

  useEffect(()=>{
    setHeartColor(()=>checkFavourites(id ,favourites))
  },[favourites])

  const { mutate } = useMutation({
    mutationFn: () => toFav(id, user?.email, token),
    onSuccess:()=>{setUserDetails((prev)=>(
        {
            ...prev,
            favourites: updateFavourites(id ,prev.favourites)
        }
    ))
    }
  });
  const handleLike = () => {
    if (validateLogin()) {
      mutate();
      setHeartColor((prev) => (prev === "red" ? "white" : "red"));
    }
  };
  return (
    <AiFillHeart
      size={24}
      color={heartColor}
      onClick={(e) => {
        e.stopPropagation();
        handleLike();
      }}
    />
  );
};

export default Heart;
