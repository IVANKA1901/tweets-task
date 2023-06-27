import styled from "styled-components";

export const HeaderFull = styled.header`
  padding: 30px;
  height: 100px;
  background-color: #74ebd5;
  background-image: linear-gradient(44deg, #74ebd5 24%, #9face6 100%);
  margin-bottom: 20px;
  padding: 30px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
`;

export const HomeBtn = styled.button`
  display: block;
  padding: 10px 20px;
  background-color: aliceblue;
  border: 4px solid transparent;
  border-radius: 8px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: rgb(175 109 244);
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease 0s;

  &:hover,
  &:focus {
    scale: 1.1;
    box-shadow: #9599e2 -2.5777px 6.87386px 20.6216px;
  }
`;

export const TweetBtn = styled.button`
  display: block;
  padding: 10px 20px;
  background-color: aliceblue;
  border: 4px solid transparent;
  border-radius: 8px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: rgb(175 109 244);
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease 0s;

  &:hover,
  &:focus {
    scale: 1.1;
    box-shadow: #9599e2 -2.5777px 6.87386px 20.6216px;
  }
`;
