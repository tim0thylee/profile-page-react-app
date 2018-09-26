import  React, {Component } from "react";
import "./Information.css";

class Information extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggle: false
        }
        this.toggle = this.toggle.bind(this);

    }

    toggle = () => {
    this.setState({toggle: !this.state.toggle});
    }

    render(){
        return (
            <div className="information">
                <div className="profile-information">
                    <div className="profile-heading">
                        <h1>James Galloway</h1>
                        <button>Follow</button>
                    </div>
                    <div className="information-paragraph">
                        <p className={ this.state.toggle ? "end" : "start"}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </div>
                <div className="workout-articles">
                    <div className="workout-heading">
                        <h2>Top Articles</h2>
                        <button onClick={this.toggle}>See All</button>
                    </div>
                    <div className="workout-list">
                    </div>
                </div>
            </div>
        )
    }
}
  

export default Information;