//faz a importação do styled components
import styled from 'styled-components'; 

//criando um tipo no ts com as opções de cor para o componente
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

//criando interface para o componente button com as opções de cores da buttonVariant
interface ButtonContainerProps {
    variant: ButtonVariant;
}

//passando as cores que cada opçãode variant vai ter no css
//const buttonVariants = {
//    primary: 'purple',
//    secondary: 'orange',
//    danger: 'red',
//    success: 'green'
//};

//exportando o style do button cointainer como se fosse uma função
//ele será acessado no Button.tsx como se fosse um arquivo css
export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    border-radius: 4px;
    border: 0;
    margin: 8px;

    background-color: ${props => props.theme['green-500']};
    color: ${props => props.theme['white']}
`