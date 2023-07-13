import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Games.module.css";
import { Inter } from "next/font/google";
import jugglemaster from "../assets/img/JuggleMaster.png";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

type GameEntry = {
  name: string;
  image: any;
  link: string;
  platforms: ("apple" | "android" | "MacOS" | "web")[];
};
const games: GameEntry[] = [
  {
    name: "JuggleMaster",
    image: jugglemaster,
    link: "play/jugglemaster",
    platforms: ["android", "web"],
  },
];

export default function Games() {
  return (
    <>
      <Head>
        <title>Games</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {games.map(({ name, image, link }) => (
          <Link href={link} key={name}>
            <div className={styles.card}>
              <div className={styles.game}>
                <Image src={image} fill={true} alt={name} />
              </div>
              <span className={`${inter.className} ${styles.game_title}`}>
                {name}
              </span>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
}
