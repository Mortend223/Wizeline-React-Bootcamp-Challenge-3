import styled from "styled-components";

const handleColorType = (backColor) => {
  switch (backColor) {
    case "C1":
      return "#eb9d90";
    case "C2":
      return "#439ee2";
    case "C3":
      return "#87dfed";
    default:
      return "#fff";
  }
};

export const BackcolorSection = styled.div`
  display: inline-block;
  svg {
    cursor: pointer;
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.5));
    margin-right: 10px;
  }
`;
export const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  margin-left: auto;
  margin-right: 0px;
  text-align: center;
  text-decoration: none;
  svg {
    color: black;
    margin-left: 10px;
    &:hover {
      color: white;
    }
  }
`;

export const ButtonSection = styled.div`
  display: flex;
`;

export const InputNoteWrapper = styled.div`
  background-color: ${({ backColor }) => handleColorType(backColor)};
  border: ${(props) => (props.isDark ? "#FFF" : "gray")} 1px solid;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 1.5rem;
  justify-content: space-between;
  max-width: 600px;
  padding: 20px;
  margin: 25px auto;
  text-align: left;
  input,
  textarea {
    background-color: transparent;
    border: none;
    color: black;
    display: block;
    font-size: 18px;
    height: 30px;
    margin-bottom: 20px;
    outline: none;
    padding: 5px;
    width: 100%;
  }
  textarea {
    height: 60px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 300px;
  }
`;
