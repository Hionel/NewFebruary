import { useState } from "react";
import PageNav from "../components/PageNav";
import styles from './Login.module.css';

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <main className={styles.login}>
            <PageNav />
            <form className={styles.form}>
                <div className={styles.row}>
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className={styles.row}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </main>
    )
}