import React from 'react'
import PropTypes from 'prop-types'
import classes from './ProjectPage.scss'

const ProjectPage = ({ params, project }) => (
  <div className={classes.container}>
    <h2>Project Container</h2>
    <h3>{project.name}</h3>
    <h4>{project.screenname}</h4>
    <pre>Project Key: {params.projectname}</pre>
    <pre>{JSON.stringify(project, null, 2)}</pre>
  </div>
)

ProjectPage.propTypes = {
  project: PropTypes.object,
  params: PropTypes.object.isRequired
}

export default ProjectPage
