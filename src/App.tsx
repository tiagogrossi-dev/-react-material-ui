import {
  Button,
  CssBaseline,
  Typography,
  TypographyProps,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { PaletteOptions } from "@mui/material/styles/createPalette";
import { red } from "@mui/material/colors";
import "./style.css";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    myVariant: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  myVariant: React.CSSProperties;
}

interface ExtendedPaletteOptions extends PaletteOptions {
  customRibRed: React.CSSProperties;
}

const Text = (props: TypographyProps) => {
  return <Typography {...props} />;
};

const theme = createTheme({
  spacing: 16,
  palette: {
    mode: "dark",
    // primary: {
    //   main: "#ccc",
    // },
    // secondary: {
    //   main: orange[500],
    // },
    customRibRed: {
      main: red[400],
      superDark: red[800],
      superLight: red[100],
    },
  } as ExtendedPaletteOptions,
  typography: {
    myVariant: {
      fontSize: "2rem",
      color: "red",
    },
  } as ExtendedTypographyOptions,
});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Text variant="myVariant">This is my app</Text>
        <Typography>Hit the like button</Typography>
        <Button sx={{ p: 1 }} color="primary" variant="contained">
          hello from MUI v5
        </Button>
      </div>
    </ThemeProvider>
  );
}
