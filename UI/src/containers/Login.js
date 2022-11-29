import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginComponent from "../components/Auth/LoginComponent";
import '../static/scss/login.scss';
import { onLogin } from "../actions/user.action";
import { connect } from "react-redux";

const Login = ({onSubmit, user}) => {
    // const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if(user && user.id){
            
            navigate("/");
        }
    });
    return (
        <div className="login-component">
            <div className="login-outer-wrapper">
                <div className="login-wrapper">
                    <div className="login-header">
                        <h2>Milk Notes</h2>
                        <hr/>
                        <h3>Login</h3>
                    </div>
                    <div className="login-body">
                        <LoginComponent onSubmit={onSubmit}/>
                        <p className="sign-up-text">If you don't have an account please <Link to={'/signup'}>SignUp Here</Link></p>
                    </div>
                    <div className="login-footer"></div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (userData) => dispatch(onLogin(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);