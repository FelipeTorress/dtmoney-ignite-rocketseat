import { Container, TransactionTyperContainer, RadioBox } from './styles';
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';


interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:newTransactionModalProps){
    const [type, setType] = useState('deposit');

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();//retirar o reload da pagina

        const data = {
            title,
            value,
            category,
            type
        };

        api.post('/transactions', data).then(onRequestClose);

        setTitle('');
        setValue(0);
        setCategory('');
        setType('deposit');
        
    }

    return(
        <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <button 
            type='button' 
            onClick={onRequestClose}
            className='react-modal-close'
          >
              <img src={closeImg} alt="Fechar" />
          </button>

          <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>

            <input type="text" placeholder='Título' value={title} onChange={ event => setTitle(event.target.value)}/>

            <input type="number" placeholder='Valor' value={value} onChange={ event => setValue(Number(event.target.value))}/>

            <TransactionTyperContainer>
                <RadioBox 
                    type="button" 
                    onClick={() => setType('deposit')}
                    isActive={type === 'deposit'}
                    activeColor={'green'}
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox 
                    type="button" 
                    onClick={() => setType('withdraw')}
                    isActive={type === 'withdraw'}
                    activeColor={'red'}
                >
                    <img src={outcomeImg} alt="saída" />
                    <span>saída</span>
                </RadioBox>
            </TransactionTyperContainer>

            <input type="text" placeholder='Categoria' value={category} onChange={ event => setCategory(event.target.value)}/>

            <button type="submit">Cadastrar</button>
          </Container>
      </Modal>
    );
}