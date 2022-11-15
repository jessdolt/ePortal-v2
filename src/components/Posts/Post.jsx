import React from "react";
import meImg from "../../assets/me.png";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import { Avatar } from "../UI/Avatar";
const Post = () => {
  return (
    <div className="p-4 flex text-[15px] cursor-pointer hover:bg-slate-100 dark:hover:bg-transparent duration-150 border-t dark:border-dark ">
      <div className="mr-3 shrink-0">
        {/* <img src={meImg} alt="" className="h-[50px] w-[50px] rounded-full" /> */}
        <Avatar src={meImg} alt="Jess Profile Pic" />
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <p className="font-bold text-primary-green">Jess Roque</p>
          <p className="text-gray-400">@jessroque</p>
          <p className="text-gray-500">8h</p>
          <button className="ml-auto">
            <MoreHorizOutlinedIcon className="text-gray-400" />
          </button>
        </div>
        <div>
          <p className="">
            Pancit lang dapat 'yan. Pero naging malaman, makahulugan. Naging
            Pancit Canton natin 'yan.
          </p>
        </div>

        <div className="flex justify-around mt-3">
          <div className="flex items-center text-xs gap-2 cursor-pointer active:text-green-400 duration-250">
            <ModeCommentOutlinedIcon sx={{ fontSize: "15px" }} />
            <p>2,094</p>
          </div>
          <div className="flex items-center text-xs gap-2 cursor-pointer active:text-red-400 duration-250">
            <FavoriteBorderOutlinedIcon sx={{ fontSize: "15px" }} />
            <p>432</p>
          </div>
          <div className="flex items-center text-xs gap-2 cursor-pointer">
            <IosShareOutlinedIcon sx={{ fontSize: "15px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
