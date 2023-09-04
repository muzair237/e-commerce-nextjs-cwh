import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Head from 'next/head';
import { Provider } from 'react-redux';
import rootReducer from '../slices';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

const persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export { store, persistor };
export default MyApp;
