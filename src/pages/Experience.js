import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Shakopee High School, Minnesota
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Minnesota Twin-Cities, Minnesota
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Summer 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Product Manager Intern, UnitedHealth Group
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Eden Prairie, MN
          </h4>
          <p>- Developed multiple tickets through <b>Jira</b> that assisted engineers in developing technical features and wrote <b>A/B
            tests</b> that accelerated production by <b>3x</b> during product life cycle.</p>
          <p>- Researched <b>100s</b> of data analytics by using <b>Adobe Analytics</b> and researching how well mobile onboarding did in
              the past. This led to making informed decisions for engineers and business stakeholders.</p>
          <p>- Provided input after researching data during meetings to discuss where the product prototype would go during
            onboarding, which saved the company <b>4 dollars</b> per user who used the product feature with over <b>147 million</b> users who go through onboarding.</p>
        </VerticalTimelineElement> 
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer, UnitedHealth Group
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Eden Prairie, MN
          </h4>
          <p>- Constructed a modern approach by integrating new UX onto the developer portal by developing a chatbot using a
            <b>React</b> framework called <b>Botonic</b>.</p>
          <p>- Developed new APIs in <b>Java SpringBoot</b> that accelerated existing production by <b>3x</b> by creating <b>SQL</b> queries to
            retrieve data through <b>Oracle</b>.</p>
          <p>- Followed company practices through CI/CD pipeline through <b>Jenkins</b> to make sure code follows company practices and to
            deploy software to production.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;