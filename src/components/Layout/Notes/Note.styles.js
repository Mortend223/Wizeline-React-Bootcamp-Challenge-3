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
  svg {
    cursor: pointer;
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.5));
    margin-right: 10px;
  }
`;
export const Button = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: auto;
  order: 1;
  text-align: right;
  text-decoration: none;
  svg {
    color: black;
    margin-left: 10px;
    &:hover {
      color: gray;
    }
  }
`;

export const ButtonSection = styled.div`
  display: flex;
`;

export const ConfigSection = styled.div`
  margin-left: auto;
  margin-right: 0px;
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
  height: ${(props) => (props.isInputOpen || props.isList ? "auto" : "80px")};
  justify-content: space-between;
  max-width: ${(props) => (props.isList ? "350px" : "600px")};
  padding: 20px;
  margin: 25px auto 25px ${(props) => (props.isList ? "0px" : "auto")};
  overflow: ${(props) =>
    props.isInputOpen || props.isList ? "auto" : "hidden"};
  text-align: left;
  width: 100%;
  p {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 16px;
  }
  strong {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 18px;
  }
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

export const NoteListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* div {
    margin-right: auto;
    margin-left: 0px;
    max-width: 350px;
    @media only screen and (max-width: 768px) {
      margin-right: auto;
      margin-left: auto;
    }
  } */
`;
