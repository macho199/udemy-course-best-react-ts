import React, { useState } from 'react';
import { Page, Project } from '../App';
import Main from './Main';
import Button from './Button';

type DefaultPageProps = {
  onPageMove: (page: Page) => void
  addProject: (project: Project) => void
};

const CreateProjectPage = ({ onPageMove, addProject }: DefaultPageProps) => {
  const [project, setProject] = useState<Project>({title: '', description: '', dueDate: '', tasks: []})

  const handleOnChange = (type: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setProject(prev => {
      return {...prev, [type]: e.target.value}
    })
  }
  
  const handleCancel = () => {
    onPageMove(Page.Default);
  };

  const handleSave = () => {
    if (project.title === '') {
      alert('제목을 입력해주세요.');
      return;
    }

    if (project.description === '') {
      alert('내용을 입력해주세요.');
      return;
    }
    
    if (project.dueDate === '') {
      alert('날짜를 입력해주세요.');
      return;
    }

    addProject(project)
    onPageMove(Page.Default)
  };

  return (
    <Main>
      <div className="text-right">
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleSave} point>
          Save
        </Button>
      </div>
      <div className="mt-5">
        <label className="block font-bold">Title</label>
        <input
          type="text"
          className="bg-zinc-300 w-full h-10 border-b-2 border-zinc-400"
          onChange={e => {handleOnChange('title', e)}}
          value={project.title}
        />
      </div>
      <div className="mt-5">
        <label className="block font-bold">DESCRIPTION</label>
        <input
          type="text"
          className="bg-zinc-300 w-full h-10 border-b-2 border-zinc-400"
          onChange={e => {handleOnChange('description', e)}}
          value={project.description}
        />
      </div>
      <div className="mt-5">
        <label className="block font-bold">DUE DATE</label>
        <input
          type="date"
          className="bg-zinc-300 w-full h-10 border-b-2 border-zinc-400"
          onChange={e => {handleOnChange('dueDate', e)}}
          value={project.dueDate}
        />
      </div>
    </Main>
  );
};

export default CreateProjectPage;
