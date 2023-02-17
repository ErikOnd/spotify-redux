import { Row, Col, Form, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMusicActionAsync } from "../redux/actions";
import MusicCart from "./MusicCart";

const HomePage = () => {
  const musicArr = useSelector((state) => state.all.music);
  const dispatch = useDispatch();

  const selectedMusic = useSelector((state) => state.selected);
  console.log(selectedMusic);

  useEffect(() => {
    console.log(selectedMusic);
  }, [selectedMusic]);

  const [userInput, setUserInput] = useState("");

  const userInputToState = (event) => {
    setUserInput(event.target.value);
  };

  useEffect(() => {
    userInput.length !== 0 && dispatch(getMusicActionAsync(userInput));
  }, [userInput]);

  return (
    <>
      {console.log(musicArr)}
      <Row>
        <Col xs={2} className="side-bar pr-5">
          <Row className="ml-3">
            <img
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
              alt="logo"
              className="logo mt-4 img-fluid"
            />
          </Row>
          <Row className="ml-3 mt-4 align-items-center sidebar-item">
            <i className="bi bi-house-door-fill mr-3"></i>Home
          </Row>
          <Row className="ml-3 mt-4 align-items-center sidebar-item">
            <i className="bi bi-search mr-3"></i>Search
          </Row>
          <Row className="ml-3 mt-4 align-items-center sidebar-item">
            <i className="bi bi-music-note-list mr-3"></i>Your Library
          </Row>
        </Col>
        <Col className="main-content">
          <Col className="back-forth-search">
            <div className="backForth mt-2">
              <i className="bi bi-caret-left-square-fill ml-3 mr-3"></i>
              <i className="bi bi-caret-right-square-fill"></i>
            </div>
            <Col xs={3}>
              <FormControl
                type="text"
                placeholder="What do you want to listen to?"
                className="input-field"
                value={userInput}
                onChange={userInputToState}
              />
            </Col>
          </Col>
          <Row xs={3} sm={4} md={6} className="mt-5 ml-3">
            {musicArr.length > 0 &&
              musicArr.map((music) => {
                return (
                  <MusicCart
                    musicInfo={music}
                    musicArr={musicArr}
                    key={music.id}
                  ></MusicCart>
                );
              })}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
