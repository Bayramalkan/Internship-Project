import Head from "next/head";
import Image from "next/image";
import NavbarLogo from "../components/Logo/NavbarLogo";
import styles from "../styles/Home.module.css";

// MUI Imports
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { style } from "@mui/system";
import Navbar from "../components/navbar/Navbar";
import NavbarBottom from "../components/navbar-bottom/NavbarBottom";
import FirstSection from "../components/first-section/FirstSection";
import Card from "../components/card/Card";
import CardList from "../components/card/CardList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <NavbarBottom />
      <FirstSection />
      <CardList />
      <Card />
    </div>
  );
}
