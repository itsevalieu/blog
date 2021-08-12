import styles from "./Subscribe.module.scss";
export default function Subscribe() {
  return (
    <div className={styles.Subscribe}>
      <h2>Subscribe to our newsletter</h2>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}
