import { InputProps } from '../../types/inputTypes';
import { Container, InputContainer, InputLabel, InputStyled } from './styles';

const Input = ({ label, value, setValue }: InputProps) => {
  const validate = /^[aA-zZ]/g;

  function handleChange(value: string) {
    setValue(value.replace(validate, ''));
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
          <InputLabel isEmpty={!value} htmlFor={label}>
            {label}
          </InputLabel>
        </InputContainer>
      </Container>
    </>
  );
};

export default Input;
