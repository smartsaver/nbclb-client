import marked from '../../../libs/marked';

function addContent(title, text, footer, respUrl) {
  return {
    title,
    text,
    footer,
    respUrl,
  };
}

const respUrl = {
  en: 'https://mysmartfuture.org/signup/ns',
  fr: 'https://moneducavenir.org/signup/ns',
};

const applyContent = {
  en: {
    apply: addContent(
    'Apply For Your Child’s Canada Learning Bond Today!',
    marked(`
If you cannot see the form, [click here.](${respUrl.en})
  `),
    marked(`
For more information contact us at 1-855-737-7252 (1-855-RESP-CLB) or info@smartsaver.org.

Or contact 1 800 O-Canada:

__Telephone:__ 1 800 O-Canada (1-800-622-6232)

__TTY:__ 1-800-926-9105

__From outside Canada:__ Call 1 800 O-Canada from abroad
  `),
    respUrl.en
  ),
  applyByPhone: addContent(
    'Apply by Phone',
    marked(`
You can call ACORN to complete your application by phone (toll free): __1-866-991-0025__.
    `)
  ),
  applyInPerson: addContent(
    'Apply in Person',
    marked(`
Walk-in clinic registration has now ended for 2019.
    `)
  ),
  beforeYouStart: addContent(
    'Before You Start',
    marked(`
When you register for the CLB, make sure you have:
* Your most recent income tax and benefit return
* Social Insurance Numbers (SIN) for you and your child. [Learn how to apply for a SIN.](https://www.smartsaver.org/startmyresp/en/Learn-How-to-Apply-for-Sin.html)
    `)
  ),

},
fr: {
  apply: addContent(
'Demandez le Bon d’études canadien pour votre enfant dès aujourd’hui !',
marked(`
Si votre enfant est né en 2004 ou après et que votre revenu familial net est de 47,630 $* ou moins, vous pouvez profiter de cette occasion d’épargner dès aujourd’hui pour les études de votre enfant. Vous n’avez aucun frais à payer pour demander le Bon d’études canadien, ni aucune cotisation à faire.

*pour les familles de trois enfants ou moins. Si votre famille compte plus de trois enfants, [cliquez ici](https://www.canada.ca/fr/emploi-developpement-social/services/bon-etudes/admissibilite.html).`) +
  marked(`Le lien ne s’ouvre pas, [cliquez ici](${respUrl.fr}).`),
marked(`
Pour en savoir plus, composez le 1-855-737-7252 ou contactez info@smartsaver.org.

Ou communiquez avec 1 800 O-Canada:

__Téléphone :__ 1 800 O-Canada (1-800-622-6232)

__ATS :__ 1-800-926-9105

__À l’extérieur du Canada :__ Composer le 1 800 O-Canada à l'étranger

`),
respUrl.fr
),}
};


export default applyContent;
