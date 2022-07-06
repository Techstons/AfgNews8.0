import styled from "@emotion/styled";
import { FC, InputHTMLAttributes } from "react";

interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  error?: boolean;
}

const InputForm: FC<IInputForm> = ({
  id,
  error = false,
  placeholder,
  ...rest
}) => {
  return (
    <Wrapper error={error}>
      <Input className="input" placeholder=" " {...rest} />
      <Label className="label" htmlFor={id}>
        {placeholder}
      </Label>
    </Wrapper>
  );
};

export default InputForm;

const Wrapper = styled.div<IInputForm>`
  position: relative;
  border: 1px solid
    ${(props) => (props.error ? `var(--primary-color)` : `black`)};
  border-radius: var(--base-radius);

  // Applies on focus, and if the input has content
  .input:focus + .label,
  .input:not(:placeholder-shown).input:not(:focus) + .label {
    top: -0.5rem;
    font-size: 0.8rem;
    left: 0.4rem;
    z-index: 1;
    background-color: white;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
`;

const Label = styled.label`
  position: absolute;
  z-index: -1;
  color: var(--primary-light);
  left: 0.5rem;
  top: 0.7rem;
  padding: 0 0.25rem;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
`;
