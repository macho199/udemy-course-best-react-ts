import React, { useRef } from 'react';
import { Page, PageType, Project } from '../App';
import Main from './Main';
import Button from './Button';

type DefaultPageProps = {
  onPageMove: (page: Page) => void
  nowPage: PageType
  projects: Project[]
  addTask: (projectIndex: number, task: string) => void
  onDeleteProject: (projectIndex: number) => void
  onClearTask: (projectIndex: number, taskIndex: number) => void
};

const ProjectPage = ({
  onPageMove,
  nowPage,
  projects,
  addTask,
  onDeleteProject,
  onClearTask
}: DefaultPageProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const project = projects[nowPage.idx as number];
  
  const handleAddTask = () => {
    if (!inputRef.current || !inputRef.current.value) return
    addTask(nowPage.idx || 0, inputRef.current.value)
    inputRef.current.value = ''
  }

  const handleClearTask = (taskIndex: number) => {
    nowPage.idx !== undefined && onClearTask(nowPage.idx, taskIndex)
  }

  const handleDeleteProject = () => {
    nowPage.idx !== undefined && onDeleteProject(nowPage.idx)
    onPageMove(Page.Default)
  }

  return (
    <Main>
      <div className="flex">
        <h1>{project.title}</h1>
        <Button onClick={handleDeleteProject}>Delete</Button>
      </div>
      <p className="mt-5">{project.dueDate}</p>
      <p className="mt-5">{project.description}</p>
      <div className="mt-5 border-b-2 border-zinc-600"></div>
      <div className="mt-5">
        <h2>Tasks</h2>
        <div>
          <input ref={inputRef} type="text" className="border-2 border-zinc-600" />
          <Button onClick={handleAddTask}>Add Task</Button>
        </div>
        <div className="mt-5">
          {project.tasks.length === 0 && <>This project does not have any tasks yet.</>}
          {project.tasks.length > 0 && (
            <ul>
              {project.tasks.map((task, i) => {
                return <li key={i}>{task}<Button onClick={() => {handleClearTask(i)}} point>Clear</Button></li>;
              })}
            </ul>
          )}
        </div>
      </div>
    </Main>
  );
};

export default ProjectPage;
