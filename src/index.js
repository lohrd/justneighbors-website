import * as React from 'react';
import * as ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from '@material-ui/core'
import theme from './components/Layout/Theme'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
    );
  