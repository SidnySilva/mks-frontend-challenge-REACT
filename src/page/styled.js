import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
0% { background-position: 100% 0%; }
100% { background-position: 0% 0%; }
`;

export const Home = styled.main`
  background-color: #f9f9f9;
  height: 100vh;
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
    padding: 0.5rem 0;
    gap: 2rem;
    overflow-y: auto;
    height: 90vh;
  }
  .card--container::-webkit-scrollbar {
    display: none;
  }

  .shimmer {
    width: 218px;
    height: 285px;
    border-radius: 8px;
    box-shadow: 0 0 8px #00000033;

    background: linear-gradient(to right, #eee 30%, #ddd 50%, #eee 70%);
    background-color: #eee;
    background-size: 400% 400%;
    animation: 1s ${shimmer} infinite forwards;
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
    min-height: 100vh;

    .card--container {
      width: 70%;
      height: auto;
      margin-bottom: 2rem;
    }
  }
`;
