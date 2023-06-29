import { useDispatch, useSelector } from "react-redux";
import {
  selectedFilter,
  selectedFollow,
  selectedUsers,
} from "../../redux/selectors";
import { fetchUsers } from "../../redux/operations";
import { useEffect, useRef, useState } from "react";
import { Tweet } from "../../components/Tweet/Tweet";
import { Filter } from "../../components/Filter/Filter";
import { Back, BackCont, Descr, List, LoadBtn } from "./Tweets.styled";
import { useLocation } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

// const LIMIT = 3;
// const SKIP = 3;

export const Tweets = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectedUsers);
  const filter = useSelector(selectedFilter);
  const followsArr = useSelector(selectedFollow);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/");

  const [nextPage, setNextPage] = useState(3);
  const usersSlice = users.slice(0, nextPage);

  const follows = followsArr.map((el) => el.id);

  // console.log(follows);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleLoadMore = () => {
    setNextPage(nextPage + nextPage);
  };

  return (
    <div>
      {backLink && (
        <Back to={backLink.current}>
          <BackCont>
            <BsArrowLeft style={{ width: "50px", height: "35px" }} />
            <Descr>Go Back</Descr>
          </BackCont>
        </Back>
      )}
      <Filter />
      <List>
        {filter === "following" &&
          usersSlice
            .filter((user) => follows.includes(user.id))
            .map((user) => (
              <Tweet
                key={user.id}
                id={user.id}
                avatar={user.avatar}
                followers={user.followers}
                tweets={user.tweets}
              />
            ))}
        {filter === "follow" &&
          usersSlice
            .filter((user) => !follows.includes(user.id))
            .map((user) => (
              <Tweet
                key={user.id}
                id={user.id}
                avatar={user.avatar}
                followers={user.followers}
                tweets={user.tweets}
              />
            ))}
        {(filter === "all" || filter === "") &&
          usersSlice.map((user) => (
            <Tweet
              key={user.id}
              id={user.id}
              avatar={user.avatar}
              followers={user.followers}
              tweets={user.tweets}
            />
          ))}
      </List>
      {usersSlice.length < users.length && (
        <LoadBtn type="button" onClick={() => handleLoadMore()}>
          Load More
        </LoadBtn>
      )}
    </div>
  );
};
