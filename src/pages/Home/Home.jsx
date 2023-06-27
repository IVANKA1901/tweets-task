import { Container, Descr } from "./Home.styled";

export const Home = () => {
  const tweet = require("../../images/img-tweets.png");

  return (
    <Container>
      <Descr>Welcome to your tweet home page!</Descr>
      <img src={tweet} alt="Tweet" width="540" height="360" />
    </Container>
  );
};
