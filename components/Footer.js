import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      padding: "10px",
      width: "100%",
      maxWidth: "450px",
      height: "65px",
      position: "fixed",
      bottom: "0",
      left: "0",
      backgroundColor: "black",
    },
    navigation: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    heading: {
      color: "white",
      fontSize: "14px",
      fontFamily: "Montserrat",
    },
    headingSelected: {
      color: "#40E9D2",
      fontSize: "14px",
      fontFamily: "Montserrat",
    },
  };
});

export default function Footer() {
  const classes = useStyles();
  const { pathname } = useRouter();

  return (
    <>
      <div className={classes.footer}>
        <Link href="/">
          <div className={classes.navigation}>
            <Image
              src="/images/footerIcon1.svg"
              alt="footerIcon1"
              width="12px"
              height="22px"
            ></Image>
            <div
              className={
                pathname === "/" ? classes.headingSelected : classes.heading
              }
            >
              Players
            </div>
          </div>
        </Link>
        <Link href="/scores">
          <div className={classes.navigation}>
            <Image
              src="/images/footerIcon2.svg"
              alt="footerIcon2"
              width="24px"
              height="22px"
            ></Image>
            <div
              className={
                pathname === "/scores"
                  ? classes.headingSelected
                  : classes.heading
              }
            >
              Scores
            </div>
          </div>
        </Link>
        <Link href="/favs">
          <div className={classes.navigation}>
            <Image
              src="/images/footerIcon3.svg"
              alt="footerIcon3"
              width="23px"
              height="20px"
            ></Image>
            <div
              className={
                pathname === "/favs" ? classes.headingSelected : classes.heading
              }
            >
              Favs
            </div>
          </div>
        </Link>
        <Link href="/comps">
          <div className={classes.navigation}>
            <Image
              src="/images/footerIcon4.svg"
              alt="footerIcon4"
              width="25px"
              height="20px"
            ></Image>
            <div
              className={
                pathname === "/comps"
                  ? classes.headingSelected
                  : classes.heading
              }
            >
              Comps
            </div>
          </div>
        </Link>
        <Link href="/news">
          <div className={classes.navigation}>
            <Image
              src="/images/footerIcon5.svg"
              alt="footerIcon5"
              width="25px"
              height="15px"
            ></Image>
            <div
              className={
                pathname === "/news" ? classes.headingSelected : classes.heading
              }
            >
              News
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
