import React from 'react';
import styles from './IconCollection.module.css'
import {ReactComponent as HeartIcon} from '../../img/heart.svg';
import {ReactComponent as ThumbIcon} from '../../img/thumb.svg';
import {ReactComponent as DiamondIcon} from '../../img/diamond.svg';

const IconCollection = () => {
    return (
        <div className={styles.iconCollection}>
            <div className={styles.iconCollection__wrapper}>
                <div className={styles.iconCollection__card}>
                    <div className={styles.iconCollection__icon}>
                        <HeartIcon/>
                    </div>
                    <h1>HEALTH</h1>
                    <p>
                        At Gamer Supps, our goal is to offer esports athletes and gamers the most effective and healthy
                        energy choice to help us perform at our highest potential. GG® is keto friendly, less than one
                        calorie, and sugar free.
                    </p>
                </div>

                <div className={styles.iconCollection__card}>
                    <div className={styles.iconCollection__icon}>
                        <ThumbIcon/>
                    </div>
                    <h1>TASTE</h1>
                    <p>
                        GG’s powerful formula comes in many tasty flavors that will have you coming back for more.
                        Expect a smooth chalk-less ride and a juicy-salivating mouthfeel.
                    </p>
                </div>

                <div className={styles.iconCollection__card}>
                    <div className={styles.iconCollection__icon}>
                        <DiamondIcon/>
                    </div>
                    <h1>COST</h1>
                    <p>
                        GG® is an energy formula that delivers long-lasting energy, increased endurance, and faster
                        reflexes at a fraction of the cost of canned energy drinks. With 100 servings per tub that comes
                        out to just $0.40 per serving.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IconCollection;