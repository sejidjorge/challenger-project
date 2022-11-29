import styled from 'styled-components';

export const ContainerContent = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 1rem, 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerCards = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column
`;
