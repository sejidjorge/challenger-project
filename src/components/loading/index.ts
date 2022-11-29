import styled, { keyframes } from 'styled-components';

export const spin = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`;

export const LoadingCircle = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 10rem;
  border: 0.5rem solid ${({ theme }) => theme.colors.background};
  border-top: 0.5rem solid ${({ theme }) => theme.colors.text.light};
  animation: ${spin} 2s linear infinite;
`;
