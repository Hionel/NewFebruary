import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import CitiesList from './components/CitiesList';
import Country from './pages/Country';
import { useEffect, useState } from 'react';

export default function App(){
    const [cities, setCities] = useState([]);

    useEffect(function(){
        async function fetchCities(){
            try{
                const res = await fetch('http://localhost:9000/cities');
                const data = await res.json();
                setCities(data);
            }catch{
                alert('Error fetching cities!')
            }
        }
        fetchCities();
    }, [])

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/product' element={<Product/>}/>
                    <Route path='/pricing' element={<Pricing/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/app' element={<AppLayout/>}>
                        <Route path='cities' element={<CitiesList cities={cities}/>}/>
                        <Route path='country' element={<Country/>}/>
                    </Route>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}