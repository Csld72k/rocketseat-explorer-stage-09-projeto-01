import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 63.7rem auto;
  grid-template-areas: "form" "bg";
`;

export const Form = styled.form`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: "form";

  background-color: ${({ theme }) => theme.colors.background};

  > h1 {
    font-size: 4.8rem;
    font-weight: bold;

    color: ${({ theme }) => theme.colors.primary_color};
  }

  > p {
    font-size: 1.4rem;
    font-weight: 400;

    color: ${({ theme }) => theme.colors.white_dark};
  }

  > h2 {
    margin: 4.8rem 0;
    
    font-size: 2.4rem;
    font-weight: 500;

    color: ${({ theme }) => theme.colors.white_light};
    
  }
`;

export const Background = styled.div`
  grid-area: "bg";
`;
