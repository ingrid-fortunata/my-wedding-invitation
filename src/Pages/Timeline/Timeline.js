import React from "react";
import textdecor from "../../Assets/textdecor.png";
import "./Timeline.css";
import firstmeetpic from "../../Assets/firstmeetpic.jpeg";
import firstdatepic from "../../Assets/firstdate.jpg";
import firstdatepic1 from "../../Assets/firstdate1.jpg";
import proposalpic from "../../Assets/proposal.jpg";

export default function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline-main-title">
        <img src={textdecor} alt="textdecor" />
        <div className="timeline-maintitle-text">Our Journey</div>
      </div>

      <div className="content-maincontainer">
        <div className="content-container">
          <div className="content-text">
            <h3>First Meet</h3>
            <h5>July 01,2018</h5>
            <p>
              Actually saw each other before this date on Central Park Mall's
              elevators. Knowing each other as friends in Wallstreet English
              (WSE). In that place, we kept being competitive to each others in
              every classes, every parties, and every fun activities that we've
              been through. Mortal enemies in debating because we always not on
              the same team. Until we ate meals with our beloved friends
              together late at night after class, then Lucky always lured Ingrid
              to come to WSE with doughnuts, Ingrid always chatted Lucky long
              enough (reaching 80 messages per 1 chats!) through Whatsapp. Even
              our WSE friends' wondering what's going on between us!
            </p>
          </div>
          <div className="content-verticalborder"></div>
          <div className="content-image">
            <img src={firstmeetpic} alt="dummypic" />
          </div>
        </div>

        <div className="content-container">
          <div className="content-image-slideshow">
            <img src={firstdatepic} alt="dummypic" />
            <img src={firstdatepic1} alt="dummypic" />
          </div>
          <div className="content-verticalborder"></div>
          <div className="content-text">
            <h3>First Date</h3>
            <h5>Aug 06,2018</h5>
            <p>
              Being braved enough to start watching on cinema together
              (Christopher Robin Winnie the Pooh Movie!) and we had a long
              conversation in day from noon till late at night too! Ingrid's
              wearing a dress so Lucky's face was red. For dinner we had Beef
              Wellington and glasses of wine (we're such an extravagant people
              ya :D). A good first date so we could known each other vision and
              personality before we proceed further more. At 23rd September
              2018, finally we decided to proceed to the next level : Dating (in
              relationship)!
            </p>
          </div>
        </div>

        <div className="content-container">
          <div className="content-text">
            <h3>Proposal</h3>
            <h5>October 11,2020</h5>
            <p>
              After we met with our beloved families on both sides, having mini
              families lunch meeting, and rowing the up and down relationship
              path (more into the weird and full of laugh relationship), also
              knowing each others positive and negative sides and accepting all
              the flaws. We decided it's time to make a serious commitment :
              Marriage Planning. Lucky's came to Ingrid's house with his family
              and brought a heavy round big fruits parcel (of course with
              Ingrid's beloved Pocky!) to propose Ingrid in front of her family!
              Time to grow up into an adult and planning for the H day!
            </p>
          </div>
          <div className="content-verticalborder"></div>
          <div className="content-image">
            <img src={proposalpic} alt="dummypic" style={{ width: "30vw" }} />
          </div>
        </div>

        <div className="content-container">
          <div className="content-image-slideshow">
            <img src={firstdatepic} alt="dummypic" />
            <img src={firstdatepic1} alt="dummypic" />
          </div>
          <div className="content-verticalborder"></div>
          <div className="content-text">
            <h3>Engagement</h3>
            <h5>July 17,2021</h5>
            <p>
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
