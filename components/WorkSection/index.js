import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import WorkCard from '../WorkCard';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';

const Section = styled.section`
  padding: 2rem 1rem;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    position: absolute;
    width: 100px;
    height: 4px;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(90deg, #00f2fe, #4facfe);
    border-radius: 2px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
  padding: 0.5rem;
  justify-items: center;
`;

const GitHubLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #4facfe;
  text-decoration: none;
  font-size: 1.1rem;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(79, 172, 254, 0.1);
  border: 1px solid rgba(79, 172, 254, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(79, 172, 254, 0.2);
    transform: translateY(-2px);
  }
`;

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const WorkSection = ({ projects }) => {
  return (
    <Section>
      <Container>
        <Title
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Featured Projects
        </Title>
        <Grid>
          {projects.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </Grid>
        <GitHubLink 
          href="https://github.com/pranav4004" 
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaGithub /> Check out more projects on GitHub
        </GitHubLink>
      </Container>
    </Section>
  );
};

WorkSection.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
      techStack: PropTypes.arrayOf(PropTypes.string),
      url: PropTypes.string
    })
  )
};

export default WorkSection; 