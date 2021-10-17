import * as React from 'react'
import styles from "./style.module.css";
const SearchBar: React.FunctionComponent<{}> = () => {

    console.log(styles);
    return (
        <div className={styles.container}>
            this is a test
        </div>
    )
}

export default SearchBar;

    