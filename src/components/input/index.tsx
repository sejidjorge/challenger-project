import { InputProps } from '../../types/inputTypes';
import { Container, InputContainer, InputLabel, InputStyled } from './styles';

const Input = ({ label, value, setValue }: InputProps) => {
  const validate = /[^0-9.,]+/g;

  function handleChange(value: string) {
    setValue(Number(value.replace(validate, '')));
  }

  return (
    <>
      <Container>
        <InputContainer>
          <InputStyled
            id={label}
            name={label}
            required
            onChange={(e) => handleChange(e.target.value)}
            value={value}
          />
          <InputLabel isEmpty={!value && value !== 0} htmlFor={label}>
            {label}
          </InputLabel>
        </InputContainer>
      </Container>
    </>
  );
};

export default Input;
