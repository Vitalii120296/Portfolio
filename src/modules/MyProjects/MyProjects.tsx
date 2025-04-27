import s from './MyProjects.module.scss';
import ProjectCard from './ProjectCard/ProjectCard';


export const MyProjects = () => {
  return (
    <div className={s.projects}>
      <ProjectCard />
    </div>
  )
}
