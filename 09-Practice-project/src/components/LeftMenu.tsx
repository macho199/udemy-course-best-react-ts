import React from 'react';
import { Page, Project } from '../App';

type DefaultPageProps = {
  onPageMove: (page: Page, index?: number) => void
  projects: Project[]
}

const LeftMenu = ({ onPageMove, projects }: DefaultPageProps) => {
  const handleAddProjectClick = () => {
    onPageMove(Page.CreateProject)
  }

  const handleProjectClick = (index: number) => {
    onPageMove(Page.Project, index)
  }

  return (
    <div className="flex-none w-80 bg-slate-800 text-white h-screen pt-14 px-9 rounded-r-2xl">
      <div className="text-2xl font-bold">YOUR PROJECTS</div>
      <div className="mt-6">
        <button className="p-3 bg-slate-500 rounded" onClick={handleAddProjectClick}>+ Add Project</button>
      </div>
      <ul className="mt-10">
        {projects && projects.map((project, i) => {
          return <li key={i}><button className="w-full px-4 py-2 hover:bg-slate-700 text-left" onClick={() => {handleProjectClick(i)}}>{project.title}</button></li>
        })}
      </ul>
    </div>
  );
};

export default LeftMenu;
