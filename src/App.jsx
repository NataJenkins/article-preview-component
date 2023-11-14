import { useState } from "react";
import CardWrapper from "./App.styles";
import Michelle from "./assets/avatar-michelle.jpg";
import useOutsideClick from "./customHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faPinterest,
    faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

import "./_base.scss";

function App() {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const handleClickOutside = () => {
        setIsTooltipVisible(false);
    };
    const ref = useOutsideClick(handleClickOutside);
    return (
        <main>
            <div className="container">
                <CardWrapper>
                    <div className="content">
                        <h1 className="title">
                            Shift the overall look and feel by adding these
                            wonderful touches to furniture in your home
                        </h1>
                        <p className="description">
                            Ever been in a room and felt like something was
                            missing? Perhaps it felt slightly bare and
                            uninviting. I’ve got some simple tips to help you
                            make any room feel complete.
                        </p>
                        <div className="author">
                            <div className="left">
                                <div className="author-avatar">
                                    <img src={Michelle} alt="" />
                                </div>
                                <div className="details">
                                    <h2 className="name">Michelle Appleton</h2>
                                    <p className="date">28 Jun 2020</p>
                                </div>
                            </div>
                            <div className="right" ref={ref}>
                                {isTooltipVisible && (
                                    <span className="tooltip">
                                        SHARE{" "}
                                        <FontAwesomeIcon
                                            icon={faSquareFacebook}
                                        />
                                        <FontAwesomeIcon icon={faTwitter} />
                                        <FontAwesomeIcon
                                            icon={faPinterest}
                                        />{" "}
                                    </span>
                                )}

                                <div
                                    className="share"
                                    onClick={() => setIsTooltipVisible(true)}
                                >
                                    <FontAwesomeIcon icon={faShare} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`mobile-tooltip ${
                            isTooltipVisible ? "show" : "hide"
                        }`}
                    >
                        <span className="tooltip">
                            <div className="left">
                                SHARE{" "}
                                <FontAwesomeIcon icon={faSquareFacebook} />
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faPinterest} />{" "}
                            </div>
                            <div className="right">
                                <div
                                    className="share"
                                    onClick={() =>
                                        setIsTooltipVisible(
                                            !setIsTooltipVisible
                                        )
                                    }
                                >
                                    <FontAwesomeIcon icon={faShare} />
                                </div>
                            </div>
                        </span>
                    </div>
                </CardWrapper>
            </div>
        </main>
    );
}

export default App;
