import styled from 'styled-components';

interface LabelProps {
  isEmpty: boolean;
}

export const Container = styled.div`
  height: fit-content;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputLabel = styled.label<LabelProps>`
  position: absolute;
  top: ${({ isEmpty }) => (isEmpty ? '0px' : '-12px')};
  left: 0px;
  font-size: ${({ isEmpty }) => (isEmpty ? '1rem' : '0.75rem')};
  color: ${({ theme }) => theme.colors.text.light};
  pointer-events: none;
  transition: all 0.5s ease-in-out;
`;

export const InputStyled = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.light};
  background: transparent;
  width: 100%;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    appearance: none;
  }

  min-width: 18rem;
  padding: 8px 0 5px 0;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.light};
  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.text.light};
    ~ ${InputLabel} {
      top: -12px;
      color: ${({ theme }) => theme.colors.text.light};
      font-size: 0.75rem;
    }
  }
`;
