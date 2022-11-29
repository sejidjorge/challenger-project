import styled from 'styled-components';

export const Button = styled.button`
  width: 8rem;
  height: 3rem;
  border-radius: 0.3125rem;
  background-color: ${({ theme }) => theme.colors.buttonActive};
  color: ${({ theme }) => theme.colors.text.dark};
  font-family: 'Nunito';
  font-size: 1rem;
  font-weight: 500;
  border: none;
  outlined: none;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
  &:hover {
    transform: scale(0.97);
    background-color: ${({ theme }) => theme.colors.text.dark};
    color: ${({ theme }) => theme.colors.buttonActive};
    border: 1px solid ${({ theme }) => theme.colors.buttonActive};
  }
`;
