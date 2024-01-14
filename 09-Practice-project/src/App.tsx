import React, { useEffect, useState } from 'react';
import LeftMenu from './components/LeftMenu';
import DefaultPage from './components/DefaultPage';
import CreateProjectPage from './components/CreateProjectPage';
import ProjectPage from './components/ProjectPage';
import _cloneDeep from 'lodash/cloneDeep'

export enum Page {
  Default,
  CreateProject,
  Project,
}

export type PageType = {
  page: Page;
  idx?: number;
};

export type Project = {
  title: string;
  description: string;
  dueDate: string;
  tasks: string[];
};

const App = () => {
  const [nowPage, setNowPage] = useState<PageType>({ page: Page.Default });
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects([
      {
        title: '나이러ㅣ나얼',
        description: 'sdfsdf',
        dueDate: '2023-01-10',
        tasks: [],
      },
    ]);
  }, []);

  const handlePageMove = (page: Page, idx?: number) => {
    setNowPage({ page: page, idx: idx });
  };

  const handleDeleteProject = (projectIndex: number) => {
    setProjects(prev => {
      return _cloneDeep<Project[]>(prev).filter((project, i) => {
        return projectIndex !== i
      })
    })
  }

  const addProject = (project: Project) => {
    setProjects((prev) => [...prev, project]);
  };

  const addTask = (projectIndex: number, task: string) => {
    setProjects((prev) => {
      const list = _cloneDeep<Project[]>(prev)
      list[projectIndex].tasks = [...list[projectIndex].tasks, task]
      return list
    })
    // setProjects((prev) => {
    //   return [
    //     ...prev.map((row, i) => {
    //       const tasks = [...row.tasks];
    //       if (projectIndex === i) {
    //         tasks.push(task);
    //       }
    //       return {
    //         title: row.title,
    //         description: row.description,
    //         dueDate: row.dueDate,
    //         tasks: [...tasks],
    //       };
    //     }),
    //   ];
    // });
  };

  const handleClearTask = (projectIndex: number, taskIndex: number) => {
    setProjects((prev) => {
      const list = _cloneDeep<Project[]>(prev)
      list[projectIndex].tasks = list[projectIndex].tasks.filter((task, i) => {
        return taskIndex !== i
      })
      return list
    })
  }

  return (
    <div className="flex mt-12">
      <LeftMenu onPageMove={handlePageMove} projects={projects} />
      {nowPage.page === Page.Default && (
        <DefaultPage onPageMove={handlePageMove} />
      )}
      {nowPage.page === Page.CreateProject && (
        <CreateProjectPage
          onPageMove={handlePageMove}
          addProject={addProject}
        />
      )}
      {nowPage.page === Page.Project && (
        <ProjectPage
          onPageMove={handlePageMove}
          onDeleteProject={handleDeleteProject}
          nowPage={nowPage}
          projects={projects}
          addTask={addTask}
          onClearTask={handleClearTask}
        />
      )}
    </div>
  );
};

export default App;
