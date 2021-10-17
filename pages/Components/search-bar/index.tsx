import * as React from 'react'
import styles from "./style.module.css";

const Ticket: React.FunctionComponent<{}> = () => {

    console.log(styles);
    return (
        <div>
            <input className={styles.inputCustom} type="text" placeholder="Search ..." />
        </div>
    )
}

export default Ticket;

    