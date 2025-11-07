import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NpbcObjectives.css"; // optional CSS file for custom styling
import NpbcImg from "../assets/NpbcObjectives.jpg";
const NpbcObjectives = () => {
  return (
    <div className="container-fluid my-5 py-5 bg-light">
      <div className="row align-items-center">
        {/* Left Side Image */}
        <div className="col-lg-5 mb-4 mb-lg-0 text-center">
          <img
            src={NpbcImg}
            alt="Worship Session"
            className="img-fluid rounded-4 shadow-lg"
          />
        </div>

        {/* Right Side Content */}
        <div className="col-lg-7 px-4">
          {/* Header */}
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary">OBJECTIVES OF NPBC</h2>
            <hr className="w-25 mx-auto border-primary" />
          </div>

          {/* Objectives */}
          <ol className="fs-5 lh-lg text-dark">
            <li>
              <strong>Word Depth:</strong> To raise a people who seek to know, do and teach God’s word (Ezra 7:10).
            </li>
            <li>
              <strong>Worship Dynamism:</strong> To provide a creative and conducive life-transforming worship
              atmosphere for spiritual engagement with God in all purity (1 Cor. 1:2; 2 Tim. 2:22).
            </li>
            <li>
              <strong>Warfare Daring:</strong> To empower a band of spiritual warriors who are not ignorant of the
              devil’s devices, but who through God possess spiritual intelligence to destroy the works of the devil
              everywhere (2 Cor. 2:11).
            </li>
            <li>
              <strong>Witnessing Driven:</strong> To become a host of empowered witnesses who passionately share Christ
              with the dying world (Matt. 28:18–20).
            </li>
            <li>
              <strong>Welfare Dedication:</strong> To build a loving community of believers committed to the total
              wellbeing of every member as the Lord gives the grace (Acts 2:44–45).
            </li>
            <li>
              <strong>Winning Driven:</strong> To train a holy and excellent people equipped with kingdom
              cutting-edge success principles in all areas of life and ministry for kingdom expansion
              (1 Cor. 9:24–27; Deut. 28:13).
            </li>
          </ol>
        </div>
      </div>

      {/* Divider */}
      <div className="text-center my-5">
        <hr className="w-50 mx-auto border-3 border-secondary" />
      </div>

      {/* Leader’s Dilemma */}
      <div className="text-center mx-auto col-md-8">
        <h3 className="fw-bold text-success">A LEADER’S DILEMMA</h3>
        <div className="mt-4 fs-5 lh-lg">
          <p>
            I feel <strong className="text-danger">broke</strong>. I never have enough money to do what I want to do.
          </p>
          <p>
            I feel <strong className="text-warning">blocked</strong>. My fellow leaders or my circumstances won’t cooperate with me.
          </p>
          <p>
            I feel <strong className="text-info">bugged</strong>. The same problems keep coming up again and again.
          </p>
          <p>
            I feel <strong className="text-muted">bummed</strong>. At times it’s downright depressing.
          </p>
          <p>
            But I also feel <strong className="text-primary">blessed</strong>. I know God cares about me.
          </p>
          <p className="fst-italic text-secondary">Every Leader’s Dilemma</p>
        </div>
      </div>

      {/* Divider */}
      <div className="text-center my-5">
        <hr className="w-50 mx-auto border-3 border-secondary" />
      </div>

      {/* Always Remember */}
      <div className="text-center mx-auto col-md-8">
        <h3 className="fw-bold text-primary">Always Remember</h3>
        <p className="mt-4 fs-5">
          Only the best is expected from you and you can always talk to your pastor to help you out in difficult
          moments.
        </p>
        <blockquote className="blockquote fs-5 text-success fst-italic">
          “You are either making excuse or you are making progress, you cannot make both at the same time.”
        </blockquote>
        <p className="fs-5">
          You have this assignment from God as a trust and a test. You cannot afford to fail. Not at all.
        </p>
        <p className="fs-5">Be yourself, but your best self. Only your best is enough for the Most High.</p>
        <p className="fs-5">
          Finally, you are a steward and it is expected of you to be faithful and accountable.
        </p>
      </div>
    </div>
  );
};

export default NpbcObjectives;
