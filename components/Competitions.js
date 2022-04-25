import Image from "next/image";
import { makeStyles } from "@mui/styles";
import StarIcon from "@mui/icons-material/Star";

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
      borderRadius: "10px",
      backgroundColor: "rgba(233,64,87,0.75)",
      marginBottom: "10px",
      display: "flex",
      padding: "10px 20px",
      justifyContent: "space-between",
      alignItems: "center",
    },
    star: {
      color: "white",
    },
    isFavorite: {
      color: "#40E9D2",
    },
    leagueName: {
      fontSize: "20px",
      fontFamily: "Montserrat",
      color: "white",
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  };
});

export default function Competitions() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.players}>
        <div className={classes.activeHeading}>COMPETITIONS</div>
        {data.map((value, index) => {
          return (
            <>
              <div className={classes.card}>
                <Image
                  src={value.image}
                  alt={value.image}
                  width="65"
                  height="65"
                />
                <div className={classes.leagueName}>{value.leagueName}</div>
                <StarIcon
                  className={
                    value.isFavorite ? classes.isFavorite : classes.star
                  }
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

// Dummy DATA to be deleted

const data = [
  {
    image: "/images/t2.svg",
    leagueName: "National Women’s Soccer League",
    isFavorite: true,
  },
  {
    image: "/images/t2.svg",
    leagueName: "National Women’s Soccer League",
    isFavorite: true,
  },
  {
    image: "/images/t2.svg",
    leagueName: "National Women’s Soccer League",
    isFavorite: true,
  },
  {
    image: "/images/t2.svg",
    leagueName: "National Women’s Soccer League",
    isFavorite: true,
  },
  {
    image: "/images/t2.svg",
    leagueName: "National Women’s Soccer League",
    isFavorite: true,
  },
  {
    image: "/images/t2.svg",
    leagueName: "National Women’s Soccer League",
    isFavorite: true,
  },
  {
    image: "/images/t2.svg",
    leagueName: "National Women’s Soccer League",
    isFavorite: true,
  },
  {
    image: "/images/t2.svg",
    leagueName: "National Women’s Soccer League",
    isFavorite: true,
  },
];
