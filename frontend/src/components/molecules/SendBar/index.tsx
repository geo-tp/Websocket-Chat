import { FormEvent, useState } from "react";
import { ButtonAction } from "../../atoms/buttons";
import { Input } from "../../atoms/inputs";
import { StyledSendBar } from "./style";

export const SendBar = (props: {
  onSubmit: Function;
  defaultValue?: string;
}) => {
  const [inputValue, setInputValue] = useState(
    props.defaultValue ? props.defaultValue : ""
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (inputValue === "") {
      return;
    }

    props.onSubmit(e, inputValue);
    setInputValue("");
  };

  return (
    <StyledSendBar onSubmit={(e) => onSubmit(e)}>
      <Input
        alternativeColor={false}
        onChange={setInputValue}
        value={inputValue}
      />
      <ButtonAction alternativeColor={false} width="24px" height="24px">
        <i className="fa fa-paper-plane"></i>
      </ButtonAction>
    </StyledSendBar>
  );
};
