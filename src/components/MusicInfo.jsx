import { Row, Col } from "react-bootstrap";

const MusicInfo = (props) => {
  return (
    <Row className="music-player">
      <Col xs={4} className="d-flex align-items-center">
        <img
          src={props.selectedMusic.album.album.cover}
          alt="album-img"
          className="player-img"
        ></img>
        <Col className="ml-2">
          <Row>{props.selectedMusic.album.title}</Row>
          <Row className="small-grey">
            {props.selectedMusic.album.artist.name}
          </Row>
        </Col>
        <Col className="d-flex align-items-center">
          <i class="bi bi-heart"></i>
        </Col>
      </Col>
      <Col className="d-flex align-items-center">
        Current Rank: {props.selectedMusic.album.rank}
      </Col>
    </Row>
  );
};

export default MusicInfo;
