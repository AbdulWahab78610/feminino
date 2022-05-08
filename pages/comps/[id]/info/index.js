import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { makeStyles } from "@mui/styles";
import StarIcon from "@mui/icons-material/Star";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { competitionsData } from "../../../../DummyData/competitions";

const useStyles = makeStyles(() => {
  return {
    activeHeading: {
      fontSize: "20px",
      fontFamily: "Montserrat",
      color: "#40E9D2",
      marginBottom: "10px",
    },
    card: {
      width: "100%",
      height: "85px",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    star: {
      color: "white",
    },
    isFavorite: {
      color: "#40E9D2",
    },
    name: {
      fontSize: "20px",
      fontFamily: "Montserrat",
      color: "white",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    breadcrumbsMain: {
      color: "#40E9D2",
      fontSize: "18px",
      fontFamily: "Montserrat",
    },
    breadcrumbs: {
      color: "white",
      fontSize: "16px",
      fontFamily: "Montserrat",
    },
    allTypes: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
    },
    type: {
      margin: "10px 0px",
      color: "rgba(64, 233, 210, 0.5)",
      fontSize: "16px",
      fontFamily: "Montserrat",
      paddingRight: "10px",
    },
    chevron: {
      color: "white",
    },
    standingsCard: {
      width: "100%",
      borderRadius: "10px",
      backgroundColor: "rgba(233,64,87,0.75)",
      padding: "10px 5px",
    },
    compCard: {
      width: "100%",
      minHeight: "64px",
      borderRadius: "10px",
      backgroundColor: "rgba(233,64,87,0.75)",
      marginBottom: "10px",
      display: "flex",
      padding: "50px 30px",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "16px",
      fontFamily: "Montserrat",
      color: "white",
    },
    isFavorite: {
      color: "#40E9D2",
    },
    teamName: {
      fontSize: "15px",
      fontFamily: "Montserrat",
      color: "white",
      paddingLeft: "15px",
      paddingRight: "15px",
    },
  };
});

export default function Competitions() {
  const classes = useStyles();
  const {
    query: { id: competitionID },
  } = useRouter();

  const competitionType = "Info";

  const { data: allCompData } = useQuery("competitions", () => {
    return competitionsData;
  });

  const compData =
    allCompData?.find((value) => value.competition_id === competitionID) || {};

  const initials = compData.name?.match(/\b\w/g).join("").toUpperCase();

  return (
    <>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={
          <ChevronRightIcon
            classes={{ root: classes.chevron }}
          ></ChevronRightIcon>
        }
        maxItems={3}
      >
        <Link href="/comps">
          <span className={classes.breadcrumbsMain}>COMPS</span>
        </Link>
        <span className={classes.breadcrumbs}>{initials}</span>
        <span className={classes.breadcrumbs}>{competitionType}</span>
      </Breadcrumbs>
      <div className={classes.card}>
        <Image src="/images/t2.svg" alt="comp logo" width="65" height="55" />
        <div className={classes.name}>{compData.name}</div>
        <StarIcon
          className={compData.isFavorite ? classes.isFavorite : classes.star}
        />
      </div>
      <div className={classes.allTypes}>
        {types.map((value) => {
          const link =
            `/comps/${competitionID}/${value?.toLowerCase()}`.replace(" ", "-");

          return (
            <Link href={link}>
              <div
                style={
                  competitionType?.toUpperCase() === value?.toUpperCase()
                    ? { color: "#40E9D2" }
                    : {}
                }
                className={classes.type}
              >
                {value}
              </div>
            </Link>
          );
        })}
      </div>
      <div className={classes.compCard}>
        This would be basic information about the league.<br></br>
        <br></br> When it started, commissioner information etc.<br></br>
        <br></br> This would be input by AB - won’t be sourced by data.<br></br>
      </div>
      ;
    </>
  );
}

const types = [
  "Standings",
  "Teams",
  "Matches",
  "Top Goals",
  "Top Assists",
  "Top Defenders",
  "Market Values",
  "Rumours",
  "Info",
];
