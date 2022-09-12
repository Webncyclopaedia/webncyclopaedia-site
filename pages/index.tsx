import type { NextPage } from "next";
import Link from "next/link";
import ContentWrapper from "../src/components/ContentWrapper";
import styles from "./index.module.css";
import data from "../server/data";

const Home: NextPage = () => {
  return (
    <ContentWrapper>
      <div className={styles.links}>
        {data.map(({ title, description }, index) => {
          return (
            <a
              href="https://github.com/Webncyclopaedia/react-best-practices"
              key={index}
            >
              <div className={styles.link}>
                <h2>{title}</h2>
                <h4>{description}</h4>
              </div>
            </a>
          );
        })}
      </div>
    </ContentWrapper>
  );
};

export default Home;
