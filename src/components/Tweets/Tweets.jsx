import { useDispatch, useSelector } from "react-redux";
import { selectedFollow, selectedLoader } from "../../redux/selectors";
import { useState } from "react";
import logo from "../../images/Logo.png";
import bar from "../../images/bar.png";
import ring from "../../images/ring.png";
import img from "../../images/img-tweets.png";
import { deleteFollow, addFollow } from "../../redux/followersSlice";
import { putUser } from "../../redux/operations";
import {
  Avatar,
  Background,
  Bar,
  FollowBtn,
  Followers,
  Item,
  LogoCont,
  Ring,
  Tweetss,
} from "./Tweets.styled";

export const Tweet = ({
  avatar = null,
  followers = null,
  tweets = null,
  id = null,
}) => {
  const isLoading = useSelector(selectedLoader);
  const selectFollowings = useSelector(selectedFollow);
  const dispatch = useDispatch();
  const isUserFollow = selectFollowings.some((item) => item?.id === id);
  const [isFollowing, setIsFollowing] = useState(isUserFollow);

  const handleButtonClick = (id, followers) => {
    isFollowing && dispatch(deleteFollow());
    !isFollowing && dispatch(addFollow());

    dispatch(
      putUser({ id, followers: isFollowing ? followers - 1 : followers + 1 })
    );

    setIsFollowing(!isFollowing);
  };

  const toggleButtonStyle = {
    backgroundColor: isUserFollow ? "#5CD3A8" : "#EBD8FF",
  };

  return (
    <Item id={id}>
      <LogoCont>
        <img src={logo} alt="logo" />
      </LogoCont>
      <Background>
        <img src={img} alt="dialog background" width="308" height="168" />
      </Background>
      <Bar>
        <img src={bar} alt="backround bar" height="20" width="100%" />
      </Bar>
      <Ring>
        <img src={ring} alt="background ring" width="80" />
      </Ring>
      <Avatar loading="lazy" src={avatar} alt="avatar" />
      <Tweetss> Tweets</Tweetss>
      <Followers> Followers</Followers>
      <FollowBtn
        type="button"
        onClick={() => handleButtonClick(id, followers)}
        style={toggleButtonStyle}
        disabled={isLoading}
      >
        {isFollowing ? "FOLLOWING" : "FOLLOW"}
      </FollowBtn>
    </Item>
  );
};
