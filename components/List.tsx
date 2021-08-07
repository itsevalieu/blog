import styles from "./List.module.scss";
import ListItem from "@components/ListItem";

type ListProps = {
  items: any[];
};

export default function List({ items }: ListProps) {
  return (
    <div className={styles.List}>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
}
