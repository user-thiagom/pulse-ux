import React from 'react';
import RatingInput from './inputs/RatingInput';
import NpsInput from './inputs/NpsInput';
import SliderInput from './inputs/SliderInput';
import TextInput from './inputs/TextInput';
import MultipleChoiceInput from './inputs/MultipleChoiceInput';


export default function QuestionRenderer({ question, value, onChange }) {
  if (!question) return null;

  // Critério 3: Renderização condicional por switch(question.type)
  switch (question.type) {
    case 'rating':
      return <RatingInput value={value} onChange={onChange} />;
    
    case 'nps':
      return <NpsInput value={value} onChange={onChange} />;
    
    case 'slider':
      return (
        <SliderInput 
          value={value} 
          onChange={onChange} 
          minLabel={question.minLabel} 
          maxLabel={question.maxLabel} 
        />
      );
    
    case 'text':
      return <TextInput value={value} onChange={onChange} />;
    
    case 'multiple_choice':
      return <MultipleChoiceInput question={question} value={value} onChange={onChange} />;
    
    default:
      return (
        <div style={{ padding: '10px', color: 'red' }}>
          Tipo de pergunta não suportado: {question.type}
        </div>
      );
  }
}