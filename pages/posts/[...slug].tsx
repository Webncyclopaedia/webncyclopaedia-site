import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import Loader from "../../src/components/Loader";
import axios from "axios";
import * as showdown from "showdown";
import ContentWrapper from "../../src/components/ContentWrapper";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";

interface Params extends ParsedUrlQuery {
  slug: string[];
}

interface Props {
  data: string;
  name?: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
  params,
}) => {
  const res = await axios.get(
    `https://raw.githubusercontent.com/Webncyclopaedia/${params?.slug[0]}/master/README.md`
  );
  const data = await res.data;
  return { props: { data, name: params?.slug[0] } };
};

function Post({
  data,
  name,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [htmlString, setHtmlString] = useState<string>("");

  useEffect(() => {
    const converter = new showdown.Converter();
    const finalHtml = converter.makeHtml(data);
    setHtmlString(finalHtml);
  }, [data]);

  return (
    <ContentWrapper>
      <Loader loading={!htmlString}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            textDecoration: "underline",
          }}
        >
          <Link href="/">Back to posts</Link>
          <a
            href={`https://github.com/Webncyclopaedia/${name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github link
          </a>
        </div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </Loader>
    </ContentWrapper>
  );
}

export default Post;
