import beforeSection from '../../../utils/helper';

export default function About() {
  return (
    <div className="about" id="about">
      {beforeSection('Some Info', 'About Me')}
      <div className="content">
        <p>
          As a Full-Stack Developer, I possess the ability to handle all layers
          of a software application, from crafting visually appealing user
          interfaces to implementing robust server-side logic and database
          management. I excel in problem-solving, adapting to new technologies,
          and staying up-to-date with industry trends. Collaborative and
          effective in communication, I am a valuable team player who can
          transform complex requirements into innovative and user-friendly
          solutions. With meticulous attention to detail, I deliver clean and
          efficient code, ensuring the successful implementation of
          comprehensive web development projects.
        </p>
      </div>
    </div>
  );
}
