import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Link from "next/link";
import ContentWrapper from "../src/components/ContentWrapper";
import styles from "./index.module.css";
import axios from "axios";

interface RepoProps {
  name: string;
  description: string;
  stargazers_count: number;
}

interface Props {
  data: RepoProps[];
}

const Home: NextPage<Props> = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <ContentWrapper>
      <div className={styles.links}>
        {Array.isArray(data) &&
          data
            .filter(({ name }) => name !== "webncyclopaedia-site")
            .map(({ description, name, stargazers_count }, index) => {
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

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const res = await axios.get(
    "https://api.github.com/orgs/webncyclopaedia/repos"
  );
  const data: RepoProps[] = await res.data;

  return { props: { data } };
};

export default Home;
