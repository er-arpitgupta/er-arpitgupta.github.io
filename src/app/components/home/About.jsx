import beforeSection from '../../../utils/helper';

export default function About() {
  return (
    <div className="about" id="about">
      {beforeSection('Some Info', 'About Me')}
      <div className="content">
        <p>
          "Crafting captivating digital experiences one line of code at a time.
          With a passion for frontend technologies, I blend creativity with
          technical prowess to breathe life into pixels. Welcome to my
          playground, where every click sparks innovation and every scroll
          unveils the artistry of UI development."
        </p>
      </div>
    </div>
  );
}
