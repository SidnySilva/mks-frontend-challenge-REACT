import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0f52ba;
  font-family: "montserrat";
  height: 48px;
  width: 100%;
  position: fixed;
  top: 0;

  .header--logo {
    color: #fff;
    display: flex;
    align-items: center;
    height: 30px;
    margin-left: 16px;
    gap: 8px;
    h3 {
      font-weight: 600;
      font-size: 32px;
      line-height: 20px;
      margin: 0 auto;
    }
    span {
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;
      align-self: flex-end;
    }
  }

  @media (min-width: 768px) {
    height: 80px;

    .header--logo > h3 {
      font-size: 40px;
    }
    .header--logo > span {
      font-weight: 300;
      font-size: 20px;
      line-height: 20px;
      align-self: flex-end;
    }
  }

  @media (min-width: 992px) {
    height: 101px;
    width: 100%;
    position: fixed;
    top: 0;
    .header--logo {
      height: 30px;
      margin-left: 36px;
      gap: 8px;

      h3 {
        font-size: 40px;
      }
      span {
        font-weight: 300;
        font-size: 20px;
        line-height: 20px;
        align-self: flex-end;
      }
    }
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  width: 52px;
  height: 26px;
  font-weight: 700;
  font-size: 12px;
  font-family: "montserrat";
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-right: 16px;

  svg {
    width: 12px;
    height: 12px;
  }

  @media (min-width: 768px) {
    width: 90px;
    height: 45px;
    font-size: 18px;
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;
