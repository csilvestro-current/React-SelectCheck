import React, { Component } from 'react';
import './Landing.css'
import {Link} from 'react-router-dom'
class Landing extends Component {
    state = {
        email: '',
        password: '',
        rememberEmail: false,
    };

    changeInput = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
        console.log(target)
        console.log(name)
    }
    
    render() {
        return (
            <section style={styles.container}>
                <form 
                    onSubmit={this.handleSubmit} 
                    style={styles.formcontainer}>
                    <h1>Sign in to Instabook</h1>
                    <div className="form-group">
                        <label>
                            Email: 
                            <input type="email" value={this.state.value} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Password: 
                            <input 
                                type="password" 
                                value={this.state.value} onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <input
                                name="rememberEmail"
                                type="checkbox"
                                checked={this.state.rememberEmail}
                                onChange={this.changeInput} /> 
                                    Remember email
                        </label>
                    </div>
                    <div>
                        <Link to='/Select'>
                            <button type="submit" value="Submit">Sign In </button>
                        </Link>
                        <Link to='/Select'>
                            <button type="submit" value="Submit">Sign Up </button>
                        </Link>
                    </div>
                </form>
            </section>
        );
    }
}

export default Landing;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'blue',
        height: '100vh',
        alignItems: 'center'
    },
    formcontainer: {
        display: 'flex',
        flexDirection: 'column',
        background: 'whitesmoke',
        justifyContent: 'center',
        alignItems:'center',
        padding: 20,
        borderRadius: 4,
        boxShadow: '5px 5px 10px'
    }
}