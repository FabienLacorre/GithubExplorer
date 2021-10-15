import * as React from 'react'
import styles from "./SearchBar.module.css";

const SearchBar: React.FunctionComponent<{}> = () => {

    console.log(styles);
    return (
        <div>
            <input className={styles.inputCustom} type="text" placeholder="Search ..." />
        </div>
    )
}

export default SearchBar;

    