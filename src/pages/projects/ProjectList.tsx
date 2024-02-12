import React, { useEffect } from 'react';
import { useProjectsDispatch } from "../../context/projects/context";
import { fetchProjects } from '../../context/projects/actions';
import ProjectListItems from './ProjectListItems';

const ProjectList: React.FC = () => {
  const dispatchProjects = useProjectsDispatch();
  console.log("Project Dispatch :: -> " + dispatchProjects);
  useEffect(() => {
    fetchProjects(dispatchProjects)
  }, [])
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <ProjectListItems />
    </div>
  );
};
export default ProjectList;