import Modal from 'react-modal';

import { Hero } from './pages/home/Hero';

import { GlobalStyle } from './styles/global';
Modal.setAppElement('#root');

function App() {
  return (
    <>
      <Hero />

      <GlobalStyle />
    </>
  );
}

export default App;
