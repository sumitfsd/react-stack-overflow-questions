import React from "react";
import moment from "moment";
import { TIME_FORMAT } from "../../../config";
import { QuestionProps } from "../QuestionProps";
import "./Card.css";

const Card: React.FC<QuestionProps> = (props) => (
  <div className="card" onClick={() => props.openPopup(props)}>
    <div className="content">
      <h4>
        {/* Use dangerouslySetInnerHTML becasue getting HTML tags in title */}
        <b dangerouslySetInnerHTML={{ __html: props.question.title }}></b>
      </h4>
      <p>Author: {props.question.author}</p>
      <p>Created: {moment.unix(props.question.created).format(TIME_FORMAT)}</p>
    </div>
  </div>
);

export default Card;
