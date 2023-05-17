import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaut";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Transactions/>
    </ThemeProvider>
  )
}

