import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Head from 'next/head';
import { Provider } from 'react-redux';
import rootReducer from '../slices';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router';
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});
const persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    router.events.on('routeChangeStart', ()=>{
      setProgress(40);
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100);
    })
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Outfit&display=swap" rel="stylesheet" />
      </Head>
      <Provider store={store}>
        <LoadingBar
          color='green'
          shadow={true}
          height={2}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
}
export default MyApp;
