export interface QuestionProps {
  question: {
    title: string;
    author: string;
    created: number;
    link: string;
  };
  openPopup: (props: QuestionProps) => void;
}

export interface ListProps {
  tags: [];
  owner: {
    reputation: number;
    user_id: number;
    user_type: string;
    profile_image: string;
    display_name: string;
    link: string;
  };
  is_answered: boolean;
  view_count: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  last_edit_date: number;
  question_id: number;
  content_license: string;
  link: string;
  title: string;
}

export interface PopupProps {
  question: {
    title: string;
    author: string;
    created: number;
    link: string;
  };
  openPopup?: (props: QuestionProps) => void;
  closePopup: () => void;
}
