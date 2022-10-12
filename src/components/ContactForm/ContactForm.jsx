import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import { Form, Label, Input } from "./ContactForm.styled"
import Button from 'components/Button';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    nameInputId = nanoid();
    numberInputId = nanoid();

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const nameId = nanoid();
        this.props.onSubmit({ id: nameId, ...this.state });
        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    }

    render() {

        return (
            <>
                <Form onSubmit={this.handleSubmit}>

                    <Label htmlFor={this.nameInputId}>Name</Label>
                    <Input
                        type="text"
                        name="name"
                        id={this.nameInputId}
                        value={this.state.name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />

                    <Label htmlFor={this.numberInputId}>Number</Label>
                    <Input
                        type="tel"
                        name="number"
                        id={this.numberInputId}
                        value={this.state.number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />

                    <Button type="submit" value="Add contact"></Button>

                </Form>
            </>)
    }
}

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
}

export default ContactForm;