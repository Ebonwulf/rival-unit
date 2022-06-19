import BandMember from '../../Components/BandMember/BandMember';
import './About.scss';
import bandMembers from '../../Assets/Data/data';

const About = () => {
  const filterMembersJSX = bandMembers.map((bandMember) => {
    return (
      <BandMember
        image={bandMember.image}
        name={bandMember.name}
        role={bandMember.role}
        faveColour={bandMember.faveColour}
        about={bandMember.about}
      />
    );
  });
  return (
    <div className='about'>
      <h1 className='about__heading'>Meet the band!</h1>
      <div className='about__container'>{filterMembersJSX}</div>
    </div>
  );
};

export default About;
