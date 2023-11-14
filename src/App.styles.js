import styled from "styled-components";
import BgImg from "./assets/drawers.jpg";

const COLORS = {
    very_dark_grayish_blue: "hsl(217, 19%, 35%)",
    desaturated_dark_blue: "hsl(214, 17%, 51%)",
    grayish_blue: "hsl(212, 23%, 69%)",
    light_grayish_blue: "hsl(210, 46%, 95%)",
};

const CardWrapper = styled.div`
    max-width: 730px;
    width: 100%;

    background-color: white;
    box-shadow: 0px 40px 40px -10px rgba(201, 213, 225, 0.5);
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;
    background: url(${BgImg});
    background-size: contain;
    background-repeat: no-repeat;

    .content {
        background-color: white;
        width: 60%;
        padding: 32px 40px;
        box-sizing: border-box;
        border-radius: 0px 10px 10px 0px;
        .title {
            color: ${COLORS.very_dark_grayish_blue};
            font-size: 20px;
            font-weight: 700;
            line-height: 28px;
            margin-bottom: 12px;
        }
        .description {
            color: ${COLORS.desaturated_dark_blue};
            font-size: 13px;
            line-height: 20px;
            margin-bottom: 20px;
        }
        .author {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left {
                display: flex;
                align-items: center;
                font-size: 13px;
                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    margin-right: 16px;
                }
                .name {
                    color: ${COLORS.very_dark_grayish_blue};
                    font-weight: 700;
                    font-size: 13px;
                }
                .date {
                    color: ${COLORS.grayish_blue};
                }
            }
            .right {
                position: relative;
                cursor: pointer;
                .share {
                    height: 32px;
                    width: 32px;
                    border-radius: 50%;
                    background-color: ${COLORS.light_grayish_blue};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    path {
                        fill: ${COLORS.desaturated_dark_blue};
                    }
                }
                .tooltip {
                    display: flex;
                    align-items: center;
                    position: absolute;
                    justify-content: space-between;
                    top: -70px;
                    left: -107px;
                    padding: 18px 36px;
                    border-radius: 10px;
                    box-sizing: border-box;

                    color: white;
                    background-color: ${COLORS.very_dark_grayish_blue};
                    color: ${COLORS.grayish_blue};
                    width: 250px;

                    path {
                        color: white;
                    }
                    &::before {
                        position: absolute;
                        content: "";
                        height: 8px;
                        width: 8px;
                        background-color: ${COLORS.very_dark_grayish_blue};
                        bottom: -3px;
                        left: 50%;
                        transform: translate(-50%) rotate(45deg);
                    }
                }
            }
        }
    }
    .mobile-tooltip {
        display: none;
    }
    @media (max-width: 560px) {
        flex-direction: column;
        .content {
            padding-bottom: 10px;
        }
        .mobile-tooltip {
            z-index: 1;
            display: block;
            padding: 17px 40px;
            border-radius: 0px 0px 10px 10px;
            background-color: ${COLORS.very_dark_grayish_blue};
            color: ${COLORS.grayish_blue};
            margin-top: -66px;
            transition: all 0.3s ease;
            &.hide {
                visibility: hidden;
                opacity: 0;
                transition: all 0.3s ease;
            }
            .show {
                visibility: visible;
                opacity: 1;
                transition: all 0.3s ease;
            }

            path {
                color: white;
            }
            .tooltip {
                display: flex;
                justify-content: space-between;
                .left {
                    display: flex;
                    align-items: center;
                    svg {
                        margin-left: 20px;
                    }
                }
                .share {
                    height: 32px;
                    width: 32px;
                    border-radius: 50%;
                    background-color: ${COLORS.desaturated_dark_blue};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    path {
                        fill: white;
                    }
                }
            }
        }
        .content {
            width: 100%;
            margin-top: 60%;
            .title {
                font-size: 16px;
                font-weight: 700;
                line-height: 24px;
            }
            .description {
                margin-bottom: 32px;
            }
            .author {
                .left {
                    .name {
                        font-size: 13px;
                        font-weight: 700;
                    }
                    .date {
                        color: ${COLORS.grayish_blue};
                    }
                }
                .right {
                    .tooltip {
                        display: none;
                    }
                }
            }
        }
    }
`;

export default CardWrapper;
