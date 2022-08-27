import { useEffect, useState } from 'react';

import LoadingPage from './routes/LoadingPage';
import MainPage from './routes/MainPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return <div className="App">{isLoading ? <LoadingPage /> : <MainPage />}</div>;
};
export default App;
