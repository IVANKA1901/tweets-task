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
} from "./Tweet.styled";

const format = (value) => {
  return value.toLocaleString("en");
};

export const Tweet = ({ avatar, followers, tweets, id }) => {
  const isLoading = useSelector(selectedLoader);
  const selectFollowings = useSelector(selectedFollow);
  const dispatch = useDispatch();
  const isUserFollow = selectFollowings.some((item) => item?.id === id);

  const [isFollowing, setIsFollowing] = useState(isUserFollow);

  const handleClick = (id, followers) => {
    isFollowing && dispatch(deleteFollow());
    !isFollowing && dispatch(addFollow());

    dispatch(
      putUser({ id, followers: isFollowing ? followers - 1 : followers + 1 })
    );

    setIsFollowing(!isFollowing);
  };

  const toggleButtonStyle = {
    backgroundColor: isFollowing ? "#5CD3A8" : "#EBD8FF",
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
      <Avatar src={avatar} alt="avatar" />
      <Tweetss>{format(tweets)} Tweets</Tweetss>
      <Followers>{format(followers)}</Followers>
      <FollowBtn
        type="button"
        onClick={() => handleClick(id, followers)}
        style={toggleButtonStyle}
        disabled={isLoading}
      >
        {isFollowing ? "FOLLOWING" : "FOLLOW"}
      </FollowBtn>
    </Item>
  );
};
