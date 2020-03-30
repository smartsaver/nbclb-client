import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Section from '../Section';
import EscapedHtml from '../EscapedHtml';
import './bodySections.css';
import { Typography, LinearProgress, Button, TextField, Select, MenuItem, FormControl, FormHelperText } from '@material-ui/core';

const axios = require('axios');

const styles = {
  formLayout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  },
  labels: {
    paddingBottom: ".5rem"
  },
  valid: {
    color: "green"
  },
  invalid: {
    color: "red"
  }
}

const SectionForEn = (props) => {
  console.log("Section for Props:", props);
  if (props.locale === 'en')
    return (
      <>
        <Section>
          <Typography variant="h2">
            {props.content[props.locale].funding.title}
          </Typography>
          <EscapedHtml html={props.content[props.locale].funding.text} />
        </Section>
        <Section>
          <Typography variant="h2">
            {props.content[props.locale].eligibility.title}
          </Typography>
          <EscapedHtml html={props.content[props.locale].eligibility.text} />
        </Section>
        <Section>
          <Typography variant="h2">
            {props.content[props.locale].apply.title}
          </Typography>
          <EscapedHtml html={props.content[props.locale].apply.text} />
        </Section>
      </>
    );
  else if (props.locale === 'fr')
    return (
      <Section>
        <Typography variant="h2">
          {content[props.locale].apply.title}
        </Typography>
        <EscapedHtml html={content[props.locale].apply.text} />
      </Section>
    );
};

class BodySections extends React.Component {
  /**
 * @description - Body Sections Component renders a list of sections if it exist.
 * There are multiple sections in en, so an if statement is controlling the components.
 * @param {Object} content - body section content, french and english
 * @param {string} locale - 'en' or 'fr'
 */
  constructor(props) {
    super(props);

    this.freshState = {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      financial_institution: "",
      reason: "",
      reasonSelect: 0,
      progress: 0,
      finished: false
    };
    this.state = this.freshState;

    // Max length for each field
    this.validationParams = {
      first_name: 30,
      last_name: 30,
      email: 50,
      phone_number: 20,
      financial_institution: 50,
      reason: 255
    };

    this.reasons = {
      en: {
        0: "I never received a phone call", 
        1: "I missed my appointment", 
        2: "I want a call back from my bank", 
      },
      fr: {
        0: "Je n'ai jamais reçu d'appels téléphoniques",
        1: "J'ai raté mon rendez-vous",
        2: "Je souhaite que mon institution financière me téléphone",
      }
    }

    this.financial_institutions = {
      en: {
        0: "Atlantic Canada credit unions", 
        1: "BMO", 
        2: "CIBC", 
        3: "Meridian", 
        4: "National Bank", 
        5: "RBC", 
        6: "Scotiabank", 
        7: "TD", 
        8: "Vancity", 
      },
      fr: {
        0: "Caisses Populaires du Canada Atlantique",
        1: "BMO",
        2: "CIBC",
        3: "Meridian",
        4: "Banque Nationale",
        5: "Banque Royale",
        6: "Banque Scotia",
        7: "TD",
        8: "Vancity",
      }
    }
    
    // Tried to get the progress bar to react in real time with this variable.  Still in progress, but useless atm.
    this.progress = 0;
    
    // Submit-dependant variables
    this.failed = false;
    this.isSubmitting = false;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });

    // if (this.state.reasonSelect != 2) {
    //   this.setState({
    //     reason: this.reasons[this.props.locale][this.state.reasonSelect]
    //   })
    // }

    // if (name == "reasonSelect") {
    //   if (value == 2) {
    //     this.setState({
    //       reason: this.reasons[this.props.locale][2]
    //     })
    //   }
    // }
    
    this.validateForm();
    this.setState({progress: this.progress})
  }

  handleSubmit(event) {
    // Prevent form redirection; Reset submit-dependant variables
    event.preventDefault();
    this.isSubmitting = true;  
    this.failed = false;

    // Send english reasons to the database, if it's option 1 or 2.
    // French optional options are in french so...
    // if (this.state.reasonSelect != 2) {
    //   this.state.reason = this.reasons["en"][this.state.reasonSelect];
    // }

    // Send the form to the backend  
    this.submitForm(this.state)
    .then( (res) => {

      // If successful, set finished to true and show success message to user.
      if (res[0]) {
        this.setState({finished: true});
      }
      else {
        console.log("An error has occurred.  If you check this out, include this in the email to info@smartsaver.org: SSAFE02", res[1]);
        this.failed = true;
      }  
    })
    .catch((err) => {
      // If unsuccessful, inform the user and ask them to email us for assistance. 
      console.log("An error has occurred.  If you check this out, include this in the email to info@smartsaver.org: SSAFE03", err);
      this.failed = true;
    })
    .finally(() => {
      // Unblock the submit button; Only useful if failure occurred, but it failed so they shouldn't really submit... Hmm...
      this.isSubmitting = false;
    });
    return;
  }

  
  async submitForm(assistForm) {
    let res = await axios.post('https://15.223.58.64:3000/api/submit', assistForm)
    .then(function (success) {
      return success.data;
    })
    .catch(function (error) {
      return [false, error];
    })
    return res;
  }

  validateFirstName() {
    return (this.state.first_name.length < 2 || this.state.first_name.length > this.validationParams.first_name)
  }
  validateLastName() {
    return (this.state.last_name.length < 2 || this.state.last_name.length > this.validationParams.last_name)
  }
  validateEmail() {
    return (this.state.email.length < 2 || this.state.email.length > this.validationParams.email)
  }
  validatePhoneNumber() {
    return (this.state.phone_number.length < 2 || this.state.phone_number.length > this.validationParams.phone_number)
  }
  validateFinancialInstitution() {
    return (this.state.financial_institution.length < 2 || this.state.financial_institution.length > this.validationParams.financial_institution)
  }
  validateReason() {
    return (this.state.reason.length < 2 || this.state.reason.length > this.validationParams.reason)
  }

  validateForm() {
    this.progress = 0;
    if (!this.validateFirstName())
      this.progress++;
    if (!this.validateLastName())
      this.progress++;
    if (!this.validateEmail())
      this.progress++;
    if (!this.validatePhoneNumber())
      this.progress++;
    if (!this.validateFinancialInstitution())
      this.progress++;
    if (!this.validateReason())
      this.progress++;
    
      return this.progress;
  }

  isFormComplete() {
    // if (this.state.reasonSelect == 2)
      return this.validateForm() == 6;
    // else
    //   return this.state.progress >= 5; // If it's greater than 5, all the more power to ya bub!
  }

  render() {
    const { content } = this.props;
    return (
      <>
      <Section>
        <Typography variant="h1">
          {content[this.props.locale].thankYou.title}
        </Typography>
        <EscapedHtml html={content[this.props.locale].thankYou.text} />
      </Section>
      <Section>
        <Typography variant="h1">
          {content[this.props.locale].beforeSubmitting.title}
        </Typography>
        <EscapedHtml html={content[this.props.locale].beforeSubmitting.text} />
      </Section>
      <Section name={this.props.locale == "en" ? "submit" : "envoyer"} className={(this.state.finished) ? "hiding" : ""} >
        <form className="formLayout" onSubmit={this.handleSubmit}>
          <div>
            <LinearProgress variant="determinate" value={(this.validateForm()/6) * 100} />
          </div>
          <br/>
          <div className="sharedDiv">
            <TextField variant="filled" fullWidth required placeholder="John"
            error={this.validateFirstName()}
            label={(this.props.locale == "en") ? "First Name:" : "Prénom:"}
            minLength="2" maxLength="30"
            id="first_name" name="first_name" type="text" value={this.state.first_name} onChange={this.handleInputChange} />

            <TextField variant="filled" fullWidth required placeholder="Doe"
            error={this.validateLastName()}
            label={(this.props.locale == "en") ? "Last Name:" : "Nom:"}
            minLength="2" maxLength="30"
            id="last_name" name="last_name" type="text" value={this.state.last_name} onChange={this.handleInputChange} />
          </div>

          <br/>

          <div className="sharedDiv">
            <TextField variant="filled" fullWidth required placeholder="jdoe@gmail.com"
            error={this.validateEmail()}
            label={(this.props.locale == "en") ? "E-Mail:" : "Courriel:"}
            minLength="2" maxLength="50"
            id="email" name="email" type="email" value={this.state.email} onChange={this.handleInputChange} />

            <TextField variant="filled" fullWidth required placeholder="9998887777"
            error={this.validatePhoneNumber()}
            label={(this.props.locale == "en") ? "Phone Number:" : "Prénom:"}
            minLength="2" maxLength="20"
            id="phone_number" name="phone_number" type="text" value={this.state.phone_number} onChange={this.handleInputChange} />
          </div>

          <br/>

          <FormControl className="sharedDiv">
            <Select
              id="financial_institution"
              name="financial_institution"
              value={this.state.financial_institution}
              required
              onChange={this.handleInputChange}>
                <MenuItem value={this.financial_institutions['en'][0]}>{(this.financial_institutions[this.props.locale][0])}</MenuItem>
                <MenuItem value={this.financial_institutions['en'][1]}>{(this.financial_institutions[this.props.locale][1])}</MenuItem>
                <MenuItem value={this.financial_institutions['en'][2]}>{(this.financial_institutions[this.props.locale][2])}</MenuItem>
                <MenuItem value={this.financial_institutions['en'][3]}>{(this.financial_institutions[this.props.locale][3])}</MenuItem>
                <MenuItem value={this.financial_institutions['en'][4]}>{(this.financial_institutions[this.props.locale][4])}</MenuItem>
                <MenuItem value={this.financial_institutions['en'][5]}>{(this.financial_institutions[this.props.locale][5])}</MenuItem>
                <MenuItem value={this.financial_institutions['en'][6]}>{(this.financial_institutions[this.props.locale][6])}</MenuItem>
                <MenuItem value={this.financial_institutions['en'][7]}>{(this.financial_institutions[this.props.locale][7])}</MenuItem>
                <MenuItem value={this.financial_institutions['en'][8]}>{(this.financial_institutions[this.props.locale][8])}</MenuItem>
            </Select>
            <FormHelperText>{(this.props.locale == "en") ? "Financial Institution:" : "FI:"}</FormHelperText>
          </FormControl>

          <br/>

          <FormControl className="sharedDiv">
            <Select
              id="reason"
              name="reason"
              value={this.state.reason}
              onChange={this.handleInputChange}>
                <MenuItem value={this.reasons['en'][0]}>{(this.reasons[this.props.locale][0])}</MenuItem>
                <MenuItem value={this.reasons['en'][1]}>{(this.reasons[this.props.locale][1])}</MenuItem>
                <MenuItem value={this.reasons['en'][2]}>{(this.reasons[this.props.locale][2])}</MenuItem>
            </Select>
            <FormHelperText>{(this.props.locale == "en") ? "What happened?" : "Qu'est-il arrivé?"}</FormHelperText>

            {/* <TextField variant="filled" fullWidth placeholder="Quarantined" className={(this.state.reasonSelect != 2) ? "hiding" : ""}
            error={this.validateReason()}
            label={(this.reasons[this.props.locale][2])} 
            minLength="2" maxLength="255"
            id="reason" name="reason" type="text" value={this.state.reason} onChange={this.handleInputChange} /> */}
          </FormControl>

          <br/>

          <Button variant="contained" type="submit" color="primary" disabled={((this.isSubmitting || !this.isFormComplete()) ? true : false)}> 
            {(this.props.locale == "en" ? "Submit" : "Envoyer")}
          </Button>

          <div className={(!this.failed) ? "hiding" : ""}>
            <Typography variant="h4">
            {(this.props.locale == "en") ? 
                EscapedHtml("Your application was not submitted successfully!  Please check your network, then e-mail us at <a href='mailto:info@smartsaver.org'>info@smartsaver.org</a> for further assistance.") : 
                EscapedHtml("Votre candidature n'a pas été soumise avec succès! Veuillez vérifier votre réseau, puis envoyez-nous un courriel à <a href='mailto:info@smartsaver.org'>info@smartsaver.org</a> pour plus d'aide.")}
            </Typography>
          </div>
        </form>
      </Section>
      <Section className={"hiding"}></Section>
      <Section name={this.props.locale == "en" ? "submit" : "envoyer"} className={(!this.state.finished) ? "hiding" : ""}>
        <Typography variant="h2">{(this.props.locale == "en") ? "Thank you!" : "Merci!" }</Typography>
        <Typography variant="h3">
            {(this.props.locale == "en") ? 
            "Your application was submitted successfully!  Please wait for a callback in the coming weeks." : 
            "Votre candidature a été envoyée avec succès! Veuillez attendre un rappel dans les prochaines semaines."}
        </Typography>
      </Section>
      </>
    );
  }

}

export default withStyles(styles)(BodySections);
