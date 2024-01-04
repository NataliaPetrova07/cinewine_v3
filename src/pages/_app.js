import { ThemeProvider } from "../contexts/ThemeProvider";
import "@/styles/globals.css";
import Layout from "@/components/Layout";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
