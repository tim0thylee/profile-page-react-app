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
                        <h1>Kevin Hyun-Suk Kim</h1>
                        <button>Follow</button>
                    </div>
                    <div className="information-paragraph">
                        <p className={ this.state.toggle ? "end" : "start"}>
                            Kevin is a certified DPT and passionate learner. His favorite sport is soccer, though he loves many types of sports.
                            He has written many articles to share his vast knowledge and experience as a physical therapist and athlete. Feel free
                            to check out some of his top articles below. If you find his articles helpful, make sure to follow his profile so that
                            you will be the first to know about any new articles or fitness programs in the future. 
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