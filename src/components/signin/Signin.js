import React from 'react';

class Signin extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            signinemail: '',
            signinpass: ''
        }
    }

    onemailchange = (event) =>{
        this.setState({signinemail: event.target.value})
    }

    onpasschange = (event) =>{
        this.setState({signinpass: event.target.value})
    }

    onsubmitsignin = () =>{
        fetch('http://localhost:3001/signin',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signinemail,
                pass: this.state.signinpass
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
                this.props.loaduser(user);
                this.props.onroutechange('home');
            }
        })
    
    }

    render(){
        return(
            <article className="br2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <div className="pa4 black-80">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input onChange={this.onemailchange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input onChange={this.onpasschange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                    </div>
                    </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={this.onsubmitsignin}/>
                    </div>
                    <div className="lh-copy mt3">
                    <p onClick={() => this.props.onroutechange('register')} className="f6 link dim black db pointer">Register</p>
                    </div>
                </div>
                </div>
            </article>
            );
    }
    
}

export default Signin;