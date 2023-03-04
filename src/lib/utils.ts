import type { EducationItem, ExperienceItem, ProjectItem, Resume, sectionType, SkillItem } from '../app';
import { resume } from './store';
const blankEducation: EducationItem = {
	id: '',
	area: '',
	degree: '',
	institution: '',
	start_date: '',
	end_date: '',
	grade: '',
	summary: '',
	url: '',
};
const blankExperience: ExperienceItem = {
	id: '',
	name: '',
	position: '',
	start_date: '',
	end_date: '',
	summary: '',
	url: '',
};
const blankSkill: SkillItem = {
	id: '',
	name: '',
};

const blankProject: ProjectItem = {
	description: '',
	end_date: '',
	id: '',
	name: '',
	start_date: '',
	summary: '',
	url: '',
};

const get_min_data = (name: string) =>{
  return {
    name,
    id: name,
    visible: true
  }
}
export const get_blank_resume = (): Resume => {
	const resume: Resume = {
		id: Date.now(),
		name: 'untitled',
		settings: {
			font: 'Dosis',
		},
    sections: {
      experience : {
        ...get_min_data("experience"),
        type: "experience",
        items : [blankExperience]

      },
      education: {
        ...get_min_data("education"),
        type: "education",
        items: [blankEducation]
      }
    }
	};
	return resume;
};


export const removeItem = (section: sectionType, id: string) => {
	resume.update((val) => {
		val.sections[section]?.items?.filter((item) => {
			item.id !== id;
		});
		return val;
	});
};

export const addItem = (sectionType: sectionType, name: sectionType | '' = '') => {
	//sectionName can be different than sectiontype in case of custom type
	const sectionName: sectionType = name === '' ? sectionType : name;
	const item: Record<sectionType, Record<string,any>> = {
		education: blankEducation,
		experience: blankExperience,
		skills: blankSkill,
		projects: blankProject,
		basics: {},
		custom_info: {},
		custom_pills: {},
		certificates: {},
		interests: {},
	};
	resume.update((val) => {
		val.sections[sectionName].items.push(item);
		return val;
	});
};
