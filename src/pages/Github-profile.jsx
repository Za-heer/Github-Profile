import React from "react";
import { BsGithub } from "react-icons/bs";
import Overview from "./overview";
import { useState, useEffect } from "react";
import errorImg from "../Assist/error.png";
import "./GithubCss.css";
import axios from "axios";

const Github = () => {
  const [inputValue, setInputValue] = useState("zaheerkhan6737");
  const [callApi, setcallApi] = useState(false);
  const [userInfo, setuserInfo] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${inputValue}`)

      .then((res) => {
        setuserInfo(res.data);
        setError(false);
      })

      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [callApi]);

  const HandleForm = (e) => {
    e.preventDefault();

    if (!inputValue) {
      console.log("feild is empty");
    }

    setcallApi(!callApi);
  };
  return (
    <>
      {/* -----------Navbar---------- */}

      <nav className=" d-flex navBar">
        <div className="git-icon ps-3 fs-2 pe-3">
          <BsGithub />
        </div>
        <div className="input">
          <form onSubmit={HandleForm}>
            <input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              type="text"
              className="form-control-md rounded pe-5 me-3 mt-3"
              placeholder="Search Username..."
            />
          </form>
          {/* {console.log(inputValue)} */}
        </div>
        <div className="navList mt-3">
          <ul className="list-unstyled d-flex">
            <li className="px-2">
              <h6>Pull request</h6>
            </li>
            <li className="px-2">
              <h6>Issues</h6>
            </li>
            <li className="px-2">
              <h6>Marketplace</h6>
            </li>
            <li className="px-2">
              <h6>Explore</h6>
            </li>
          </ul>
        </div>
      </nav>
      {error === false ? (
        <div className="container-fluid pt-1">
          <div className="container-sm mt-5">
            <div className="row">
              <div className="col-md-3 me-3">
                <div className="profileImage">
                  <img src={userInfo ? userInfo.avatar_url : inputValue} />
                </div>
                <div className="profileListing mt-5 text-start">
                  <ul className="list-unstyled  userDetail">
                    <li>
                      <h4>{userInfo ? userInfo.name : "USER NAME"}</h4>
                    </li>
                    <li>{userInfo ? userInfo.bio : "USER BIO"}</li>
                    <li>
                      {userInfo ? userInfo.followers : "USER FOLLOWER"}{" "}
                      followers
                    </li>
                    <li>
                      {userInfo ? userInfo.following : "USER FOLLOWING"}{" "}
                      following
                    </li>
                    <li>{userInfo ? userInfo.location : "USER Location"}</li>
                    <li>
                      {userInfo ? userInfo.public_repos : "Public-Repos"}{" "}
                      Repositories
                    </li>
                  </ul>
                </div>
              </div>

              {/* ----------Overview--------- */}
              <div className="col-md-8  hrColor">
                <div className="heading d-flex justify-content-around">
                  <h6>Overview</h6>
                  <h6>Repositories</h6>
                  <h6>Projects</h6>
                  <h6>Pakages</h6>
                  <h6>Stars</h6>
                </div>
                <hr />
                <p className="text-start  popular">Popular repositories</p>
                <Overview />
                <Overview />
                <Overview />
                <Overview />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="image-err container-fluid ">
          <img src={errorImg} alt="" />
        </div>
      )}
    </>
  );
};

export default Github;
