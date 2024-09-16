import React from 'react';
import BestPrice from './BestPrice';
import Category from './Category';
import About from './About';
import BestProducts from './BestProducts';
import ShowNow from './ShowNow';
import Slider from './Slider';
import Features from './Features';
import RevolutionGallery from './RevolutionGallery';
import NewArrivals from './NewArrivals';
import Testimonials from './Testimonials';
import NewsAndArticles from './NewsAndArticles';
import PartnersContainer from '../PartnersContainer';
import Map from './Map';

const Home = () => {
	return (
		<div>
			<Slider />
			<BestPrice />
			<Category />
			<About />
			<BestProducts />
			<ShowNow />
			{/* <Features /> */}
			<RevolutionGallery />
			<NewArrivals />
			<Testimonials />
			{/* <NewsAndArticles /> */}
			<PartnersContainer />
			{/* <Map /> */}
		</div>
	);
};

export default Home;
