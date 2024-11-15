import styles from './header.module.css'


const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.brand}>
                <h1>Dashboard</h1>
            </div>            
        </header>
    )
}

export default Header;