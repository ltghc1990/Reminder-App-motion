import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { AnimatePresence } from "framer-motion";
import { TodoProvider } from "../store/TodoProvider";

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <TodoProvider>
          <Component key={router.route} {...pageProps} />
        </TodoProvider>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
