import { useDispatch, useSelector } from "react-redux";
import {
  selectedFilter,
  selectedFollow,
  selectedUsers,
} from "../../redux/selectors";
import { fetchUsers } from "../../redux/operations";
import { useEffect, useState } from "react";
import { Tweet } from "../../components/Tweets/Tweets";
import { Filter } from "../../components/Filter/Filter";
import { List } from "./Tweets.styled";
// import { useLocation } from "react-router-dom";

const LIMIT = 3;
const SKIP = 3;

export const Tweets = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectedUsers);
  const filter = useSelector(selectedFilter);
  const followsArr = useSelector(selectedFollow);

  const [nextPage, setNextPage] = useState(1);
  // const location = useLocation();
  // const backLinkRef = useRef(location.state?.from ?? "/");

  const follows = followsArr.map((el) => el.id);

  useEffect(() => {
    const skip = SKIP * nextPage - LIMIT;
    users.length === 0 && dispatch(fetchUsers(skip, LIMIT));
  }, [dispatch, nextPage, users.length]);
    setNextPage((prev) => prev + 1);
  };

  return (
    <div>
      <Filter />
      <List>
        {filter === "following" &&
          users
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
          users
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
          users.map((user) => (
            <Tweets
              key={user.id}
              id={user.id}
              avatar={user.avatar}
              followers={user.followers}
              tweets={user.tweets}
            />
          ))}
      </List>
      {nextPage <= Math.ceil(users.length / LIMIT) && (
        <button type="button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};
