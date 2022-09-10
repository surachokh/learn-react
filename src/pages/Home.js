import React from "react";
import styled from "styled-components";
import {
  Contact,
  EducationDetail,
  FrameworkSkillContent,
  KBTGDetail,
  PersonalDetail,
  ProgrammingSkillContent,
  SCBTechX,
  Skooldio,
  SoftSkillContent,
} from "../common/Content";
import Card from "../components/Card";
import ContactCard from "../components/ContactCard";
import ListCard from "../components/ListCard";
import ParagraphCard from "../components/ParagraphCard";

const SkillWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 16px;
`;

const WorkWrapper = styled(SkillWrapper)`
  flex-direction: column;
  text-align: center;
  padding: 24px;
  border: 1px solid #eee;
  border-radius: 16px;
  box-shadow: 3px 3px 10px #eeeeee;
`;

const Vl = styled.div`
  border-left: 1px solid #ccc;
  height: 400px;
`;

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
        <ParagraphCard
          img="graduated_picture.jpeg"
          contents={EducationDetail}
          title="Bachelor of Engineering"
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
          <ListCard contents={KBTGDetail} title="KBTG" img="KBTG.png" />
          <Vl />
          <ListCard contents={SCBTechX} title="SCB Tech X" img="scb.jpeg" />
          <Vl />
          <ListCard contents={Skooldio} title="Skooldio" img="skooldio.png" />
        </SkillWrapper>
      </WorkWrapper>
      <ContactCard img="portrait.jpg" contents={Contact} title="Contact Me" />
    </>
  );
}
