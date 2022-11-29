import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: {
        light: string;
        dark: string;
      };
      buttonActive: string,
      warning: string,
      error: string,
      sucess: string,
    };
  }
}
