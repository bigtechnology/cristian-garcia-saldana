import React from 'react';

const About = ({
  headerOne,
  paragraphOne,
}: IAboutProps): React.ReactElement => {
  return (
    <div className="about-wrapper">
      {/* <h2>image of the founders, owners etc here?</h2> */}

      <div className="about-content">
        <h2>{headerOne}</h2>
        <p>{paragraphOne}</p>
      </div>
    </div>
  );
};

interface IAboutProps {
  headerOne: string;
  paragraphOne: string;
}

export default About;
