import React, { useState } from 'react';
import ProjectSidebar from './components/ProjectSidebar';
import NoProjectSelected from './components/NoProjectSelected';
import NewProject from './components/NewProject';
import SelectedProject from './components/SelectedProject';

export type ProjectId = number | null | undefined

type ProjectsState = {
  selectedProjectId: ProjectId
  projects: Project[],
  tasks: Task[]
}

export type Project = {
  id?: ProjectId
  title: string
  description: string
  dueDate: string
}

export type Task = {
  text: string
  projectId: number
  id: number
}

const App = () => {
  const [projectsState, setProjectsState] = useState<ProjectsState>({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  const handleAddTask = (task: string) => {
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: task,
        projectId: prevState.selectedProjectId ?? 0,
        id: taskId
      }

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  const handleDeleteTask = (id: number) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id)
      }
    })
  }

  const handleSelectProject = (id: number) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  const handleStartAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  const handleAddProject = (projectData: Project) => {
    setProjectsState(prevState => {
      const newProject: Project = {
        ...projectData,
        id: Math.random()
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  const handleDeleteProjct = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
      }
    })
  }

  const handleCancelAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)
  let content = selectedProject && <SelectedProject project={selectedProject} onDelete={handleDeleteProjct} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks} />

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectsState.selectedProjectId} />
      {content}
    </main>
  );
};

export default App;
