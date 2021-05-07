import React from "react";
import { getQuestionsRequest } from "../../../service";
import { ListProps, QuestionProps } from "../QuestionProps";
import QuestionCard from "../card/Card";
import QuestionPopup from "../popup/Popup";
import "./List.css";

const List = () => {
  const [items, setItems] = React.useState<ListProps[]>([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [page, setPage] = React.useState<number>(1);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [openQuestion, setOpenQuestion] = React.useState<QuestionProps>();
  const scrollContainer = React.useRef(null);

  const getQuestions = async (pageNumber: number) => {
    const params: object = {
      site: "stackoverflow.com",
      q: "react.js",
      pageSize: 10,
      page: pageNumber
    };
    const res = await getQuestionsRequest(params);
    if (res.data && res.data.items) {
      setItems((prevState: ListProps[]) => [...prevState, ...res.data.items]);
      setPage((prevPage) => prevPage + 1);
    } else {
      console.log("error", res.message);
    }
    setIsFetching(false);
  };

  const handleScroll = () => {
    if (scrollContainer.current) {
      if (
        document.documentElement.scrollTop +
          scrollContainer.current.clientHeight +
          400 <=
          scrollContainer.current.scrollHeight ||
        isFetching
      ) {
        return;
      }
      setIsFetching(true);
    }
  };

  React.useEffect(() => {
    getQuestions(page);
    window.addEventListener("scroll", handleScroll);
  }, []);

  const getMoreQuestions = (pageNumber: number) => {
    getQuestions(pageNumber);
  };

  React.useEffect(() => {
    if (!isFetching) return;
    getMoreQuestions(page);
  }, [isFetching]);

  const openPopup = (result: QuestionProps) => {
    setIsOpen(true);
    setOpenQuestion(result);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && openQuestion && (
        <QuestionPopup
          question={openQuestion.question}
          closePopup={closePopup}
        />
      )}

      <div className="container" ref={scrollContainer}>
        {items.length ? (
          items.map((question: ListProps) => (
            <QuestionCard
              key={question.question_id}
              question={{
                title: question.title,
                author: question.owner.display_name,
                created: question.creation_date,
                link: question.link
              }}
              openPopup={openPopup}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};
export default List;
