import React from 'react';
import QuoteButtonCSS from './QuoteButton.module.css';

interface QuoteButtonProps {
  onClick: () => void;
}

const QuoteButton: React.FC<QuoteButtonProps> = ({ onClick }) => {
  return (
    <button className={QuoteButtonCSS.quote__button} onClick={onClick}>
      Get Quote
    </button>
  );
};

export default QuoteButton;