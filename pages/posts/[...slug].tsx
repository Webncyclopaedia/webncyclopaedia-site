import ContentWrapper from "../../src/components/ContentWrapper";
import axios from "axios";
import { InferGetServerSidePropsType } from "next";

function Post({
  newData,
  name,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <ContentWrapper>
      <>
        <a
          style={{ textDecoration: "underline" }}
          href={`https://github.com/Webncyclopaedia/${name}`}
          target="_blank"
        >
          react best practices info here
        </a>
        <br />
        {newData}
      </>
    </ContentWrapper>
  );
}

// TODO: Убрать any
export async function getServerSideProps({ params }: any) {
  const res = await axios.get(
    `https://raw.githubusercontent.com/Webncyclopaedia/${params.slug[0]}/master/README.md`
  );
  const newData = await res.data;

  return { props: { newData, name: params.slug[0] } };
}

export default Post;
