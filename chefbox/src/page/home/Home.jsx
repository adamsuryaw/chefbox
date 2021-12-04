import React from "react";
import styles from "./Home.module.scss";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import ContainerPNG from "../../components/assets/TopContainer.png";
import LeftIMGMidSection from "../../components/assets/img3.png";
import MidIMGMidSection from "../../components/assets/img4.png";
import RightIMGMidSection from "../../components/assets/img5.png";
import TopImage1 from "../../components/assets/img1.png";
import TopImage2 from "../../components/assets/img2.png";
import Wired from "../../components/assets/wired.png";
import TechCrunch from "../../components/assets/techcrunch.png";
import TheTelegraph from "../../components/assets/thetelegraph.png";
import TheSun from "../../components/assets/thesun.png";
import DailyExpress from "../../components/assets/dailyexpress.png";
import TIA from "../../components/assets/TIA.png";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Link } from "react-router-dom";
import "swiper/swiper.scss"; // core Swiper

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.topSections}>
        <div>
          <h1>Crafted Recipe, Fresh Ingredients</h1>
          <p>We deliver what you need to cook!</p>
        </div>
        <div className={styles.Containertext}>
          <Stack
            spacing={2}
            sx={{
              width: 400,
              background: "#828282",
              // height: 50,
              borderRadius: "10px",
              background: "white",
              position: "absolute",
              top: "25rem",
              left: "3.5rem",
            }}>
            <Autocomplete
              freeSolo
              id='free-solo-2-demo'
              disableClearable
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Any idea for lunch? Try “Soto ayam”'
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </Stack>
        </div>
        <div className={styles.ContainerPNGS}>
          {/* <div className={styles.ContainerTopImages}></div> */}
          <img src={ContainerPNG} alt='' />
          <Swiper
            className={styles.Swiper}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide className={styles.SwiperSlide}>
              <img className={styles.topImage1} src={TopImage1} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img className={styles.topImage1} src={TopImage2} alt='' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={styles.midSections}>
        <div className={styles.ImageContainer}>
          <div className={styles.ContainerIMG}>
            <div className={styles.LeftImage}>
              <img className={styles.Image1} src={LeftIMGMidSection} alt='' />
            </div>
            <div className={styles.MidImage}>
              <img className={styles.Image2} src={MidIMGMidSection} alt='' />
            </div>
            <div className={styles.RightImage}>
              <img className={styles.Image3} src={RightIMGMidSection} alt='' />
            </div>
          </div>

          {/* <div className={styles.ContainerIMG}>
          </div>
          <div className={styles.ContainerIMG}>
          </div> */}
        </div>
        <div className={styles.Containertext2}>
          <h1>Click</h1>
          <Link to='/dashboard'>
            <a href=''>here</a>
          </Link>

          <h1>to start searching for recipes</h1>
        </div>
      </div>
      <div className={styles.botSections}>
        <h1>Featured in</h1>
        <div className={styles.Featured}>
          <img src={Wired} alt='' />
          <img src={TechCrunch} alt='' />
          <img src={TheTelegraph} alt='' />
          <img src={TheSun} alt='' />
          <img src={DailyExpress} alt='' />
          <img src={TIA} alt='' />
        </div>
      </div>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
