import styled from "styled-components";

export const Button = styled.button`
  background-color: #f0575d;
  border: 1px solid #f0575d;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 16px;
  margin-left: auto;
  margin-right: 0px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  width: 48%;
  &:hover {
    background-color: #fff;
    border: 1px solid black;
    color: black;
  }
`;

export const ErrorMessage = styled.div`
  background-color: #ffbaba;
  border-radius: 10px;
  color: #d8000c;
  font-size: 16px;
  margin: 10px 0;
  padding: 10px;
  svg {
    margin-right: 5px;
  }
`;

export const Section = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 1.5rem;
  max-width: 300px;
  padding: 20px;
  margin: auto;
  text-align: left;
  label {
    display: block;
  }
  input {
    border-radius: 10px;
    display: block;
    font-size: 14px;
    height: 30px;
    margin-bottom: 20px;
    padding: 5px;
    width: 100%;
  }
`;
