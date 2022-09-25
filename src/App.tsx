import React, {useState} from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
//  import { useAppDispatch, useAppSelector } from './hooks/useRedux';
// import ICard from './models/ICard';

// --- COMPONENTS ---
import KanbanBoard from './components/KanbanBoard';

// --- THEMES ---
import darkTheme from './styles/themes/dark';
import lightTheme from './styles/themes/light';

const App: React.FC = () => {
  const [theme, setTheme] = useState(lightTheme);
  // const { cards } = useAppSelector((state) => state.cards);
  // console.log('STATE:', cards);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Provide themes context */}
      <div className="App">
        <GlobalStyle /> {/* global styles by createGlobalStyle */}
        <KanbanBoard toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
