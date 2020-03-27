import logo from '../../../images/smiling_child.jpg';

const neutralContent = {
  logoUrl: logo,
};

/**
 *
 * @param {*} title String
 * @param {*} text String
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
    'If you haven\'t checked in with a bank at this point, your child won\'t receive any money for their future.',
    'Even in these trying times, SmartSAVER is here to help.  Please fill out the form below, and we\'ll follow up with the Financial Institution.'
  ),
  fr: banner(
    'Saviez-vous que les jeunes ont 50% plus de chances de continuer leurs études après le secondaire lorsqu’ils ont de l’argent de côté pour le faire ? L’épargne pour les études de vos enfants est facile avec le Bon d’études Canadien (BEC)',
    ''
  ),
};

export default bannerContent;
