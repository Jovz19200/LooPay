interface StepListItemProps {
  num: string | number;
  numBg: string;
  title: string;
  body: string;
  icon: string;
}

export default function StepListItem({ num, numBg, title, body, icon }: StepListItemProps) {
  return (
    <div className="step-list-item fade-up">
      <div className="sli-num" style={{ background: numBg }}>
        {num}
      </div>
      <div className="sli-body">
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
      <div className="sli-icon">{icon}</div>
    </div>
  );
}
