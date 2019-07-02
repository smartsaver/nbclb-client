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
  en: 'https://mysmartfuture.org/clbnb',
  fr: 'https://moneducavenir.org/clbnb',
};

const applyContent = {
  en: addContent(
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
  fr: addContent(
    'Demandez le Bon d’études canadien pour votre enfant dès aujourd’hui !',
    marked(`
Si votre enfant est né en 2004 ou après et que votre revenu familial net est de 46 605 $* ou moins, vous pouvez profiter de cette occasion d’épargner dès aujourd’hui pour les études de votre enfant. Vous n’avez aucun frais à payer pour demander le Bon d’études canadien, ni aucune cotisation à faire.

*pour les familles de trois enfants ou moins. Si votre famille compte plus de trois enfants, [cliquez ici](https://www.canada.ca/fr/emploi-developpement-social/services/aide-financiere-etudiants/epargne-etudes/reee/promoteurs-reee/bulletin/avis-2018-772.html).`) +
      marked(`Le lien ne s’ouvre pas, [cliquez ici](${respUrl.fr}).`),
    marked(`
Pour en savoir plus, composez le 1-855-737-7252 ou contactez info@smartsaver.org.

Ou communiquez avec 1 800 O-Canada:

__Téléphone :__ 1 800 O-Canada (1-800-622-6232)

__ATS :__ 1-800-926-9105

__À l’extérieur du Canada :__ Composer le 1 800 O-Canada à l'étranger

  `),
    respUrl.fr
  ),
};

export default applyContent;
