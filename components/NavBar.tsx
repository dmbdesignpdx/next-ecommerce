// Theirs
import Link from "next/link";

// Ours
import styles from "./NavBar.module.css";


export function NavBar() {

  return (
    <nav className={styles.root}>
      <h2 data-sr>Main navigation</h2>
      <div className={styles.container} data-wrap>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
      </div>
    </nav>
  );
}
