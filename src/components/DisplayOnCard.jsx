import { AudioPanel } from "./AudioPanel";
export const DisplayOnCard = ({
  lectureData: { title, speaker, date, description, url },
}) => {
  return (
    <div className="display-card">
      <div className="date">
        <p>{date}dff </p>
      </div>
      <div>
        <h2 className="title">{title}</h2>
        <span>{speaker}</span>
      </div>
      <AudioPanel url={url} />
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};
