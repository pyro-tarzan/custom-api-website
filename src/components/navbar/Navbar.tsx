import styles from "@/components/navbar/navbar.module.css";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={styles.flexNavbar}>
            <h1 className={styles.h1Navbar}>Lord of the Rings</h1>
        </div>
    )
}

export default Navbar;