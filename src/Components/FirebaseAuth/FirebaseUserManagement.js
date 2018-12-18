import React, { Component } from "react";
import Redirect from "react-router-dom/Redirect";
import qs from "query-string";
import store from "../../Store/store";
import {authenticated} from "../../Store/actionCreators";

class FirebaseUserManagement extends Component {
  constructor(props){
    super(props)
    this.state = {
      type:null
    }
    store.dispatch(authenticated({authenticated:true}));
  }
	verifyEmail(actionCode){
    /*
		firebase.auth().applyActionCode(actionCode).then(resp => {
			console.log(resp);
  		}).catch(error=> {
  			console.log(error);
  		});

	};
  /*
	handleResetPassword(auth, actionCode, continueUrl) {
  var accountEmail;
  // Verify the password reset code is valid.
  auth.verifyPasswordResetCode(actionCode).then(function(email) {
    var accountEmail = email;

    // TODO: Show the reset screen with the user's email and ask the user for
    // the new password.

    // Save the new password.
    auth.confirmPasswordReset(actionCode, newPassword).then(function(resp) {
      // Password reset has been confirmed and new password updated.

      // TODO: Display a link back to the app, or sign-in the user directly
      // if the page belongs to the same domain as the app:
      // auth.signInWithEmailAndPassword(accountEmail, newPassword);

      // TODO: If a continue URL is available, display a button which on
      // click redirects the user back to the app via continueUrl with
      // additional state determined from that URL's parameters.
    }).catch(function(error) {
      // Error occurred during confirmation. The code might have expired or the
      // password is too weak.
    });
  }).catch(function(error) {
    // Invalid or expired action code. Ask user to try to reset the password
    // again.
  });
}
handleRecoverEmail(actionCode) {
  var restoredEmail = null;
  // Confirm the action code is valid.
  auth.checkActionCode(actionCode).then(function(info) {
    // Get the restored email address.
    restoredEmail = info['data']['email'];

    // Revert to the old email.
    return auth.applyActionCode(actionCode);
  }).then(function() {
    // Account email reverted to restoredEmail

    // TODO: Display a confirmation message to the user.

    // You might also want to give the user the option to reset their password
    // in case the account was compromised:
    auth.sendPasswordResetEmail(restoredEmail).then(function() {
      // Password reset confirmation sent. Ask user to check their email.
    }).catch(function(error) {
      // Error encountered while sending password reset code.
    });
  }).catch(function(error) {
    // Invalid code.
  });
  */
};

	getParameters(){
        var query = qs.parse(this.props.location.search)
        console.log(query)

        switch (query.mode) {
    /*case 'resetPassword':
      // Display reset password handler and UI.
      handleResetPassword(actionCode);
      break;
    case 'recoverEmail':
      // Display email recovery handler and UI.
      handleRecoverEmail(actionCode);
      break;*/
		case 'verifyEmail':
      // Display email verification handler and UI.
			this.setState({
			  type:"verify"
			})
			this.verifyEmail(query.oobCode);
			break;
        default:
			// Error: invalid mode.
			break;
    }
  }
	componentWillMount() {
    this.getParameters()
	}
	render(){
    switch (this.state.type) {
      case "verify":
        var redirect = <Redirect to="/user-success" />
        break;
        case "changePassword":
        break;

        case "changeEmail":
        break;
      default:
        // statements_def
        break;
    }
		return (
				<div>
          {redirect}
				</div>
			)
	}
}
export default FirebaseUserManagement;