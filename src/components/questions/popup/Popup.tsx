import React from "react";
import { TIME_FORMAT } from "../../../config";
import moment from "moment";
import { PopupProps } from "../QuestionProps";
import "./Popup.css";

const Popup: React.FC<PopupProps> = (props) => (
  <div className="modal">
    <div className="modal_content">
      <span className="close" onClick={props.closePopup}>
        <b>&times;</b>
      </span>
      <div className="content">
        <h4>
          {/* Use dangerouslySetInnerHTML becasue getting HTML tags in title */}
          <b dangerouslySetInnerHTML={{ __html: props.question.title }}></b>
        </h4>
        <p>Author: {props.question.author}</p>
        <p>
          Created: {moment.unix(props.question.created).format(TIME_FORMAT)}
        </p>
        <a href={props.question.link} target="_blank" rel="noreferrer">
          Link
        </a>
      </div>
    </div>
  </div>
);

export default Popup;
