import { ButtonContainer, ButtonVariant } from "./Button.styles";

//criando uma interface para o componente que acessa a variant (opcional) 
//do nosso ButtonVariant importado
interface ButtonProps {
    variant ?: ButtonVariant;
}

export function Button({variant = 'primary'}: ButtonProps) {
    return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}