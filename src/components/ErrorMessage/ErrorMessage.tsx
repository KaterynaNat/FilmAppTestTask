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
}: ErrorMessageProps) => {
  return (
    <div data-type={type}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {action && <button onClick={action.onClick}>{action.label}</button>}
    </div>
  );
};
export default ErrorMessage;
