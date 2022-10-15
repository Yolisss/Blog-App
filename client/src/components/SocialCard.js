import Paragraph from "./Paragraph";

const SocialCard = ({ blogData }) => {
  return (
    <div className="card">
      <div className="card_title">
        <h1>{blogData.title}</h1>
      </div>
      <div className="card_image">
        <img src={blogData.images} alt="" />
      </div>
      <Paragraph paragraph={blogData.paragraph} />
      {/* <div className="card_parag">{blogData.paragraph}</div> */}
    </div>
  );
};

export default SocialCard;
