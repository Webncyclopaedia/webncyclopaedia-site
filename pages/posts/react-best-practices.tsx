import ContentWrapper from "../../src/components/ContentWrapper";

export default function Post() {
  return (
    <ContentWrapper>
      <a
        style={{ textDecoration: "underline" }}
        href="https://github.com/Webncyclopaedia/react-best-practices"
      >
        react best practices info here
      </a>
      <br />
      Site still in progress...
    </ContentWrapper>
  );
}
