import styled, { css } from "styled-components"
const StyledContainer = styled.div`
  background-color:yellow;
  color: black;
  border: 2px solid black;
  text-align: center;
  width: 50%;
  ${props => props.margin ? css `margin: 15px auto;` : " margin: 25px 25px;"}
`

export {StyledContainer}