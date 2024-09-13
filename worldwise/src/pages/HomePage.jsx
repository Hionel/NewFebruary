import PageNav from '../components/PageNav';
import homepageCss from './HomePage.module.css';

export default function HomePage(){
    return (
       <main className={homepageCss.homepage}>
            <PageNav/>
            <section>
                <h1>You travel the world.</h1> <br/>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, eum! Mollitia quo, quia repellendus officiis, perferendis aliquam cumque culpa fugit quasi ratione laudantium quae. Inventore eaque obcaecati corporis necessitatibus distinctio?</h2>
            </section>
       </main>
    )
}