import react, { Component } from "react";
import shortid from 'shortid';

class InputForm extends Component {
    state = {
        name: '',
        number: ''
    }

  handleInputChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

handleSubmit = e => {
        e.preventDefault();
        this.props.addContactOnSubmit(this.state)
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: ''
        });
    };
    
    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    render() {
        return (
              <form onSubmit={this.handleSubmit} >
          <label htmlFor={this.nameInputId}>
            NAME
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
                        onChange={this.handleInputChange}
                        id={this.nameInputId}
            />
          </label>

          <label htmlFor={this.numberInputId} >
            NUMBER
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={this.state.number}
                        onChange={this.handleInputChange}
                        id={this.numberInputId}
            />
          </label>

          <button type="submit">Add Contact</button>
        </form>
        )
    };
};

export default InputForm; 