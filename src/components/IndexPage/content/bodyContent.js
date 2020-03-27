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
  thankYou: addContent(
    'Nous sommes là pour vous aider à épargner pour l’avenir de vos enfants.',
    marked(`
Merci d’utiliser notre formulaire en ligne MonÉducAVENIR pour commencer le processus visant à souscrire à un REEE pour obtenir le Bon d’études canadien (BEC) de vos enfants.

Cette page vous permet de demander à votre institution financière de vous téléphoner pour terminer ce processus.

Veuillez inscrire vos coordonnées et cliquer sur « envoyer ». 

Nous transmettrons ces renseignements à votre institution financière en lui demandant de vous téléphoner. Il faut compter un délai d’attente de 14 à 30 jours ouvrables. 
  `)
  ),
  beforeSubmitting: addContent(
    'Avant de cliquer sur « envoyer »:',
    marked(`
# 1. Si vous êtes client de BMO, de RBC ou de la Banque Scotia 

1. Veuillez inscrire les renseignements demandés et cliquer sur « envoyer ». 
2. Quand la banque vous téléphonera, vous pouvez demander de terminer le processus de demande par téléphone.
* Vous avez aussi d’autres choix; voir le numéro 3.

# 2. Si vous êtes client de l’Atlantic Credit Unions, de CIBC, de Meridian, de TD ou de Vancity 

1. Veuillez inscrire les renseignements demandés et cliquer sur « envoyer ».
2. Vous devrez attendre que les succursales de ces institutions financières soient en mesure de vous offrir un rendez-vous (délai d’attente difficile à prévoir dans les circonstances actuelles).
* Vous avez aussi d’autres choix; voir le numéro 3.

# 3. Souscrire à un REEE sans vous déplacer

Avec les institutions financières suivantes, vous pouvez souscrire à un REEE et demander le Bon d’études pour vos enfants sans avoir à vous déplacer dans une de leurs succursales, et ce, même si vous n’êtes pas déjà leur client.

# Banque Nationale

1. **_N’inscrivez pas vos renseignements personnels sur cette page._**
2. Allez sur le site [MonÉducAVENIR](https://moneducavenir.org/login/national)
3. Faites votre demande sur MonÉducAVENIR en sélectionnant la Banque Nationale. Un conseiller ou une conseillère vous téléphonera pour terminer le processus par téléphone.

# Wealthsimple

1. **_N’inscrivez pas vos renseignements personnels sur cette page._**
2. Allez sur le site [MonÉducAVENIR](https://moneducavenir.org/login/ws)
3. Faites votre demande sur MonÉducAVENIR en sélectionnant Wealthsimple. Allez ensuite sur le site Web de Wealthsimple et remplissez son formulaire de souscription à un REEE. Une fois le formulaire envoyé, vous aurez souscrit à un REEE. Vous ne recevrez aucun appel téléphonique.
  `)
  )
};

const en = {
  ...neutralContent,
  thankYou: addContent(
    'We’re here to help you start saving for your child’s future.',
    marked(`
Thank you for using our online MySmartFUTURE application to start the process of opening your child’s RESP and requesting their Canada Learning Bond (CLB).

Use this page to request a call from your bank or financial institution to complete the RESP and CLB process.

Please provide your basic information below and click ‘submit’. 

We will send your information to your bank or financial institution requesting they call you back. This can take between 14-30 business days.
  `)
  ),
  beforeSubmitting: addContent(
    'Before You Submit:',
    marked(`
# 1. BMO, RBC, or Scotiabank families

1. Please provide your basic information below and click 'submit'
2. You can ask the bank when they call you that you'd like to complete the application over the phone.
* Alternative: Please see item 3 below

# 2. Atlantic credit unions, CIBC, Meridian, TD, or Vancity families

1. Please provide your basic information below and click 'submit'
2. You will need to wait until these branches are available in the unforeseen future to make an appointment for you.
* Alternative: Please see item 3 below

# 3. Any family can use the "At Home RESP" opportunity

Families can open an RESP and request their child's CLB with these financial institutions **_without having to go into a local branch.  This option is available to any family even if you aren't a current client of these banks or institutions._**

# National Bank

1. **_Do not provide the information below._**
2. Visit [MySmartFUTURE](https://mysmartfuture.org/login/national)
3. Select National Bank and submit your application on MySmartFUTURE.  A representative will call you to complete the application over the phone.

# Wealthsimple

1. **_Do not provide the information below._**
2. Visit [MySmartFUTURE](https://mysmartfuture.org/login/ws)
3. Select Wealthsimple and submit your application on MySmartFUTURE. Visit their website and complete their online application.  Once completed, your RESP will be opened.  You will not receive a phone call.
  `)
  )
};



const bodyContent = {
  en,
  fr,
};

export default bodyContent;
