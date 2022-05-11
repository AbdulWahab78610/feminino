import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

const useStyles = makeStyles(() => {
  return {
    container: {
      position: "relative",
      width: "100%",
      maxWidth: "450px",
      marginRight: "auto",
      marginLeft: "auto",
      height: "100%",
      backgroundColor: "black",
    },
    mainContent: {
      width: "100%",
      height: "calc(100% - 64px)",
      padding: "0px 12px 65px",
      overflow: "scroll",
      scrollbarWidth: "none" /* IE and Edge */,
      msOverflowStyle: "none" /* Firefox */,
      "&::-webkit-scrollbar": {
        display: "none" /* Hide scrollbar for Chrome, Safari and Opera */,
      },
    },
  };
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

const muiTheme = createTheme({
  breakpoints: {
    values: {
      breakTypes: 411,
    },
  },
});

function MyApp({ Component, pageProps }) {
  const classes = useStyles();

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
      <ThemeProvider theme={muiTheme}>
        <div className={classes.container}>
          <Header />
          <div className={classes.mainContent}>
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
