import styles from "./ListItem.module.scss";

type PostProps = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
};
type ListItemProps = {
  item: PostProps;
};
export default function ListItem({ item }: ListItemProps) {
  console.log("item", item.id);
  return (
    <div className={styles.ListItem}>
      <h3>{item.title}</h3>
      <p>{item.excerpt}</p>
      <p>{item.date}</p>
    </div>
  );
}
