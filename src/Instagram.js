import React, { useState } from "react";
import { BiMessageRoundedDots } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import instaLogo from "./instagram-new-logo.png";
import profileImg from "./profile-img.jpg";
import { HiDotsVertical } from "react-icons/hi";
import uploadedImg from "./uploaded-img.jpg";
import { FiMessageCircle } from "react-icons/fi";
import { LuSend } from "react-icons/lu";
import saved from "./saved-icon.png";
import { instaJsonResp } from "./utils";
import { FaHeart } from "react-icons/fa";
import savedProfile from "./savedimg.jpeg";
import { IoMdSend } from "react-icons/io";
const Instagram = () => {
const [instaAcctDetails, setInstaAcctDetails] = useState(instaJsonResp);
const [enableMsg, setEnableMsg] = useState(false);
const [selectedId, setSelectedId] = useState("");
const [message, setmessage] = useState("");
const handleLikeImg = (selectedId) => {
let copyOfInstaAcctDetails = [...instaAcctDetails];
copyOfInstaAcctDetails.forEach((item) => {
if (item.id == selectedId) {
item.like = item.like + 1;
}
return item;
});
setInstaAcctDetails(copyOfInstaAcctDetails);
};
const handleMessage = (id) => {
setSelectedId(id);
setEnableMsg(true);
};
const updateMessage = (id) => {
let copyOfInstaAcctDetails = [...instaAcctDetails];
copyOfInstaAcctDetails.forEach((item) => {
if (item.id == selectedId) {
let copyOfMessage = item.message;
copyOfMessage.push(message);
item.message = copyOfMessage;
}
return item;
});
setmessage("");
setEnableMsg(false);
setInstaAcctDetails(copyOfInstaAcctDetails);
};
const handleSave = (selectedId) => {
let copyOfInstaAcctDetails = [...instaAcctDetails];
copyOfInstaAcctDetails.forEach((item) => {
if (item.id == selectedId) {
item.saved = !item.saved;
}
return item;
});
setInstaAcctDetails(copyOfInstaAcctDetails);
};
console.log(instaAcctDetails, "instaAcctDetails");
return (
<div className="instagram-block">
<div className="instagram-block-header d-flex justify-content-between align-itemscenter">
<img src={instaLogo} width={"200px"} />
<div>
<FaRegHeart className="insta-icon" />
<BiMessageRoundedDots className="insta-icon" />
</div>
</div>
{instaAcctDetails.map((item, index) => {
return (
<div key={item.id} className="instagram-block-body">
<div className="d-flex justify-content-between align-items-center mx-2 my-4">
<div className="d-flex align-items-center">
<img
src={profileImg}
alt=""
width={"45px"}
height={"45px"}
className="profile-img"
/>
<h2 className="mx-3">{item.name}</h2>
</div>
<HiDotsVertical />
</div>
<div>
<img
src={uploadedImg}
alt=""
width={"100%"}
onDoubleClick={() => handleLikeImg(item.id)}
/>
<div className="d-flex align-items-center justify-content-between">
<div>
{item.like ? (
<FaHeart
className="insta-icon"
style={{ color: "red" }}
onClick={() => handleLikeImg(item.id)}
/>
) : (
<FaRegHeart
className="insta-icon"
onClick={() => handleLikeImg(item.id)}
/>
)}
<FiMessageCircle
className="insta-icon"
onClick={() => handleMessage(item.id)}
/>
<LuSend className="insta-icon" />
<p style={{ margin: "0 10px" }}>{item.like} Likes</p>
</div>
<div>
{item.saved ? (
<img
src={savedProfile}
alt=""
width={"30px"}
height={"25px"}
className="insta-icon"
onClick={() => handleSave(item.id)}
/>
) : (
<img
src={saved}
alt=""
width={"15px"}
className="insta-icon"
onClick={() => handleSave(item.id)}
/>
)}
</div>
</div>
</div>
{item.message.map((val, index) => {
return (
<div key={index}>
<div className=" m-2 d-flex align-items-center ">
<img
src={profileImg}
alt=""
width={"20px"}
height={"20px"}
className="profile-img"
/>
<div style={{margin: '0 5px'}}>
<h6 style={{ margin: "0", fontSize: "10px", color:'#566565' }}>
{item.name}
</h6>
<p style={{margin: "0", fontSize: '13px'}}>{val}</p>
</div>
</div>
</div>
);
})}
{enableMsg && item.id == selectedId && (
<div>
<input
type="text"
className="insta-input-message"
placeholder="Enter Message..."
value={message}
onChange={(e) => setmessage(e.target.value)}
/>
<IoMdSend
className="insta-icon"
onClick={() => updateMessage(item.id)}
/>
</div>
)}
</div>
);
})}
{/* <FiSend /> */}
</div>
);
};
export default Instagram;
