import React, {Component} from "react";
import "./Container.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import Information from "../Information/Information";
import profile1 from "../../images/profile1.jpg";


class Container extends Component {
    constructor (props) {
        super(props)

        this.state = {
            currentImage: profile1
        }
        this.changeImageFunction = this.changeImageFunction.bind(this);
    }

    changeImageFunction (image) {
        // alert(image)
         this.setState({currentImage: image});
    }

    render () {
        return (
            <div className="container">
                <ProfilePicture  cover={{backgroundImage: `url(${this.state.currentImage})`}}/>
                <Information changeImage={this.changeImageFunction} />
            </div>
        )
    }
} 

export default Container;
