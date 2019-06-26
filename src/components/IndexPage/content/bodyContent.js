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
Vérifiez si votre enfant est admissible au Bon d’études canadien ! Cette bourse du gouvernement du Canada, d’un montant allant de 500 $ à 2000 $, est déposée directement dans le Régime enregistré d’épargne-études (REEE) des enfants admissibles et est utilisable pour défrayer les coûts liés aux études postsecondaires.
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

The Economic and Social Inclusion Corporation is working to increase post-secondary opportunities for youth. By focusing on the 47,000 + children who are eligible for the Canada Learning Bond, we can build a better future for our children and province.
  `)
  ),
  funding: addContent(
    'What funding is available?',
    marked(`
Eligible children receive $500 initially and $100 more each year they continue to be eligible. The CLB is available up to the age of 15 or a maximum of $2,000.

You do not have to put any of your own money into the RESP to receive the Canada Learning Bond.

Money comes from the Government of Canada and is deposited directly into the bank account that holds the Registered Education Savings Plan (RESP) of an eligible child.
  `)
  ),
  eligibility: addContent(
    'Eligibility',
    marked(`
Families eligible for the Canada Learning Bond have:
* Children born on or after January 1, 2004.
* A net family income of $46,605 or less for a family with up to 3 kids.

*For families with more than 3 children [click here.](https://www.canada.ca/en/employment-social-development/services/learning-bond/eligibility.html )
  `)
  ),
  apply: addContent(
    'What do I need to apply?',
    marked(`
A Social Insurance Number for you and your child. You must have filed your latest income tax and benefit return.

You can get help at a free tax preparation clinic near you and some clinics help with taxes all year.
For more information, visit the nearest [Community Volunteer Income Tax Program clinic](https://apps.cra-arc.gc.ca/ebci/oecv/external/prot/cli_srch_01_ld.action) in your community.
  `)
  ),
};

const bodyContent = {
  en,
  fr,
};

export default bodyContent;
