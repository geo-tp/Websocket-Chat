import { Input } from "../../atoms/inputs";
import { Label } from "../../atoms/texts";
import { StyledLabelInput } from "./style";

export const LabelInput = (props: {
  onChange: Function;
  value: string;
  label: string;
  icon: string;
}) => {
  return (
    <StyledLabelInput>
      <Label>
        <i className={`fa fa-${props.icon}`}></i>
        <span>{props.label}</span>
      </Label>
      <Input
        alternativeColor={false}
        onChange={props.onChange}
        value={props.value}
      />
    </StyledLabelInput>
  );
};
