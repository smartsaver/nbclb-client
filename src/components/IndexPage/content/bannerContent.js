import logo from '../../../images/kids_with_backpacks.jpg';

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
    'Saving for your children’s education is easy with the Canada Learning Bond (CLB)! The CLB offers families with low to modest incomes a simple way to start saving now for their children’s future education.'
  ),
  fr: banner(
    'Saviez-vous que les jeunes ont 50% plus de chances de continuer leurs études après le secondaire lorsqu’ils ont de l’argent de côté pour le faire ? L’épargne pour les études de vos enfants est facile avec le Bon d’études Canadien (BEC)'
  ),
};

export default bannerContent;
