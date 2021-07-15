import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { AnimatePresence } from "framer-motion";
import { TodoProvider } from "../store/TodoProvider";

function MyApp({ Component, pageProps, router }) {
  return (
    <TodoProvider>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </TodoProvider>
  );
}

export default MyApp;
