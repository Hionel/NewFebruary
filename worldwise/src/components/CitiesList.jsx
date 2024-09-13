/* eslint-disable react/prop-types */

import styles from './CitiesList.module.css';
import CityItem from './CityItem';

export default function CitiesList({cities}){
    return (
        <ul className={styles.citieslist}>
            {cities.map((city) => <CityItem key={city.id} city={city}/>)}
        </ul>
    )
}