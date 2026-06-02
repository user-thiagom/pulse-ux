import icon1 from '../assets/icons/icon1.svg';
import icon2 from '../assets/icons/icon2.svg';
import icon3 from '../assets/icons/icon3.svg';
import icon4 from '../assets/icons/icon4.svg';
import icon5 from '../assets/icons/icon5.svg';

const icons = [icon1, icon2, icon3, icon4, icon5];

function getRandomIcon() {
    const randomIndex = Math.floor(Math.random() * icons.length);
    return icons[randomIndex];
}

export default getRandomIcon