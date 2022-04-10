import { QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MainPage from 'MainPage';
import { ReactQueryProvider } from 'lib/queryClient';
import './App.css';

const queryClient = new QueryClient();
function App() {
  return (
    <ReactQueryProvider>
      <MainPage />
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryProvider>
  );
}

export default App;
