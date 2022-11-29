import { useEffect, useState } from 'react';
import { InputProps } from '../../types/inputTypes';
import { Container, InputContainer, InputLabel, InputStyled } from './styles';

const Input = ({ label, value, setValue }: InputProps) => {
  const [inputValue, setInputValue] = useState<number>();

  function handleChange(value: number) {
    if (!isNaN(value)) {
      setInputValue(value);
    }
  }

  useEffect(() => {
    if (inputValue) setValue(inputValue);
  }, [inputValue]);

  return (
    <>
      <Container>
        <InputContainer>
          <InputStyled
            id={label}
            name={label}
            onChange={(e) => handleChange(Number(e.target.value))}
            value={value}
          />
          <InputLabel isEmpty={!value} htmlFor={label}>
            {label}
          </InputLabel>
        </InputContainer>
      </Container>
    </>
  );
};

export default Input;
