import styled from "styled-components";

export const CartCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 250px;
  min-height: 220px;

  font-family: "Montserrat";
  text-align: start;

  color: #2c2c2c;
  background-color: #fff;
  overflow: hidden;

  border-radius: 8px;
  position: relative;

  .cart--delete--button {
    color: #000;
    background-color: transparent;
    font-size: 42px;
    font-weight: 400;
    position: absolute;
    right: 8px;
    width: auto;
    font-family: "Montserrat";
    border: none;
  }
  img {
    width: 128px;
    height: 159px;
    object-fit: contain;
  }

  .title {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 8px;
  }
  .qtd--container {
    display: flex;
    gap: 2rem;
    padding-bottom: 16px;
  }

  .qtd--counter {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #bfbfbf;
    border-radius: 4px;
    width: 97px;
    height: 34px;
    font-weight: 400;

    .stick {
      color: #bfbfbf;
      font-weight: 100;
      font-size: 24px;
      margin-bottom: 3px;
    }
    #right {
      margin-right: 8px;
    }
    #left {
      margin-left: 8px;
    }
    .qtd--value {
      margin: 0 8px 0 8px;
    }
  }

  .qtd--counter > .change--qtd--button {
    background-color: transparent;
    color: #000;
    font-size: 24px;
    font-weight: 400;
    height: auto;
    padding: 0;
    border: none;
  }

  .qtd--container > .qtd--price {
    color: #fff;
    background-color: #373737;
    border-radius: 5px;
    padding: 8px 12px 8px 12px;
    font-weight: 700;
    font-size: 15px;
  }

  @media (min-width: 768px) {
    width: 218px;
    height: 285px;

    img {
      width: 171px;
      height: 138px;
    }

    .card--description {
      width: 192px;
      padding-bottom: 8px;
    }
    .card--button {
      height: 32px;
    }
  }
`;
