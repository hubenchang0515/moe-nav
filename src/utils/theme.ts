'use client';
import { blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: "#e1637b"
                },
                secondary: blue,
                mode: 'light',
            },
        },
        dark: {
            palette: {
                primary: {
                    main: "#e1637b"
                },
                secondary: blue,
                mode: 'dark',
            },
        }
    },
    cssVariables: {
        colorSchemeSelector: 'class'
    },
    typography: {
        fontFamily: 'Inter, SF Pro, Segoe UI, Roboto, Oxygen, Ubuntu, Helvetica Neue, Helvetica, Arial, sans-serif;',   
    }, 
  });

  export default theme;