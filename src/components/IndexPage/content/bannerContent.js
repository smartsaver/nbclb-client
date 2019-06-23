import logo from '../../../images/anetas-son-overlay.jpg';

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
  };
}

const en = banner(
  'Saving for your children’s education is easy with the Canada Learning Bond (CLB)! The CLB offers families with low to modest incomes a simple way to start saving now for their children’s future education.'
);

const fr = banner(
  'Saviez-vous que les jeunes ont 50 % plus de chances de continuer leurs études après le secondaire lorsqu’ils ont de l’argent de côté pour le faire ?'
);

const bannerContent = {
  en,
  fr,
  logoUrl: logo,
};

export default bannerContent;
