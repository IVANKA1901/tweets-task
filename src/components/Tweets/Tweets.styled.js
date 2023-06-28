import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: calc((100% - 76px) / 3);
  transition: all 250ms;
  width: 380px;
  padding-top: 214px;
  width: 100%;
  padding-bottom: 36px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  &:hover {
    transform: scale(1.1);
  }
`;

export const LogoCont = styled.div`
  position: absolute;
  width: 76px;
  height: 22px;
  top: 20px;
  left: 20px;
`;
export const Background = styled.div`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`;

export const Bar = styled.div`
  position: absolute;
  top: 46%;
  transform: translateY(-46%);
  width: 100%;
`;

export const Ring = styled.div`
  position: absolute;
  top: 46%;
  transform: translateY(-46%);
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;

  position: absolute;
  top: 45.5%;
  transform: translateY(-45.5%);
`;

export const Tweetss = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-top: 26px;
`;

export const Followers = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-top: 16px;
`;

export const FollowBtn = styled.button`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  background-color: #ebd8ff;
  box-shadow: 0px 3.4px 3.4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  width: 196px;
  padding-top: 14px;
  padding-bottom: 14px;
  margin-top: 26px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #5cd3a8;
    border-color: transparent;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  }
`;
