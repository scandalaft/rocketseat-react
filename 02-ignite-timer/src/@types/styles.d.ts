//d.ts significa que só tem codigo de definição do tipo do typescript
//só pode ter interface, nao pode ter export function, javaxcript, etc
import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

//typeof é uma função do ts para mostrar qual é o tipo da variavel
//aqui estamos guardando as propriedades e tipos do defaultTheme em uma variável
type ThemeType = typeof defaultTheme;

//criando tipagem para o modulo styled components
//toda vez que importar o styled-components a definição de tipos é o que colocamos aqui
//aqui estamos exportando novamente o defaultTheme que herda do ThemeType do styled components
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}