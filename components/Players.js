import React from "react";
import { encode } from "base-64";
import Image from "next/image";
// import { useQuery } from "react-query";
import { makeStyles } from "@mui/styles";
import StarIcon from "@mui/icons-material/Star";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const username = "andrea";
const password = "jet)1qF5Y@";

const useStyles = makeStyles(() => {
  return {
    heading: {
      fontSize: "20px",
      fontFamily: "Montserrat",
      color: "white",
      marginBottom: "10px",
    },
    // will be changed once I have figured out the slider issue
    newsFeed: {
      width: "100%",
      height: "85px",
      borderRadius: "10px",
      backgroundColor: "rgba(233,64,87,0.75)",
      marginBottom: "10px",
    },
    news: {
      width: "102px !important",
      height: "85px",
      borderRadius: "10px",
      backgroundColor: "rgba(233,64,87,0.75)",
    },
    ads: {
      width: "100%",
      height: "85px",
      borderRadius: "10px",
      backgroundColor: "rgba(233,64,87,0.75)",
      marginBottom: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "14px",
      fontFamily: "Montserrat",
      color: "white",
    },
    activeHeading: {
      fontSize: "20px",
      fontFamily: "Montserrat",
      color: "#40E9D2",
      marginBottom: "10px",
    },
    playerCard: {
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
    name: {
      fontSize: "18px",
      fontFamily: "Montserrat",
      color: "white",
    },
    info: {
      fontSize: "16px",
      fontFamily: "Montserrat",
      color: "white",
    },
    star: {
      color: "white",
    },
    isFavorite: {
      color: "#40E9D2",
    },
  };
});

export default function Players() {
  const classes = useStyles();

  let auth = new Headers();

  const creds = window.btoa(`${username}:${password}`);

  const basic = "Basic " + creds;

  auth.append("Authorization", basic);

  // for (var pair of myHeaders.entries()) {
  //   console.log(pair[0] + ": " + pair[1]);
  // }
  // const { data: comps } = useQuery("players", () => {
  //   return fetch(
  //     "https://dsg-api.com/clients/andrea/soccer/get_competitions?client=andrea&authkey=64Yhk1qxMaGXHbuZiD3Utdw0nm5cjgNPFOE",
  //     {
  //       headers: new Headers({
  //         Authorization: "Basic " + auth("andrea:jet)1qF5Y@"),
  //       }),
  //     }
  //   );
  // });

  // console.log("data", comps);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://dsg-api.com/clients/andrea/soccer/get_competitions?client=andrea&authkey=64Yhk1qxMaGXHbuZiD3Utdw0nm5cjgNPFOE",
        {
          method: "GET",
          headers: {
            Authorization: "Basic YW5kcmVhOmpldCkxcUY1WUA=",
          },
        }
      ).then((res) => res.json());

      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={classes.players}>
        <div className={classes.heading}>WHAT’S TRENDING</div>
        <div className={classes.newsFeed}>
          {/* will be changed once I have figured out the slider issue */}
          {/* <Slider {...settings}>
            <div className={classes.news}>
              <Image src="/images/t1.svg" alt="t1" width="60" height="47" />
              <div className={classes.heading}>Players</div>
            </div>
            <div className={classes.news}>
              <Image src="/images/t1.svg" alt="t1" width="60" height="47" />
              <div className={classes.heading}>Players</div>
            </div>
            <div className={classes.news}>
              <Image src="/images/t1.svg" alt="t1" width="60" height="47" />
              <div className={classes.heading}>Players</div>
            </div>
          </Slider> */}
        </div>
        <div className={classes.ads}>AD GOES HERE</div>
        <div className={classes.activeHeading}>PLAYERS</div>
        {data.map((value, index) => {
          return (
            <>
              <div className={classes.playerCard}>
                <Image
                  src={value.image}
                  alt={value.image}
                  width="65"
                  height="65"
                />
                <div className="stat">
                  <div className={classes.name}>{value.name}</div>
                  <div className={classes.info}>{value.info}</div>
                </div>
                <Image
                  src={value.leagueImage}
                  alt="t2"
                  width="43"
                  height="43"
                />
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
    image: "/images/t1.svg",
    name: "Mapi Leon",
    info: "Prospect",
    leagueImage: "/images/t2.svg",
    isFavorite: true,
  },
  {
    image: "/images/t1.svg",
    name: "Mapi Leon",
    info: "Prospect",
    leagueImage: "/images/t2.svg",
    isFavorite: false,
  },
  {
    image: "/images/t1.svg",
    name: "Mapi Leon",
    info: "Prospect",
    leagueImage: "/images/t2.svg",
    isFavorite: false,
  },
  {
    image: "/images/t1.svg",
    name: "Mapi Leon",
    info: "Prospect",
    leagueImage: "/images/t2.svg",
    isFavorite: false,
  },
  {
    image: "/images/t1.svg",
    name: "Mapi Leon",
    info: "Prospect",
    leagueImage: "/images/t2.svg",
    isFavorite: false,
  },
  {
    image: "/images/t1.svg",
    name: "Mapi Leon",
    info: "Prospect",
    leagueImage: "/images/t2.svg",
    isFavorite: false,
  },
  {
    image: "/images/t1.svg",
    name: "Mapi Leon",
    info: "Prospect",
    leagueImage: "/images/t2.svg",
    isFavorite: false,
  },
  {
    image: "/images/t1.svg",
    name: "Mapi Leon",
    info: "Prospect",
    leagueImage: "/images/t2.svg",
    isFavorite: false,
  },
  {
    image: "/images/t1.svg",
    name: "Mapi Leon",
    info: "Prospect",
    leagueImage: "/images/t2.svg",
    isFavorite: false,
  },
];
