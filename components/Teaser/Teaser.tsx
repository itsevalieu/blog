import styles from "./Teaser.module.scss";
type Props = {
  items: any[];
};
export default function Teaser({ items }: Props) {
  return (
    <div className={styles.Teaser}>
      <div className={styles.feature}>
        <p>{items[0].date}</p>
        <h3>{items[0].title}</h3>
      </div>
      <div
        className={[styles["feature-tiny"], styles["feature-tiny-1"]].join(" ")}
      >
        <p>{items[1].date}</p>
        <h3>{items[1].title}</h3>
      </div>
      <div
        className={[styles["feature-tiny"], styles["feature-tiny-2"]].join(" ")}
      >
        <p>{items[2].date}</p>
        <h3>{items[2].title}</h3>
      </div>
    </div>
  );
}
//should feature teasers for the first three items from most recent;
//items should be sorted by most recent date published
