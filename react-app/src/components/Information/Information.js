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
                        <button className="more-button" onClick={this.toggle}>More</button>
                    </div>
                </div>
                <div className="workout-articles">
                    <div className="workout-heading">
                        <h2>Top Articles</h2>
                        <button>See All</button>
                    </div>
                    <div className="workout-list">
                        <ul>
                            <li>
                                <a href="listarticle">
                                    <div className="list-items list-1">
                                    </div>
                                    <p>
                                        Top 5 Ways to Improve Deadlift Gains
                                    </p>
                                </a>
                            </li>
                            <li>
                            <a href="listarticle">
                                <div className="list-items list-2">
                                </div>
                                <p>
                                    Yoga for Faster Recovery
                                </p>
                            </a>
                            </li>
                            <li>
                            <a href="listarticle">
                                <div className="list-items list-3">
                                </div>
                                <p>
                                    Focusing on the Endgame
                                </p>
                            </a>
                            </li>
                            <li>
                            <a href="listarticle">
                                <div className="list-items list-4">
                                </div>
                                <p>
                                    Meal Prep Ideas and Tips for Optimal Nutrition
                                </p>
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
  

export default Information;