import React from "react";
import styled from "styled-components";
import {
  EducationDetail,
  FrameworkSkillContent,
  KBTGDetail,
  PersonalDetail,
  ProgrammingSkillContent,
  SCBTechX,
  Skooldio,
  SoftSkillContent,
  Work,
} from "../common/Content";
import Card from "../components/Card";
import ListCard from "../components/ListCard";
import "./Home.css";

const SkillWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  flex-grow: 1;
`;

const WorkWrapper = styled(SkillWrapper)`
  flex-direction: column;
  text-align: center;
  padding: 24px;
  border: 1px solid #dddddd;
  border-radius: 16px;
  box-shadow: 3px 3px 10px #eeeeee;
`;

const Vl = styled.div`
  border-left: 1px solid #ccc;
  height: 200px;
`;

// const HandleClick = () => {
//   window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
// };

export default function Home() {
  return (
    <>
      <Card img="profile_picture.png" content={PersonalDetail} border />
      <SkillWrapper>
        <ListCard
          border
          contents={ProgrammingSkillContent}
          title="Programming Skill"
        />
        <ListCard
          border
          contents={FrameworkSkillContent}
          title="Framework Skill"
        />
        <ListCard border contents={SoftSkillContent} title="Soft Skill" />
      </SkillWrapper>
      <SkillWrapper>
        <ListCard
          title="Bachelor of Engineering"
          img="graduated_picture.jpeg"
          contents={EducationDetail}
          border
        />
      </SkillWrapper>
      <WorkWrapper>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "600",
            marginBottom: "24px",
            color: "#098100",
          }}
        >
          Work Experiences
        </div>
        <SkillWrapper>
          <ListCard contents={KBTGDetail} title="KBTG" />
          <Vl />
          <ListCard contents={SCBTechX} title="SCB Tech X" />
          <Vl />
          <ListCard contents={Skooldio} title="Skooldio" />
        </SkillWrapper>
      </WorkWrapper>
    </>
  );
}
