import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import School from "@material-ui/icons/School";
import Work from "@material-ui/icons/Work";
import Hobbies from "@material-ui/icons/SportsEsports";
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import Button from "../../components/CustomButtons/Button.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import NavPills from "../../components/NavPills/NavPills.js";
import Parallax from "../../components/Parallax/Parallax.js";

import profile from "../../assets/img/faces/profile.jpg";

import Education from "./Education.js";
import Experience from "./Experience.js";

import styles from "../../assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function AboutPage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    return (
        <div>
            <Header
                color="transparent"
                brand="Marcin Turemka site"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 200,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax
                small
                filter
                image={require("../../assets/img/background.jpg")}
            />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.profile}>
                                    <div>
                                        <img
                                            src={profile}
                                            alt="..."
                                            className={imageClasses}
                                        />
                                    </div>
                                    <div className={classes.name}>
                                        <h3 className={classes.title}>
                                            Marcin Turemka
                                        </h3>
                                        <h6>IT Programmer</h6>
                                        <Button
                                            justIcon
                                            link
                                            href="https://instagram.com/bjjengineer"
                                            target="_blank"
                                            className={classes.margin5}
                                        >
                                            <i className={"fab fa-instagram"} />
                                        </Button>
                                        <Button
                                            justIcon
                                            link
                                            href="https://www.linkedin.com/in/marcinturemka/"
                                            target="_blank"
                                            className={classes.margin5}
                                        >
                                            <i className={"fab fa-linkedin"} />
                                        </Button>
                                    </div>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <p>
                                Master degree in Automatic Control and Robotics.
                                Graduated from Warsaw University of Technology
                                (Poland) with 1 year spent on Eindhoven
                                University of Technology (Netherlands). Almost 5
                                years of experience in programming (C/C++, Java,
                                Javascript, Python, Gosu).{" "}
                            </p>
                        </div>
                        <GridContainer justify="center">
                            <GridItem
                                xs={12}
                                sm={12}
                                md={8}
                                className={classes.navWrapper}
                            >
                                <NavPills
                                    alignCenter
                                    color="primary"
                                    tabs={[
                                        {
                                            tabButton: "Education",
                                            tabIcon: School,
                                            tabContent: <Education />
                                        },
                                        {
                                            tabButton: "Experience",
                                            tabIcon: Work,
                                            tabContent: <Experience />
                                        },
                                        {
                                            tabButton: "Hobbies",
                                            tabIcon: Hobbies,
                                            tabContent: (
                                                <p>Nothing yet here</p>
                                                // <GridContainer justify="center">
                                                //     <GridItem
                                                //         xs={12}
                                                //         sm={12}
                                                //         md={4}
                                                //     >
                                                //         <img
                                                //             alt="..."
                                                //             src={work4}
                                                //             className={
                                                //                 navImageClasses
                                                //             }
                                                //         />
                                                //         <img
                                                //             alt="..."
                                                //             src={studio3}
                                                //             className={
                                                //                 navImageClasses
                                                //             }
                                                //         />
                                                //     </GridItem>
                                                //     <GridItem
                                                //         xs={12}
                                                //         sm={12}
                                                //         md={4}
                                                //     >
                                                //         <img
                                                //             alt="..."
                                                //             src={work2}
                                                //             className={
                                                //                 navImageClasses
                                                //             }
                                                //         />
                                                //         <img
                                                //             alt="..."
                                                //             src={work1}
                                                //             className={
                                                //                 navImageClasses
                                                //             }
                                                //         />
                                                //         <img
                                                //             alt="..."
                                                //             src={studio1}
                                                //             className={
                                                //                 navImageClasses
                                                //             }
                                                //         />
                                                //     </GridItem>
                                                // </GridContainer>
                                            )
                                        }
                                    ]}
                                />
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
