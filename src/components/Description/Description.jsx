import css from "./Description.module.css";

const Description = ({ name, descr }) => {
  return (
    <>
      <h1 className={css.title}>{name}</h1>
      <p className={css.paragraph}>{descr}</p>
    </>
  );
};

export default Description;