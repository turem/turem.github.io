import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";

import pw_logo from "../../assets/img/about/pw_logo.jpg";
import pw_mchtr_logo from "../../assets/img/about/pw_mchtr_logo.jpg";
import tue_logo from "../../assets/img/about/tue_logo.png";

import styles from "../../assets/jss/material-kit-react/views/profilePage.js";
import typo_styles from "../../assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);
const useTypoStyles = makeStyles(typo_styles);

export default function Education() {
    const classes = useStyles();
    const typoClasses = useTypoStyles();
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
        <>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                    <img
                        alt="..."
                        src={pw_logo}
                        className={navImageClasses}
                        style={{
                            marginTop: "1em",
                        }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                    <div className={typoClasses.typo}>
                        <h3 className={typoClasses.title}>
                            Warsaw University of Technology
                        </h3>
                        <h4>2014 - 2015</h4>
                        <p>Master degree</p>
                        <p>Department of Mechatronics</p>
                        <p>Faculty of Automatic Control and Robotics</p>
                        <p>Major: Robotics</p>
                    </div>
                </GridItem>
            </GridContainer>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                    <img
                        alt="..."
                        src={tue_logo}
                        className={navImageClasses}
                        style={{
                            marginTop: "2em",
                        }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                    <div className={typoClasses.typo}>
                        <h3 className={typoClasses.title}>
                            Eindhoven University of Technology
                        </h3>
                        <h4>2014 - 2015</h4>
                        <p>Erasmus exchange on master degree</p>
                        <p>Department of Mechanical Engineering</p>
                    </div>
                </GridItem>
            </GridContainer>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                    <img
                        alt="..."
                        src={pw_mchtr_logo}
                        className={navImageClasses}
                        style={{
                            marginTop: "1em",
                        }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                    <div className={typoClasses.typo}>
                        <h3 className={typoClasses.title}>
                            Warsaw University of Technology
                        </h3>
                        <h4>2010 - 2014</h4>
                        <p>Bachelor degree</p>
                        <p>Department of Mechatronics</p>
                        <p>Faculty of Automatic Control and Robotics</p>
                        <p>Major: Robotics</p>
                    </div>
                </GridItem>
            </GridContainer>
        </>
    );
}
