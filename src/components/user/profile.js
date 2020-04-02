import React, { Component } from 'react'
import { connect } from 'react-redux'
import SummaryProfile from './SummaryProfile';
import { Redirect } from 'react-router-dom';
import ProfileUpdate from './ProfileUpdate';

class Profile extends Component {
    render() {
        const { auth, profile } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <SummaryProfile auth={auth} profile={profile} />
                    </div>
                    <div className="col s12 m6">
                        <ProfileUpdate profile={profile} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Profile)