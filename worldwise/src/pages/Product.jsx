import PageNav from "../components/PageNav";
import styles from './Product.module.css';

export default function Product(){
    return ( 
        <main className={styles.product}>
            <PageNav />
            <section>
                <img src="img-1.jpg" alt="Person with dog"/>
                <div>
                    <h2>About Worldwise.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita optio excepturi a commodi libero ratione dolore quod numquam sint, voluptas blanditiis at quia tempora doloremque maiores et aperiam assumenda ipsa deserunt eos distinctio eaque ipsam quae. Neque velit quae unde.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt iusto unde fuga corporis, esse dolore voluptas accusamus. Nemo sunt amet sed, quas debitis libero perspiciatis quisquam pariatur quibusdam facilis!</p>
                </div>
            </section>
        </main>
    )
}