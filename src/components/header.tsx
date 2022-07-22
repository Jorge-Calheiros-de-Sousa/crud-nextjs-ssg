import Link from "next/link"
import styles from "../styles/Header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <h2 className={styles.title}>JORGE CALHEIROS DE SOUSA</h2>
            <div className={styles.list}>
                <li>
                    <Link href={"/"}>HOME</Link>
                </li>
                <li>
                    <Link href={"/usuarios"}>USUÁRIOS</Link>
                </li>
            </div>
        </header>
    )
}