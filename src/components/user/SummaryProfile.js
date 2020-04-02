import React from 'react'

const SummaryProfile = ({ auth, profile }) => {

const photoProfile = profile.photoURL ? <img className="profile-photo" src={profile.photoURL} alt={profile.initials} /> : <img className="profile-photo" src=".unnamed.png" alt={profile.initials} />;

    return (
        <div id="card">
            <div id="blur">
                <div id="color"></div>
            </div>
            <div id="profile">
                {photoProfile}
                <h1>{profile.firstName} {profile.lastName}</h1>
                <p>Front-end Web Developer</p>
            </div>
        </div>
    )
}

export default SummaryProfile
