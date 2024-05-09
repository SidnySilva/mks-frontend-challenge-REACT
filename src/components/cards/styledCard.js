import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  width: 250px;
  height: 328px;

  font-family: "Montserrat";
  text-align: start;

  color: #2c2c2c;
  background-color: #fff;
  overflow: hidden;

  box-shadow: 0 0 8px #00000033;
  border-radius: 8px;

  img {
    width: 128px;
    height: 159px;
    object-fit: contain;
  }

  .topContent--container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .topContent--container > .topContent--title {
    font-weight: 400;
    font-size: 16px;
    width: 142px;
    line-height: 19px;
  }
  .topContent--container > .topContent--price {
    color: #fff;
    background-color: #373737;
    border-radius: 5px;
    padding: 8px 12px 8px 12px;
    font-weight: 700;
    font-size: 15px;
  }
  .card--description {
    font-weight: 300;
    font-size: 10px;
    width: 221px;
  }
  .card--button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-family: "Montserrat";
    font-weight: 600;
    font-size: 14px;
    color: #fff;
    background-color: #0f52ba;
    width: 100%;
    height: 36px;
    border: none;
  }

  @media (min-width: 768px) {
    width: 218px;
    height: 285px;

    img {
      width: 111px;
      height: 138px;
    }
    .topContent--container > .topContent--title {
    width: 124px;
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
