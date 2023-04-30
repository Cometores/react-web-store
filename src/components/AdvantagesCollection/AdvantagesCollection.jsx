import React from 'react';
import AdvantagesCard from '../UI/AdvantagesCard/AdvantagesCard';
import styles from './AdvantagesCollection.module.css'

const AdvantagesCollection = () => {
	return (
		<div className={styles.advantages}>
			<AdvantagesCard
				img="https://cdn.shopify.com/s/files/1/1265/2145/files/caffeine-free-red.png?v=1671063905&width=500"
				rtl={false}
			>
				<h1>
					Health
				</h1>
				<p>
					At Gamer Supps, our goal is to offer esports athletes and gamers the most effective and healthy energy
					choice to help them perform at the highest potential especially during their most crucial moments.

				</p>
				<ul>
					<li><strong>Keto Friendly</strong> for low-carb and ketogenic diets</li>
					<li><strong>Nootropics</strong> to sharpen focus and increase reaction time</li>
					<li><strong>Zero Sugar</strong> for a healthier intake and to avoid crashing</li>
					<li><strong>Organic Caffeine</strong> to maximize energy and endurance</li>
					<li><strong>No Fillers</strong> for a better nutritional value</li>
					<li><strong>Six</strong> of the body’s most crucial vitamins and minerals</li>
					<li><strong>Electrolytes</strong> for optimal hydration</li>
				</ul>
			</AdvantagesCard>

			<AdvantagesCard
				img="https://cdn.shopify.com/s/files/1/1265/2145/files/caffeine-free-blue.png?v=1671063905&width=500"
				rtl={true}
			>
				<h1>
					Taste
				</h1>
				<p>
					GG’s powerful formula comes in many tasty flavors that will have you coming back for more.
					Expect a smooth chalk-less ride without worrying about a bitter aftertaste.
				</p>
				<ul>
					<li>Well balanced formula for a consistent great experience</li>
					<li>No chemical aftertaste like other energy powders</li>
					<li>No chemical aftertaste like other energy powders</li>
				</ul>
			</AdvantagesCard>

			<AdvantagesCard
				img="https://cdn.shopify.com/s/files/1/1265/2145/files/caffeine-free-gray.png?v=1671064016&width=500"
				rtl={false}
			>
				<h1>
					Cost
				</h1>
				<p>
					GG® is a powdered energy formula that delivers long-lasting energy, increased endurance, and faster
					reflexes at a fraction of the cost of canned energy drinks.
				</p>
				<ul>
					<li>100 Servings Per Tub</li>
					<li>Only $0.40 Per Serving</li>
				</ul>
			</AdvantagesCard>

		</div>
	);
};

export default AdvantagesCollection;