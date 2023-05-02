import styles from "./ContentWrapper.module.css";

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.contentWrapper}>{children}</div>;
};

export default ContentWrapper;
