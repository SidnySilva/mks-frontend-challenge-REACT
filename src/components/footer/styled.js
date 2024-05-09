import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 5px 0 5px 0;
  font-family: "Montserrat";
  background-color: #eeeeee;
  color: #000;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  position: relative;
  bottom: 0px;

  @media (min-width: 992px) {
    position: absolute;
  }
`;
