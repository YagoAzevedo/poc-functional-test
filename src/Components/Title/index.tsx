import { useTheme } from "../../Contexts/Theme";
import { H1 } from "./styles";

export interface ButtonProps {
    text: string
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const theme = useTheme();
    
    return (<H1 color={theme.color}>
        {props.text}
    </H1>);
}

export default Button;