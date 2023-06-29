import { NavLink } from "react-router-dom";
import { HeaderFull, HomeBtn, Navigation, TweetBtn } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderFull>
      <Navigation>
        <NavLink to="/tweets-task">
          <HomeBtn>Home</HomeBtn>
        </NavLink>
        <NavLink to="tweets-task/tweets">
          <TweetBtn>Tweets</TweetBtn>
        </NavLink>
      </Navigation>
    </HeaderFull>
  );
};
