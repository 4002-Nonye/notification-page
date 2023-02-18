
import mark from "../images/avatar-mark-webber.webp";
import angela from "../images/avatar-angela-gray.webp";

import jacob from "../images/avatar-jacob-thompson.webp";
import anna from "../images/avatar-anna-kim.webp";

import kimberly from "../images/avatar-kimberly-smith.webp";
import nathan from "../images/avatar-nathan-peterson.webp";

import rizky from "../images/avatar-rizky-hasanuddin.webp";
import chess from "../images/image-chess.webp";
const Data = [
    {
      key: 1,
      imgSrc: mark,
      alt: "avatar",
      name: "Mark Webber",
      action: "reacted to your post",
      postName: "My first tournament today!",
      classActive: true,
      time: "1m ago",
      subtext: "",
      chessImgSrc: "",
      club:''
    },
    {
      key: 2,
      imgSrc: angela,
      alt: "avatar",
      name: "Angela Gray",
      action: "followed you",
      postName: "",
      classActive: true,
      time: "5m ago",
      subtext: "",
      chessImgSrc: "",
      club:''
    },
    {
      key: 3,
      imgSrc: jacob,
      alt: "avatar",
      name: "Jacob Thompson",
      action: "has joined your group",
      postName: "",
      classActive: true,
      time: "1 day ago",
      subtext: "",
      chessImgSrc: "",
      club:"Chess Club"
    },
    {
      key: 4,
      imgSrc: rizky,
      alt: "avatar",
      name: "Rizky Hasanuddin",
      action: "sent you a private message",
      postName: "",
      classActive: false,
      time: " 5 days ago",
      subtext: 'Hello, thanks for setting up the Chess Club. I have been a member for a few weeks now and I am already having lots of fun and improving my game.',
    //  'Hello, thanks for setting up the Chess Club. I have been a member for a few weeks now and I am already having lots of fun and improving my game.'
    
      chessImgSrc: "",
      club:''
    },
    {
      key: 5,
      imgSrc: kimberly,
      alt: "avatar",
      name: " Kimberly Smith",
      action: "commented on your picture",
      postName: "",
      classActive: false,
      time: "1 week ago",
      subtext: "",
      chessImgSrc: chess,
      club:''
    },
    {
      key: 6,
      imgSrc: nathan,
      alt: "avatar",
      name: "Nathan Peterson",
      action: "reacted to your recent post",
      postName: "5 end-game strategies to increase your win rate",
      classActive: false,
      time: "2 weeks ago",
      subtext: "",
      chessImgSrc: "",
      club:''
    },
    {
      key: 7,
      imgSrc: anna,
      alt: "avatar",
      name: "Anna Kim",
      action: "left the group",
      postName: "",
      classActive: false,
      time: "2 weeks ago ",
      subtext: "",
      chessImgSrc: "",
      club:"Chess Club"
    },
  ];
export default Data;  