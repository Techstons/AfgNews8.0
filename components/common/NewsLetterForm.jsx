import React from "react";

const NewsLetterForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  return (
    <form
      //   onSubmit={subscribeToNewsLetter}
      className="input-box"
      aria-label="Subscribe your email to newsletter"
    >
      <input
        // placeholder={t("common:news_letter_placeholder")}
        // value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{
          backgroundColor: "white",
          border: "black solid 1px",
          padding: "0 0 0 1rem",
          width: "14rem",
        }}
      />
      <button className="btn" type="submit">
        OK
      </button>
    </form>
  );
};

export default NewsLetterForm;
