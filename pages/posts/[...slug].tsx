import ContentWrapper from "../../src/components/ContentWrapper";
import axios from "axios";
import { InferGetServerSidePropsType } from "next";

import showdown from "showdown";
import { useEffect, useState } from "react";
import Loader from "../../src/components/Loader";

function Post({
  data,
  name,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [htmlString, setHtmlString] = useState<string>("");

  useEffect(() => {
    const converter = new showdown.Converter();

    const finalHtml = converter.makeHtml(data);
    setHtmlString(finalHtml);
  }, []);

  return (
    <ContentWrapper>
      <Loader loading={!htmlString}>
        <a
          style={{ textDecoration: "underline" }}
          href={`https://github.com/Webncyclopaedia/${name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github link
        </a>
        <br />
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </Loader>
    </ContentWrapper>
  );
}

// TODO: Убрать any
export async function getServerSideProps({ params }: any) {
  const res = await axios.get(
    `https://raw.githubusercontent.com/Webncyclopaedia/${params.slug[0]}/master/README.md`
  );
  const data = await res.data;

  return { props: { data, name: params.slug[0] } };
}

export default Post;
