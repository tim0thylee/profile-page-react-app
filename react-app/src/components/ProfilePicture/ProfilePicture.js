import React, {Component} from "react";
import "./ProfilePicture.css";


class ProfilePicture extends Component {
    constructor (props) {
        super(props)

        console.log(this.props.cover);
    }
    render () {
    const { cover } = this.props
    return (
        <div className="profile-picture"style={cover}>
        </div>
    )
}
}

export default ProfilePicture;