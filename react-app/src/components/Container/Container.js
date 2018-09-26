import React, {Component} from "react";
import "./Container.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import Information from "../Information/Information";

class Container extends Component {
    render () {
        return (
            <div className="container">
                <ProfilePicture />
                <Information />
            </div>
        )
    }
} 

export default Container;
