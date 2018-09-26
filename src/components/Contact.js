import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            text: '',
            formErrors: {
                email: '',
                name: ''
            },
            emailvalid: false,
            nameValid: false,
            formValid: false
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
                      () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let nameValid = this.state.nameValid;
      switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'name':
                nameValid = value.length > 0;
                fieldValidationErrors.name = nameValid ? '': ' write your name';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            nameValid: nameValid
        }, this.validateForm);
      }

      validateForm() {
        this.setState({
            formValid: this.state.emailValid &&
            this.state.nameValid});
      }


    handleFormSubmit(e) {
        e.preventDefault();
        $.ajax({

            url: '../mailer.php',
            type: 'POST',
            data: {
            
            form_name: this.state.name,
            form_email: this.state.email,
            form_msg: this.state.text
            
            },
            cache: false,
            success: function(data) {
                alert('message sent')
            },
            error: function(xhr, status, err) {
                alert('error')
            }          
        });
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    render() {
        return(
            <div className={ this.props.active ? 'section contact active' : 'section contact' } id='contact'>
                <div className="contact-main">
                <h1 className="section-title">Contact Me</h1>
                    <form action="#" className="contact-form">
                        <input 
                            onChange={this.handleInputChange} 
                            type="text" name="name" 
                            className={`contact-input ${this.errorClass(this.state.formErrors.name)}`} 
                            placeholder="Name" 
                            value={this.state.name}/>
                        <input 
                            onChange={this.handleInputChange} 
                            type="email" 
                            name="email" 
                            className={`contact-input ${this.errorClass(this.state.formErrors.email)}`}
                            placeholder="Email" 
                            value={this.state.email}/>                        
                        <textarea 
                            onChange={this.handleInputChange}  
                            name="text" className="contact-input textarea" 
                            rows="4" 
                            placeholder="Your great idea..." 
                            value={this.state.text}/>
                        <button
                            type="submit" 
                            className="contact-submit"  
                            onClick={this.handleFormSubmit}
                            disabled={!this.state.formValid}
                        >Send</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact