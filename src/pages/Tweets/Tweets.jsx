import { useDispatch, useSelector } from "react-redux";
import {
  selectedFilter,
  selectedFollow,
  selectedUsers,
} from "../../redux/selectors";
import { fetchUsers } from "../../redux/operations";
import { useEffect, useState } from "react";
import { Tweet } from "../../components/Tweet/Tweet";
import { Filter } from "../../components/Filter/Filter";
import { List, LoadBtn } from "./Tweets.styled";

const LIMIT = 3;
const SKIP = 3;

export const Tweets = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectedUsers);
  const filter = useSelector(selectedFilter);
  const followsArr = useSelector(selectedFollow);

  const [visibleUsers, setVisibleUsers] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const follows = followsArr.map((el) => el.id);

  // console.log(follows);

  useEffect(() => {
    const skip = SKIP * nextPage - LIMIT;
    if (users.length === 0) {
      dispatch(fetchUsers(skip, LIMIT));
    } else {
      const startIndex = (nextPage - 1) * LIMIT;
      const endIndex = startIndex + LIMIT;
      const newVisibleUsers = users.slice(startIndex, endIndex);
      setVisibleUsers((prev) => [...prev, ...newVisibleUsers]);
    }
  }, [dispatch, nextPage, users, users.length]);

  const handleLoadMore = () => {
    setNextPage((prev) => prev + 1);
  };

  return (
    <div>
      <Filter />
      <List>
        {filter === "following" &&
          visibleUsers
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
          visibleUsers
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
          visibleUsers.map((user) => (
            <Tweet
              key={user.id}
              id={user.id}
              avatar={user.avatar}
              followers={user.followers}
              tweets={user.tweets}
            />
          ))}
      </List>
      {visibleUsers.length < users.length && (
        <LoadBtn type="button" onClick={handleLoadMore}>
          Load More
        </LoadBtn>
      )}
    </div>
  );
};
