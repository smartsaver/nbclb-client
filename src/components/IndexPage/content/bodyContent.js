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
    'Did you know?',
    marked(`
Youth with savings for their education are 31% more likely to have a post-secondary mindset than those who have none.

Children with education savings of up to $500 are 3 times more likely to enroll in post-secondary and 4 times more likely to graduate.

The Province of Prince Edward Island is working to increase post-secondary opportunities for youth. By focusing on the 10,000 children in Prince Edward Island who are eligible for the Canada Learning Bond, we can build a better future for our children and a stronger, more vibrant province.
  `)
  ),
  funding: addContent(
    'What funding is available?',
    marked(`
Eligible children receive $500 initially and $100 more each year they continue to be eligible. The CLB is available up to the age of 15 for a maximum of $2,000.

You do not have to put any of your own money into the RESP to receive the Canada Learning Bond.

Money comes from the Government of Canada and is deposited directly into the Registered Education Savings Plan (RESP).
  `)
  ),
  eligibility: addContent(
    'Eligibility',
    marked(`
Children eligible for the Canada Learning Bond:
* Children born on or after January 1, 2004.
* A net family income of $47,630 or less for a family with up to 3 kids.

For families with more than 3 children, [click here.](https://www.canada.ca/en/employment-social-development/services/learning-bond/eligibility.html)
  `)
  ),
  apply: addContent(
    'What do I need to apply?',
    marked(`
A Social Insurance Number for you and your child. The child’s primary caregiver must have applied for the Canada Child Benefit for the child through the Canada Revenue Agency and continue to file income tax returns, allowing eligibility for the Canada Learning Bond to be validated.

You can get help at a free tax preparation clinic near you. 

The Province of Prince Edward Island, the Canada Revenue Agency and Service Canada are teaming up to help Islanders with a modest income file their taxes, get their children a Social Insurance Number and sign them up for the Canada Learning Bond all at the same time and location. 
  `)
  ),
};

const table = [
  {
    city: 'Charlottetown',
    dateAndTime: marked(`
Saturday, March 28, 2020  
10:00 a.m. to 3:00 p.m.
    `),
    location: marked(`
Colonel Gray High School  
Cafeteria  
175 Spring Park Road
    `),
  },
  {
    city: 'Summerside',
    dateAndTime: marked(`
Saturday, April 4, 2020  
10:00 a.m. to 3:00 p.m.
    `),
    location: marked(`
Summerside Intermediate  
School Cafeteria  
247 Central Street
    `),
  }
]

const bodyContent = {
  en,
  fr,
  table
};

export default bodyContent;
