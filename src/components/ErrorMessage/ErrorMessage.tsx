import s from "./ErrorMessage.module.css";

type ErrorMessageProps = {
  title: string;
  description?: string;
  type?: "error" | "empty" | "info";
  action?: { label: string; onClick: () => void };
};

const ErrorMessage = ({
  title,
  description,
  type = "info",
  action,
}: ErrorMessageProps) => (
  <div className={s.wrap} data-type={type}>
    <h2 className={s.title}>{title}</h2>
    {description && <p className={s.desc}>{description}</p>}
    {action && (
      <button className={s.btn} onClick={action.onClick}>
        {action.label}
      </button>
    )}
  </div>
);

export default ErrorMessage;
