import styled from "styled-components";

export const Cart = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 90%;
  height: 100%;
  background-color: #0f52ba;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-family: "montserrat";
  font-weight: 700;

  .cart--topContent--container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-top: 24px;
    span {
      font-size: 27px;
      line-height: 32px;
      width: 178px;
    }
    button {
      background-color: #000;
      color: #0f52ba;
      border-radius: 100%;
      width: 46px;
      height: 46px;
      border: none;
      font-size: 32px;
    }
  }

  .cart--total--container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-size: 28px;
  }
  .close--button {
    width: 100%;
    color: #fff;
    background-color: #000;
    font-family: "montserrat";
    font-weight: 700;
    font-size: 20px;
    border: none;
   height: 66px;
  }

  .card--cart--cointainer{
    display: flex;
    flex-direction: column;
    gap: 1rem  ;
    overflow-y: scroll;
    max-height: 60dvh;
  }

  .purchase--button{
    width: 100%;
    color: #fff;
    background-color: #000;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Montserrat';
    height: 66px;
    border: none;
  }
`;
