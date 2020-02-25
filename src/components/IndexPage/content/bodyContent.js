import marked from '../../../libs/marked';

function addContent(title, text) {
  return {
    title,
    text,
  };
}

const neutralContent = {
  videoUrl: 'https://www.youtube.com/embed/ev6ZtfjRdBg',
};

const fr = {
  ...neutralContent,
  didYouKnow: addContent(
    '',
    marked(`
Vérifiez si votre enfant est admissible au Bon d’études canadien ! Cet incitatif à l’épargne-études du gouvernement du Canada, d’un montant allant de 500 $ à 2000 $, est déposée directement dans le Régime enregistré d’épargne-études (REEE) des enfants admissibles et est utilisable pour défrayer les coûts liés aux études postsecondaires.
  `)
  ),
  apply: addContent(
    'Super Comptoirs',
    marked(`
La SIÉS, l’Agence du Revenu du Canada et Service Canada font équipe pour aider les Néo-Brunswickois ayant un revenu modeste à produire leur déclaration de revenus, à obtenir un numéro d’assurance sociale pour leurs enfants ainsi qu'à les inscrire au programme de Bon d'études canadien, et ce, en même temps et au même endroit.

Pour plus de renseignements, [cliquez ici](https://www2.gnb.ca/content/gnb/fr/ministeres/sies/bon.html).
  `)
  ),
};

const en = {
  ...neutralContent,
  didYouKnow: addContent(
    'Canada Learning Bonds?',
    marked(`
Your child could be eligible to receive up to $2,000 in free money for their post-secondary education from the Canada Learning Bond (CLB).

If your child is eligible, the Government of Canada will deposit the money directly into a bank account called a Registered Education Savings Plan (RESP). All you have to do is register.

You don’t have to pay fees or put any money into the RESP for your child to receive the CLB.
  `)
  ),
  funding: addContent(
    'Benefit amount',
    marked(`
Children receive $500 initially and $100 more each year that they’re eligible. They can keep receiving the CLB until they’re 15, or until they’ve received a maximum of $2,000.
  `)
  ),
  eligibility: addContent(
    'Eligibility',
    marked(`
Families can register for the CLB if they have:
* Children born on or after January 1, 2004.
* Canadian residency or citizenship.
* A net family income of $46,605 or less for a family with up to 3 children – if you have more than 3, visit the [Canada Revenue Agency’s website](https://www.canada.ca/en/employment-social-development/services/learning-bond/eligibility.html) to find your income limit.
  `)
  ),
  apply: addContent(
    'How to Apply',
    marked(`
If you already have an RESP, talk to your bank or RESP provider to let them know you want to register for the CLB.

If you don’t have an RESP, you can open one and register for your child’s CLB online or by phone.
  `)
  ),
};

const bodyContent = {
  en,
  fr,
};

export default bodyContent;
