import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 124.6rem;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

export const HeaderApp = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  h1 {
    font-size: 3.2rem;
  }

  span {
    font-size: 1.6rem;
    opacity: 0.6;
  }
`;

export const ContentCharacters = styled.div`
  & > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.6rem;
  }
  button {
    display: block;
    line-height: 6.5rem;
    background-color: #5b1fa6;
    width: 30rem;
    margin: 0 auto;
    cursor: pointer;
    border: none;
    font-size: 1.8rem;
    margin-top: 4.8rem;
    transition: all 0.3s ease;
    &:hover {
      background-color: #4d1a8d;
      opacity: 0.8;
    }
  }
`;
