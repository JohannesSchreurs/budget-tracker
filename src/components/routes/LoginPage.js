import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';

export const LoginPage = ({ startLogin }) => {
    return (
        <div>
            <p>This is from the login page page</p>
            <button onClick={startLogin}>Log in!</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);

