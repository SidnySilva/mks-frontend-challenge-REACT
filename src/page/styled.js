import styled from "styled-components";

export const Home = styled.main`
  background-color: #f9f9f9;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;



  .card--container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 4rem 0 1rem 0;
    gap: 2rem;
    overflow-y: scroll;
    height: 90vh;
   
  }

  @media (min-width: 768px) {
    .card--container {
      margin: 8rem 0 1rem 0;
    }
  }
  @media (min-width: 992px) {
    justify-content: center;
  }
  @media (min-width: 1200px) {
    .card--container {
      width: 70%;
      height: auto;
      margin-bottom: 2rem;
    }
  }
`;
