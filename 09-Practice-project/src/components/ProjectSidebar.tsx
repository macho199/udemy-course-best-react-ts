import React from 'react';
import Button from './Button';
import { Project, ProjectId } from '../App';
import tw from 'twin.macro'

type ProjectSideBarProps = {
  onStartAddProject: () => void;
  projects: Project[];
  onSelectProject: (id: number) => void;
  selectedProjectId: ProjectId;
};

const ProjectSidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}: ProjectSideBarProps) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id ?? 0)}
                css={[tw`w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800`, project.id === selectedProjectId ? tw`bg-stone-800 text-stone-200` : '' ]}
              >
                {project.title}
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  );
};

export default ProjectSidebar;
