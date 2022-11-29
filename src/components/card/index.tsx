import styled from 'styled-components';

export const CardBody = styled.div`
  width: 20rem;
  height: 16rem;
  padding: 1rem;
  background-color: #161b22;
  border-radius: 0.3125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
`;
export const CardBodyResult = styled(CardBody)`
  justify-content: center;
  margin: 1rem 0;
`;

export const CardLoad = styled.div`
  width: 20rem;
  height: 16rem;
  padding: 1rem;
  background-color: #161b22;
  border-radius: 0.3125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
`;
