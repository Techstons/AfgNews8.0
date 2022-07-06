import styled from "@emotion/styled";
import { FC, InputHTMLAttributes, MouseEvent, KeyboardEvent } from "react";
import { StyledIcon } from "@styled-icons/styled-icon";

interface IInputForm extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  error?: boolean;
  inputEvent?: (e: KeyboardEvent<HTMLInputElement> | MouseEvent) => void;
  icon?: StyledIcon;
}

const InputForm: FC<IInputForm> = ({
  id,
  error = false,
  placeholder,
  inputEvent,
  icon,
  disabled,
  ...rest
}) => {
  const Icon = icon;

  const clickHandler = (e: any) => {
    if (inputEvent) {
      inputEvent(e);
    }
  };

  return (
    <Wrapper error={error}>
      <Input
        className="input"
        placeholder=" "
        onKeyDown={clickHandler}
        disabled={disabled}
        width="100%"
        {...rest}
      />
      <Label className="label" htmlFor={id}>
        {placeholder}
      </Label>
      {!!Icon && (
        <button onClick={clickHandler} disabled={disabled} className="icon">
          <Icon size={24} />
        </button>
      )}
    </Wrapper>
  );
};

export default InputForm;

const Wrapper = styled.div<IInputForm>`
  box-sizing: border-box;
  position: relative;
  border: 1px solid;
  width: 100%;

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

  .icon {
    position: absolute;
    top: 0.6rem;
    right: 0.5rem;
    z-index: 1;
    color: var(--primary-color);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background-color: ${(props) => (props.disabled ? "#e6e6e6" : "transparent")};
  box-sizing: border-box;
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
