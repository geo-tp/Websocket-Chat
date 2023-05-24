import { ReactNode } from "react"
import { StyledHeader } from "./style"

export const HeaderTitle = (props: {children: ReactNode}) => {
    return (
        <StyledHeader>
            {props.children}
        </StyledHeader>
    )
}