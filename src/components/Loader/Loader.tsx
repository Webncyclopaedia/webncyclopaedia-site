import styles from "./Loader.module.css";

// TODO: Убрать any
const Loader = ({ children, loading }: any) => {
  return <>{loading ? <div className={styles.loader} /> : children}</>;
};

export default Loader;
