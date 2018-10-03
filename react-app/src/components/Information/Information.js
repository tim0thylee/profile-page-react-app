import  React, {Component } from "react";
import "./Information.css";
import list1 from "../../images/list1.jpg";
import list2 from "../../images/list2.jpg";
import list3 from "../../images/list3.jpg";
import list4 from "../../images/list4.jpg";
import ShareButton from 'react-social-share-buttons';

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
                        <div className="follow-div">
                            <ShareButton
                                compact
                                socialMedia={'facebook'}
                                url={"facebook.com"}
                                media={"https://imgs.xkcd.com/comics/error_code.png"}
                                text="I am following Kevin Kim!"
                            />
                            <ShareButton
                                compact
                                socialMedia={'twitter'}
                                url={"twitter.com"}
                                media={"https://imgs.xkcd.com/comics/error_code.png"}
                                text="I'm following Kevin Kim!"
                            />
                        </div>
                    </div>
                    <div className="information-paragraph">
                        <p className={ this.state.toggle ? "end" : "start"}>
                            Kevin is a certified DPT and passionate learner. His favorite sport is soccer, though he loves many types of sports.
                            He has written many articles to share his vast knowledge and experience as a physical therapist and athlete. Feel free
                            to check out some of his top articles below. If you find his articles helpful, make sure to follow his profile so that
                            you will be the first to know about any new articles or fitness programs in the future. 
                        </p>
                        <button className="more-button" onClick={this.toggle}>{this.state.toggle ? "Less" : "More"}</button>
                    </div>
                </div>
                <div className="workout-articles">
                    <div className="workout-heading">
                        <h2>Top Articles</h2>
                        <button>See All</button>
                    </div>
                    <div className="workout-list">
                        <ul>
                            <li onClick={() => this.props.changeImage(list1)}>
                                <div>
                                    <div className="list-items list-1" >
                                    </div>
                                    <p>
                                        Top 5 Ways to Improve Deadlift Gains
                                    </p>
                                </div>
                            </li>
                            <li onClick={() => this.props.changeImage(list2)}>
                                <div>
                                <div className="list-items list-2">
                                </div>
                                <p>
                                    Yoga for Faster Recovery
                                </p>
                                </div>
                            </li>
                            <li onClick={() => this.props.changeImage(list3)}>
                            <div>
                                <div className="list-items list-3">
                                </div>
                                <p>
                                    Focusing on the Endgame
                                </p>
                            </div>
                            </li>
                            <li onClick={() => this.props.changeImage(list4)}>
                            <div>
                                <div className="list-items list-4">
                                </div>
                                <p>
                                    Meal Prep Ideas and Tips for Optimal Nutrition
                                </p>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
  

export default Information;