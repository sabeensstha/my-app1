import GoogleAnalytics from "@/components/GoogleAnalytics";
import { AppProps } from "next/app";

const isProduction = process.env.NODE_ENV === "production";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (<>
    <Component {...pageProps} />
    {
        process.env.NODE_ENV === 'production' &&
          <GoogleAnalytics />
      }
  </>)
};

export default App;