// Options.jsx
import css from "./Options.module.css";

const Options = ({
  totalFeedback,
  handleReset,
  updateFeedback,
  resp: { good, neutral, bad, reset },
}) => {
  return (
    <div className={css.wrapper}>
      <button className={css.button} onClick={() => updateFeedback("good")} type="button">
        {good}
      </button>
      <button className={css.button} onClick={() => updateFeedback("neutral")} type="button">
        {neutral}
      </button>
      <button className={css.button} onClick={() => updateFeedback("bad")} type="button">
        {bad}
      </button>
      {totalFeedback > 0 && (
        <button className={css.button_1}  onClick={handleReset} type="button">
          {reset}
        </button>
      )}
    </div>
  );
};

export default Options;