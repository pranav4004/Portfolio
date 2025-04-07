import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.5rem;
  margin: 0.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    padding: 2rem;
    margin: 1rem;
    max-width: 600px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
  position: relative;
  display: inline-block;
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    width: 50px;
    height: 3px;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(90deg, #00f2fe, #4facfe);
    border-radius: 2px;
  }
`;

const Description = styled.p`
  color: #a0aec0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  text-align: center;
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(79, 172, 254, 0.1);
  color: #4facfe;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid rgba(79, 172, 254, 0.2);
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #4facfe;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: #00f2fe;
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const WorkCard = ({ project = {} }) => {
  const {
    title = 'Untitled Project',
    description = 'No description available',
    techStack = [],
    url = '#'
  } = project;

  return (
    <Card
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <ProjectTitle>{title}</ProjectTitle>
      <Description>{description}</Description>
      <TechStackContainer>
        {techStack.map((tech, index) => (
          <TechTag key={index}>{tech}</TechTag>
        ))}
      </TechStackContainer>
      <LinkButton href={url} target="_blank" rel="noopener noreferrer">
        <FaGithub /> View on GitHub
      </LinkButton>
    </Card>
  );
};

WorkCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    techStack: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string
  })
};

export default WorkCard;
