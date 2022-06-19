import './BandMember.scss';

const BandMember = ({ image, name, role, faveColour, about }) => {
  return (
    <div className='band-member'>
      <div className='band-member__image-cont'>
        <h3>{name}</h3>
        <img className='band-member__image' src={image} alt={name} />
      </div>
      <div className='band-member__details'>
        <h4>{role}</h4>
        <h5>Favorite colour: {faveColour}</h5>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default BandMember;
