import React from 'react';
import PropTypes from 'prop-types';
import { Text, Total } from './TotalNumberContacts.styled';

const TotalNumberContacts = ({ value }) => (

  <>{value ?
    <Text>Total number of contacts
      <Total>{value}</Total>contacts
    </Text>
    :
    <Text>There are no contacts in the phonebook</Text>
  }
  </>
)

TotalNumberContacts.propTypes = {
  value: PropTypes.number.isRequired,
}


export default TotalNumberContacts;
