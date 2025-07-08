import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <ToastContainer />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;