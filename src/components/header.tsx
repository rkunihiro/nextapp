import styles from "./header.module.scss";

interface Props {
    title: string;
}

export function Header({ title = "" }: Props) {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
        </header>
    );
}
