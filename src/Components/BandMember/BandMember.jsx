import './BandMember.scss';

const BandMember = ({ image, name, role, faveColour, about }) => {
  return (
    <div className='band-member'>
      <img className='band-member__image' src={image} alt={name} />
      <div className='band-member__details'>
        <h3>{name}</h3>
        <h4>{role}</h4>
        <h5>Favorite colour: {faveColour}</h5>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default BandMember;
