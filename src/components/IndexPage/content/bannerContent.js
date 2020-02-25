import logo from '../../../images/anetas-son-overlay.jpg';

const neutralContent = {
  logoUrl: logo,
};

/**
 *
 * @param {*} title
 * @param {*} text
 * @returns {title, text}
 */

function banner(title, text = '') {
  return {
    title,
    text,
    ...neutralContent,
  };
}

const bannerContent = {
  en: banner(
    'Canada Learning Bonds',
    'Your child could be eligible to receive up to $2,000 in free money for their post-secondary education from the Canada Learning Bond (CLB).'
  ),
  fr: banner(
    'Saviez-vous que les jeunes ont 50% plus de chances de continuer leurs études après le secondaire lorsqu’ils ont de l’argent de côté pour le faire ? L’épargne pour les études de vos enfants est facile avec le Bon d’études Canadien (BEC)'
  ),
};

export default bannerContent;
