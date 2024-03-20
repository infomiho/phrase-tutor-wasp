import styles from "./ContentLoader.module.css";
export function ContentLoader() {
    return (
        <div className={styles.contentLoader}>
            <div className={styles.contentLoaderInner}></div>
        </div>
    );
}
