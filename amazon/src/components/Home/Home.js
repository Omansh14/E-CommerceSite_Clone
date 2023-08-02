import React from 'react';
import Banner from './Banner';
import Products from './Products';
// import { fetchProductData } from '../../redux/actions/action';
// import { useDispatch } from 'react-redux';

const Home = () => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(fetchProductData());
    // }, [dispatch])
    return (
        <div>
            <Banner/>
            <Products/>
            
        </div>
    )
}

export default Home;