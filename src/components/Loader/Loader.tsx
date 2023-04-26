import styles from "./Loader.module.css";
import { FC, ReactNode } from "react";

interface LoaderProps {
  children: ReactNode;
  loading: boolean;
}

const Loader: FC<LoaderProps> = ({ children, loading }) => {
  return <>{loading ? <div className={styles.loader} /> : children}</>;
};

export default Loader;
