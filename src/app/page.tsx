"use client";
// IMPORT STYLE MODULE.
import styles from "./page.module.css";

// IMPORT COMPONENTS.
import Bookcard from "@/components/bookcard/Bookcard";
import Moviecard from "@/components/moviescard/Moviecard";

// REACT PAGE
export default function Home() {
	return (
		<div className={styles.page}>
			<div className={styles.mainscreen}>
				<div className={styles.sections}>
					<div className={styles.books}>
						<h2 className={styles.bookh1}>Books</h2>
						<Bookcard />
					</div>
				</div>
				<div className={styles.sections}>
					<div className={styles.movies}>
						<h2 className={styles.bookh1}>Movies</h2>
						<Moviecard />
					</div>
				</div>
			</div>
		</div>
	);
}
