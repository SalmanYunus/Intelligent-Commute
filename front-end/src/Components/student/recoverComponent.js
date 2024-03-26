import React from "react";
import "./css/recoverComponent.css";

export default class RecoverComponent extends React.Component {
 
  render() {
    return (
      <div className="recoverComponentContainer2">
            <form className="recoverForm" >       
            <input onChange={this.props.onChangeEmail} id="email" className="centerPlaceHolder recoverInput recoverInputText" name="email" type="email" placeholder="Email"/>
            <input onChange={this.props.onChangePassword} id="password" className="centerPlaceHolder recoverInput recoverInputText" name="password" type="password" placeholder="Set New Password"/>
          </form>
          <button type="submit"  className="recoverSubmit recoverInput" onClick={this.props.onSubmit} >Change </button>
      </div>
    );
  }
}
