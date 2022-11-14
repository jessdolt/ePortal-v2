import React from "react";
import meImg from "../../assets/me.png";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import EmojiPicker from "emoji-picker-react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
const MyPost = () => {
  return (
    <>
      <div className="px-4 hidden sm:flex ">
        <div className="mr-3 shrink-0">
          <img src={meImg} className="h-[50px] w-[50px] rounded-full" />
        </div>
        <div className="w-full">
          <div className="pb-10">What's in your mind?</div>
          <div className="flex justify-between items-center">
            <div className="flex justify-around items-center">
              <button className="text-green-500 px-2 py-2 rounded-full active:bg-green-100 duration-100">
                <ImageOutlinedIcon sx={{ color: "inherit" }} />
              </button>
              <button className="text-green-500 px-2 py-2 rounded-full active:bg-green-100 duration-100">
                <SentimentSatisfiedAltIcon sx={{ color: "inherit" }} />
              </button>
              <button className="text-green-500 px-2 py-2 rounded-full active:bg-green-100 duration-100">
                <CalendarMonthIcon sx={{ color: "inherit" }} />
              </button>
            </div>
            <button className="bg-green-500 text-white px-5 py-1 rounded-full">
              Post
            </button>
          </div>
        </div>
      </div>
      <button className="fixed bottom-20 right-5 bg-green-500 p-3.5 rounded-full z-index sm:hidden">
        <CreateOutlinedIcon sx={{ color: "white", fontSize: 30 }} />
      </button>
    </>
  );
};

export default MyPost;
