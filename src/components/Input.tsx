import styles from "../styles/Input.module.css"

export default function Input({ ...rest }) {
    return (
        <input
            className={styles.input}
            {...rest}
        />
    )
}