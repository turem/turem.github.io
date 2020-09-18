import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Button from "../../components/CustomButtons/Button.js";

import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";

import sollers_logo from "../../assets/img/about/sollers_logo.jpg";
import samsung_logo from "../../assets/img/about/samsung_logo.png";

import styles from "../../assets/jss/material-kit-react/views/profilePage.js";
import typo_styles from "../../assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);
const useTypoStyles = makeStyles(typo_styles);

export default function Experience() {
    const classes = useStyles();
    const typoClasses = useTypoStyles();
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
        <>
            <GridContainer justify="center">
                <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Button
                        href="http://sollers.eu"
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <img
                            alt="..."
                            src={sollers_logo}
                            className={navImageClasses}
                            style={{
                                marginTop: "1em"
                            }}
                        />
                    </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                    <div className={typoClasses.typo}>
                        <h2 className={typoClasses.title}>
                            Sollers Consulting
                        </h2>
                        <h4>Senior Developer 04.2020 - present</h4>
                        <h5>Developer 03.2019 - 04.2020</h5>

                        <p>
                            Software implementation for financial and insurance
                            industry
                        </p>
                        <p>Guidewire, gosu</p>
                        <p>Javascript, React, Python/Django</p>
                    </div>
                </GridItem>
                <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Button
                        href="https://research.samsung.com/srpol"
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <img
                            alt="..."
                            src={samsung_logo}
                            className={navImageClasses}
                            style={{
                                marginTop: "1em"
                            }}
                        />
                    </Button>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                    <div className={typoClasses.typo}>
                        <h2 className={typoClasses.title}>Samsung R&D</h2>
                        <h4>Junior Developer 09.2015 - 02.2019</h4>

                        <p>
                            <Button
                                href="https://developer.samsung.com/remote-test-lab"
                                color="transparent"
                                target="_blank"
                            >
                                Development of Samsung Remote Test Lab
                            </Button>
                        </p>
                        <p>Tizen and Android OS</p>
                        <p>C/C++, Java</p>
                    </div>
                </GridItem>
            </GridContainer>
        </>
    );
}
