import styled, {css} from "styled-components";

const Button = styled.button`
  ${props => props.bgcolor ? css `background-color: black;` : "background-color:red;"}
  color:white;
  width: ${props => props.width}

`

export {Button}