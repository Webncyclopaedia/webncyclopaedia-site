import type { InferGetServerSidePropsType, NextPage } from "next";
import Link from "next/link";
import ContentWrapper from "../src/components/ContentWrapper";
import styles from "./index.module.css";
import axios from "axios";

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <ContentWrapper>
      <div className={styles.links}>
        {Array.isArray(data) &&
          data.map(({ description, name, stargazers_count }, index) => {
            return (
              <Link href={`/posts/${name}`} key={index}>
                <div className={styles.link}>
                  <h2>{name}</h2>
                  <h4>{description}</h4>
                  <h5>{stargazers_count} ★</h5>
                </div>
              </Link>
            );
          })}
      </div>
    </ContentWrapper>
  );
};

export async function getServerSideProps() {
  const res = await axios.get(
    "https://api.github.com/orgs/webncyclopaedia/repos"
  );
  const data = await res.data;

  return { props: { data } };
}

export default Home;
