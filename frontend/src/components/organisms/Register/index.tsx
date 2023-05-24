import { FormEvent, useState } from "react";
import { ButtonAction } from "../../atoms/buttons";
import { Chip, StatusColor } from "../../atoms/texts";
import { HeaderTitle } from "../../atoms/titles";
import { LabelInput } from "../../molecules/LabelInput";
import { StyledRegister, StyledRegisterMessage } from "./style";

export const Register = (props: {
  onSubmit: Function;
  registerMessage: String;
}) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onSubmit(e, inputValue);
  };

  return (
    <StyledRegister onSubmit={(e) => onSubmit(e)}>
      <HeaderTitle>
        <h2>Choose a name</h2>
      </HeaderTitle>
      <LabelInput
        onChange={setInputValue}
        value={inputValue}
        label={"username"}
        icon={"user"}
      />
      <ButtonAction width={""} height={"40px"} alternativeColor={false}>
        <span>Connect</span>
      </ButtonAction>
      {props.registerMessage && (
        <StyledRegisterMessage>
          <Chip
            borderColor={StatusColor.Red}
            bgColor={StatusColor.Transparent}
            fontColor={StatusColor.Red}
          >
            <i className="fa fa-hand"></i>
            {props.registerMessage}
          </Chip>
        </StyledRegisterMessage>
      )}
    </StyledRegister>
  );
};
