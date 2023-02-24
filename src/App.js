import {Routes, Route} from 'react-router-dom';
import {ColorModeContext, useMode} from './context/theme';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {Topbar} from './scenes/global/Topbar';
import {Dashboard} from './scenes/dashboard';
import {Sidebar} from './scenes/global/Sidebar';
import {Team} from './scenes/teams/Teams';
import {Contacts} from './scenes/contacts';
import {Invoices} from './scenes/invoices/Invoice';
import {Form} from './scenes/form';
import {FAQ} from './scenes/faq';
import {Calender} from './scenes/calender';
import Bar from './scenes/bar';

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
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/profile" element={<Form />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
