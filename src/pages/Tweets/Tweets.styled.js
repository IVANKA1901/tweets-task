import { Link } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  row-gap: 35px;
  margin-top: 120px;
  align-items: center;
  justify-content: center;
`;

export const LoadBtn = styled.button`
  border: none;
  background-color: lightskyblue;
  color: black;
  border-radius: 10.3108px;
  box-shadow: rgba(0, 0, 0, 2.25) 0px 3.43693px 3.43693px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.22;
  display: flex;
  margin: 60px auto;
  padding: 25px;
  text-transform: uppercase;
  /* width: 200px; */
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const Back = styled(Link)``;

export const BackCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  padding: 20px 10px;
  width: fit-content;
  border-radius: 15px;
`;

export const Descr = styled.p`
  color: black;
  font-size: 24px;
  font-weight: 600;
`;
