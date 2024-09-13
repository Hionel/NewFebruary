import PageNav from '../components/PageNav';
import styles from './Product.module.css';

export default function Pricing(){
    return (
       <main className={styles.product}>
            <PageNav/>
            <section>
                <div>
                    <h2>Simple pricing <br/> Just 9$/month</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maxime molestiae totam libero? Eos, reiciendis! Nisi ea delectus accusantium incidunt, veniam, ullam necessitatibus, dolor eos totam modi aspernatur architecto nobis?</p>
                </div>
                <img src='img-2.jpg' alt='overview of a large city'/>
            </section>
       </main>
    )
}