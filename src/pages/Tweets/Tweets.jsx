import { useDispatch, useSelector } from "react-redux";
import {
  selectedFilter,
  selectedFollow,
  selectedUsers,
} from "../../redux/selectors";
import { fetchUsers } from "../../redux/operations";
import { useEffect } from "react";
import { Tweet } from "../../components/Tweets/Tweets";
import { Filter } from "../../components/Filter/Filter";

export const Tweets = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectedUsers);
  const filter = useSelector(selectedFilter);
  const followsArr = useSelector(selectedFollow);

  const follows = followsArr.map((el) => el.id);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <Filter />
      <ul>
        {filter === "followings" &&
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
    </div>
  );
};
