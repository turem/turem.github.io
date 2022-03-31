import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import FiberSmartRecordIcon from '@material-ui/icons/FiberSmartRecord';
import Schedule from "@material-ui/icons/Schedule";
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import NavPills from "../../components/NavPills/NavPills.js";
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "../../assets/jss/material-kit-react/views/profilePage.js";

import DoublePendulum from "./DoublePendulum.js";

const useStyles = makeStyles(styles);

export default function Learning(props) {
    const classes = useStyles();
    const { ...rest } = props;
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
                                    <h3 className={classes.title}>
                                        Learning JS
                                        </h3>
                                </div>
                            </GridItem>
                        </GridContainer>
                        <div className={classes.description}>
                            <p>
                                In this section I would like to share with you a very small JS educational projects).{" "}
                            </p>
                        </div>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={12} lg={12}>
                                <NavPills
                                    color="rose"
                                    horizontal={{
                                        tabsGrid: { xs: 2, sm: 2, md: 2 },
                                        contentGrid: { xs: 8, sm: 12, md: 8 }
                                    }}
                                    tabs={[
                                        {
                                            tabButton: "Double Pendulum",
                                            tabIcon: FiberSmartRecordIcon,
                                            tabContent: <DoublePendulum />
                                        },
                                        {
                                            tabButton: "Schedule",
                                            tabIcon: Schedule,
                                            tabContent: (
                                                <span>
                                                    <p>
                                                        Efficiently unleash cross-media information without
                                                        cross-media value. Quickly maximize timely
                                                        deliverables for real-time schemas.
                        </p>
                                                    <br />
                                                    <p>
                                                        Dramatically maintain clicks-and-mortar solutions
                                                        without functional solutions. Dramatically visualize
                                                        customer directed convergence without revolutionary
                                                        ROI. Collaboratively administrate empowered markets
                                                        via plug-and-play networks. Dynamically procrastinate
                                                        B2C users after installed base benefits.
                        </p>
                                                </span>
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
