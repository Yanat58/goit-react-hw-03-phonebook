import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BiUserPlus } from 'react-icons/bi';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handelChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handelSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css.formBox} onSubmit={this.handelSubmit}>
        <label className={css.label}>
          <b className={css.labelText}>Name</b>
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name"
            onChange={this.handelChange}
          />
        </label>
        <label className={css.label}>
          <b className={css.labelText}>Number</b>
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter phone number"
            onChange={this.handelChange}
          />
        </label>

        <button className={css.btnAdd} type="submit">
          <BiUserPlus className={css.btnAddIcon} size={25} />
          <span className={css.btnAddText}>Add contact</span>
        </button>
      </form>
    );
  }
}
