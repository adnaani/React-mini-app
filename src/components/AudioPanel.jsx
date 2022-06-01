import ReactPlayer from "react-player";
export const AudioPanel = ({ url }) => {
  return (
    <div className="audio-panel">
      <ReactPlayer
        url={url}
        width="350px"
        height="50px"
        playing={false}
        controls={true}
      />
    </div>
  );
};
