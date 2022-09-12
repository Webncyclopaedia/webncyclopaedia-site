import type { NextPage } from "next";
import Link from "next/link";
import ContentWrapper from "../src/components/ContentWrapper";

const Home: NextPage = () => {
  return (
    <ContentWrapper>
      <h1 className="title">
        <Link href="/posts/react-best-practices">react-best-practices</Link>
      </h1>
    </ContentWrapper>
  );
};

export default Home;
