import Paragraph from "./Paragraph";

const SocialCard = ({ blogData }) => {
  return (
    <div className="card">
      <div className="card_title">{blogData.title}</div>
      <div className="card_image">{blogData.images}</div>
      <Paragraph paragraph={blogData.paragraph} />
      {/* <div className="card_parag">{blogData.paragraph}</div> */}
    </div>
  );
};

export default SocialCard;
