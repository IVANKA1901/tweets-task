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
// import { useLocation } from "react-router-dom";

export const Tweets = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectedUsers);
  const filter = useSelector(selectedFilter);
  const followsArr = useSelector(selectedFollow);

  const PER_PAGE = 3;
  const [nextPage, setNextPage] = useState(PER_PAGE);
  // const location = useLocation();
  // const backLinkRef = useRef(location.state?.from ?? "/");

  const follows = followsArr.map((el) => el.id);
  const handleLoadMore = () => {
    setNextPage(nextPage + PER_PAGE);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <Filter />
      <ul>
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
      </ul>
      {nextPage < users.length && (
        <button type="button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};
