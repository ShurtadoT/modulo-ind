import './TextSection.css';

const TextSection = ({ isComposedText, title, text, isOrderedList, list, subtext }) => {
  return (
    <section className={`text-section ${isComposedText ? 'active' : ''}`}>
      <h2 className='text-section-title'>{title}</h2>
      <p className='text-section-text'>{text}</p>
      {list && (
        <ul className={`text-section-list ${isOrderedList ? 'ordered' : ''}`}>
          {list.split('\n').map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      )}
      {subtext && <p className='text-section-text'>{subtext}</p>}
    </section>
  );
};

export default TextSection;
