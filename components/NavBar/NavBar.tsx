// Theirs
import Link from "next/link";

// Ours
import type { NavBarProps as Props } from "./types.d";
import styles from "./NavBar.module.css";


export function NavBar({}: Props) {

  return (
    <nav className={styles.root}>
      <h2 data-sr>Main navigation</h2>
      <div className={styles.container} data-wrap>
        <Link href="/public">Home</Link>
        <Link href="/products">Products</Link>
      </div>
    </nav>
  );
}
