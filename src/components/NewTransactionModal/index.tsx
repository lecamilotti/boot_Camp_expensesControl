import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from "../../assets/close.svg";
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

function handleCreateNewTransaction(event: FormEvent) {
  event.preventDefault();
  
  const data = {
    title,
    value,
    category,
    type,
  
};

api.post('/transactions', data);
};
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >

      <button type="button" onClick={onRequestClose} 
      className="react-modal-close">
        <img src={closeImg} alt="close modal"/>
        </button>
      <Container onSubmit={handleCreateNewTransaction}>
    <h2>Create New Transaction </h2>

    <input
    placeholder="Title"
    value={title}
    onChange={event => setTitle(event.target.value)}
    />
    <input
    type="number"
    placeholder="Amount"
    value={value}
    onChange={event => setValue(Number(event.target.value))}
    />

      <TransactionTypeContainer>
        <RadioBox type="button"
        onClick={() => { setType('deposit'); }}
        isActive={type === 'deposit'}
        activeColor="green"
        >
          <img src={incomeImg} alt="income" />
          <span>Income</span>
        </RadioBox>
        <RadioBox type="button"
         onClick={() => { setType('withdraw');}}
           isActive={type === 'withdraw'}
           activeColor="red"
           >
          <img src={outcomeImg} alt="Outome" />
          <span>Outcome</span>
        </RadioBox>

      </TransactionTypeContainer>


    <input
    placeholder="Category"
    value={category}
    onChange={event => setCategory(event.target.value)}
    />

    <button type="submit">
      Register
      </button>
    
    </Container>
    </Modal>
  );
}