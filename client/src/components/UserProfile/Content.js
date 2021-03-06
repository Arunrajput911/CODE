import React, { useEffect } from "react";

const Content = (props) => {
  return (
    <div className="content-container">
      <div className="ll">
        <div className=" l container ">
          <div className="side1">
            {props.user.about && props.user.about.length > 0 && (
              <div className="common">
                <div className="mainHeading">
                  <h2>
                    <i className="fas icon fa-user"></i>
                    About me
                  </h2>
                </div>
                <hr />

                <p>{props.user.about}</p>
              </div>
            )}
            {/* education */}

            {props.user.academics && props.user.academics.length > 0 && (
              <div className="common education">
                <div className="mainHeading">
                  <h2>
                    <i className="fas fa-university icon"></i>
                    Education
                  </h2>
                </div>

                <hr />
                {/* timeline */}

                <div className="vtl">
                  <div className="event">
                    <h5>
                      <span style={{ float: "left" , alignItems: "center" }}>
                        {props.user.academics &&
                          props.user.academics.length > 0 &&
                          props.user.academics[0].college}
                      </span>{" "}
                      <span className="year" style={{ float: "right" , alignItems: "center"}}>
                        {props.user.academics &&
                          props.user.academics.length > 0 &&
                          props.user.academics[0].year}
                      </span>
                    </h5>
                    <br />
                    <div className="post">
                      <h5>
                        {props.user.academics &&
                          props.user.academics.length > 0 &&
                          props.user.academics[0].degree}
                      </h5>
                    </div>
                    {/*<p className="etxt">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                    nihil architecto adipisci quibusdam, In nihil architecto
                    adipisci quibusdam{" "}
                      </p>*/}
                  </div>
                  <div className="event">
                    <h5>
                      <span style={{ float: "left"}}>
                        {props.user.academics &&
                          props.user.academics.length > 0 &&
                          props.user.academics[1].college}
                      </span>{" "}
                      <span className="year" style={{ float: "right"} }>
                        {props.user.academics &&
                          props.user.academics.length > 0 &&
                          props.user.academics[1].year}
                      </span>
                    </h5>
                    <br />
                    <div className="post">
                      <h5>
                        {props.user.academics &&
                          props.user.academics.length > 0 &&
                          props.user.academics[1].degree}
                      </h5>
                    </div>
                    <p className="etxt">
                      {/*<p className="etxt">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                    nihil architecto adipisci quibusdam, In nihil architecto
                    adipisci quibusdam{" "}
                      </p>*/}
                    </p>
                  </div>
                  <div className="event">
                    <h5>
                      <span style={{ float: "left" , alignItems: "center"}}>
                        {props.user.academics &&
                          props.user.academics.length > 0 &&
                          props.user.academics[2].college}
                      </span>{" "}
                      <span className="year" style={{ float: "right" , alignItems: "center" }}>
                        {props.user.academics &&
                          props.user.academics.length > 0 &&
                          props.user.academics[2].year}
                      </span>
                    </h5>
                    <br />
                    <div className="post">
                      <h5>
                        {props.user.academics &&
                          props.user.academics.length > 0 &&
                          props.user.academics[2].degree}
                      </h5>
                    </div>
                    <p className="etxt">
                      {/*<p className="etxt">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                    nihil architecto adipisci quibusdam, In nihil architecto
                    adipisci quibusdam{" "}
                      </p>*/}
                    </p>
                  </div>
                </div>

                {/* end */}
              </div>
            )}
            {/* Hobbies */}
            {props.user.interest && props.user.interest.preference1.length > 0 && (
              <div className="common hobbies">
                <div className="mainHeading">
                  <h2>
                    <i class="fas fa-star icon"></i>
                    hobbies & interest
                  </h2>
                </div>

                <hr />

                {props.user.interest && (
                  <ul className="hobbiesList">
                    {props.user.interest.preference1 &&
                      props.user.interest.preference1.length > 0 && (
                        <li>
                          <h5>{props.user.interest.preference1}</h5>
                        </li>
                      )}

                    {props.user.interest.preference2 &&
                      props.user.interest.preference2.length > 0 && (
                        <li>
                          <h5>{props.user.interest.preference2}</h5>
                        </li>
                      )}

                    {props.user.interest.preference3 &&
                      props.user.interest.preference3.length > 0 && (
                        <li>
                          <h5>{props.user.interest.preference3}</h5>
                        </li>
                      )}
                  </ul>
                )}
              </div>
            )}
          </div>
          {/* side 1 ends here */}

          {props.user.programmingLanguages &&
            props.user.programmingLanguages.length > 0 && (
              <div className="side2">
                {/* skills */}
                <div className="common Skills">
                  <div className="mainHeading ">
                    <h2>
                      <i className="fas icon fa-chart-bar"></i>
                      Skills
                    </h2>
                  </div>

                  <hr />

                  <div className="tab_h">
                    {props.user.programmingLanguages &&
                      props.user.programmingLanguages.map((da) => (
                        <span className="round-tab_h">{da.name}</span>
                      ))}
                    {props.user.webTechnologies &&
                      props.user.webTechnologies.map((da) => (
                        <span className="round-tab_h">{da.name}</span>
                      ))}
                    {props.user.webFrameworks &&
                      props.user.webFrameworks.map((da) => (
                        <span className="round-tab_h">{da.name}</span>
                      ))}
                    {props.user.dbms &&
                      props.user.dbms.map((da) => (
                        <span className="round-tab_h">{da.name}</span>
                      ))}
                    {props.user.technologies &&
                      props.user.technologies.map((da) => (
                        <span className="round-tab_h">{da.name}</span>
                      ))}
                    {props.user.operatingSystem &&
                      props.user.operatingSystem.map((da) => (
                        <span className="round-tab_h">{da.name}</span>
                      ))}
                  </div>
                </div>
                {/*experience  */}
                {props.user.internships && props.user.internships.length > 0 && (
                  <div className="common experience">
                    <div className="mainHeading">
                      <h2>
                        <i class="fas fa-tools icon"></i>
                        experience
                      </h2>
                    </div>
                    <hr />
                    {/* timeline */}

                    <div className="vtl">
                      <div className="event">
                        <h5>
                          {props.user.internships &&
                            props.user.internships.map((da) => (
                              <span style={{ float: "left" , alignItems: "center"}}>
                                {da.title}
                                <span
                                  className="year"
                                  style={{ float: "right" , alignItems: "center"}}
                                >
                                  {da.type}
                                </span>
                              </span>
                            ))}
                        </h5>
                        <br />
                      </div>
                    </div>
                  </div>
                )}
                {props.user.projects && props.user.projects.length > 0 && (
                  <div className="common experience">
                    <div className="mainHeading">
                      <h2>
                        <i class="fas fa-tools icon"></i>
                        Projects
                      </h2>
                    </div>

                    <hr />
                    {/* timeline */}

                    <div className="vtl">
                      <div className="event">
                        <h5>
                          {props.user.projects &&
                            props.user.projects.map((da) => (
                              <span style={{ float: "left" , alignItems: "center" }}>
                                {da.name}
                                <span
                                  className="year"
                                  style={{ float: "right" , alignItems: "center" }}
                                >
                                  {da.type}
                                </span>
                              </span>
                            ))}
                        </h5>
                        <br />
                      </div>
                    </div>
                  </div>
                )}
                {props.user.trainings && props.user.trainings.length > 0 && (
                  <div className="common experience">
                    <div className="mainHeading">
                      <h2>
                        <i class="fas fa-tools icon"></i>
                        Trainings
                      </h2>
                    </div>
                    <hr />
                    {/* timeline */}

                    <div className="vtl">
                      <div className="event">
                        <h5>
                          {props.user.trainings &&
                            props.user.trainings.map((da) => (
                              <span style={{ float: "left" , alignItems: "center"}}>
                                {da.name}
                                <span
                                  className="year"
                                  style={{ float: "right", alignItems: "center" }}
                                >
                                  {da.credentials}
                                </span>
                              </span>
                            ))}
                        </h5>
                        <br />
                      </div>
                    </div>
                  </div>
                )}
                {/* Awards */}
                {props.user.achievements &&
                  props.user.achievements.length > 0 &&
                  props.user.achievements[0].length > 0 && (
                    <div className="common awards">
                      <div className="mainHeading">
                        <h2>
                          {" "}
                          <i className="fas icon trophy fa-trophy"></i>
                          Awards
                        </h2>
                      </div>

                      <hr />

                      <ul className="rewardList">
                        {props.user.achievements &&
                          props.user.achievements.length > 0 &&
                          props.user.achievements.map((da) => {
                            console.log(da.length);
                            if (da.length > 0) {
                              return <li>{da}</li>;
                            }
                          })}
                      </ul>
                    </div>
                  )}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Content;
