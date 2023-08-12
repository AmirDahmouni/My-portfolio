import { FC, memo } from 'react';

import { education, experience, internships, SectionId, skills, personnalProjects } from '../../../data/data';
import { educationFr, experienceFr, internshipsFr,SectionIdFr, skillsFr, personnalProjectsFr } from '../../../data/dataFr';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import PersonnalProjectsSection from './PersonnalProjectsSection';
import { SkillGroup } from './Skills';
import TimelineItem from './TimelineItem';
import ItemPersonnalProject from './ItemPersonnalProject';
import useTranslation from 'next-translate/useTranslation'

const Resume: FC = memo(() => {
  const { t, lang } = useTranslation("common")
  
  const educationData = lang == "fr" ? educationFr : education
  const experienceData = lang == "fr" ? experienceFr : experience
  const internshipsData = lang == "fr" ? internshipsFr : internships
  const skillsData = lang == "fr" ? skillsFr : skills
  const personnalProjectsData = lang =="fr" ? personnalProjectsFr : personnalProjects

  const sectionData = lang =="fr" ? SectionIdFr : SectionId

  return (
    <Section className="bg-neutral-100" sectionId={sectionData.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title={t("education")}>
          {educationData.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <PersonnalProjectsSection title={t("PersonnalProjects")}>
          {personnalProjectsData.map((item, index) => (
            <ItemPersonnalProject item={item} key={`${item.title}-${index}`} />
          ))}
        </PersonnalProjectsSection>
        <ResumeSection title={t("Internships")}>
          {internshipsData.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={t("Work")}>
          {experienceData.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={t("Skills")}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skillsData.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
