import { ReactNode } from "react";
import styles from "./Hero.module.scss";
type Props = {
  children?: ReactNode;
};
export default function Hero({ children }: Props) {
  return <div className={styles.Hero}>{children}</div>;
}
