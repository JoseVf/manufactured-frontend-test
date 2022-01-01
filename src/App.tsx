import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';

import Identification from './components/Identification/Identification';
import Homepage from './components/Homepage/Homepage';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';

import 'rsuite/dist/rsuite.min.css';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
});

const App = () => (
  <div className='root-container center'>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Identification />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </QueryClientProvider>
  </div>
);

export default App;
