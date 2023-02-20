import {Routes, Route} from 'react-router-dom';
import {ColorModeContext, useMode} from './context/theme';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {Topbar} from './scenes/global/Topbar';
import {Dashboard} from './scenes/dashboard/Dashboard';
import {Sidebar} from './scenes/global/Sidebar';

function App () {
  const [theme, colorMode] = useMode ();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
