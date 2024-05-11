import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
	transform: scale(1);
  }

  50% {
	transform: scale(1.1);
  }

  100% {
	transform: scale(1);
  }
`;

export const Cart = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 318px;
  height: 100%;
  background-color: #0f52ba;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-family: "montserrat";
  font-weight: 700;
  z-index: 2;
  transition: 0.5s;

  .cart--topContent--container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-top: 24px;
    span {
      font-size: 27px;
      line-height: 32px;
      width: 166px;
    }
    .close--button {
      background-color: #000;
      color: #0f52ba;
      border-radius: 100%;
      width: 46px;
      height: 46px;
      border: none;
      font-family: "montserrat";
      font-weight: 400;
      font-size: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .empty--cart {
    
    margin-top: 150px;
    animation: 2s ${pulse} infinite forwards;
  }
  .cart--total--container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-size: 28px;
  }

  .card--cart--cointainer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
    min-height: 60dvh;
    max-height: 60dvh;
    padding: 8px;
  }

  .card--cart--cointainer::-webkit-scrollbar {
    width: 2px;
  }

  .card--cart--cointainer::-webkit-scrollbar-track {
    background: transparent;
  }

  .card--cart--cointainer::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 20px;
    border: none;
  }
  .purchase--button {
    width: 100%;
    color: #fff;
    background-color: #000;
    font-size: 20px;
    font-weight: 700;
    font-family: "Montserrat";
    height: 66px;
    border: none;
  }

  @media (min-width: 768px) {
    width: 60%;

    .card--cart--cointainer {
      min-height: 70dvh;
      max-height: 70dvh;
    }
    .cart--total--container {
      font-size: 32px;
    }

    .purchase--button {
      font-size: 24px;
      height: 80px;
    }
  }

  @media (min-width: 992px) {
    width: 486px;
  }
`;
