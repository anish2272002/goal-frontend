import "./ErrorAlert.css";

interface props {
  errorText: string;
}

const ErrorAlert = ({ errorText }: props) => {
  return (
    <div className="error-alert">
      <h2>Something went wrong!</h2>
      <p>{errorText}</p>
    </div>
  );
};

export default ErrorAlert;
