import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCar, FaTicketAlt, FaCalendarAlt } from 'react-icons/fa';

const Container = styled.div`
  background-color: #202123;
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  max-width: 1200px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  color: coral;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2em;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  flex: 1;
  min-width: 150px;
  padding: 10px;
  border: 1px solid coral;
  border-radius: 4px;
  font-size: 1em;
  background-color: #ffffff;
  color: #202123;
`;

const SelectInput = styled.select`
  flex: 1;
  min-width: 150px;
  padding: 10px;
  border: 1px solid coral;
  border-radius: 4px;
  font-size: 1em;
  background-color: #ffffff;
  color: #202123;
`;

const TicketList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
`;

const TicketItem = styled.div`
  background-color: #ffffff;
  color: #202123;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

const TicketInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const TicketDetail = styled.span`
  margin: 5px 0;
  display: flex;
  align-items: center;
  font-size: 1em;

  & > svg {
    margin-right: 10px;
  }
`;

const TotalTickets = styled.p`
  color: coral;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  font-size: 1.5em;
`;

const UnpaidTickets = () => {
  const tickets = [
    { number: '12345', carMake: 'Toyota', carNumberPlate: 'ABC123', date: '2023-05-15' },
    { number: '67890', carMake: 'Honda', carNumberPlate: 'XYZ789', date: '2023-05-16' },
    
    { number: '12345', carMake: 'Toyota', carNumberPlate: 'ABC123', date: '2023-05-15' },
    { number: '67890', carMake: 'Honda', carNumberPlate: 'XYZ789', date: '2023-05-16' },
    
    { number: '12345', carMake: 'Toyota', carNumberPlate: 'ABC123', date: '2023-05-15' },
    { number: '67890', carMake: 'Honda', carNumberPlate: 'XYZ789', date: '2023-05-16' },
    
    { number: '12345', carMake: 'Toyota', carNumberPlate: 'ABC123', date: '2023-05-15' },
    { number: '67890', carMake: 'Honda', carNumberPlate: 'XYZ789', date: '2023-05-16' },
    
    { number: '12345', carMake: 'Toyota', carNumberPlate: 'ABC123', date: '2023-05-15' },
    { number: '67890', carMake: 'Honda', carNumberPlate: 'XYZ789', date: '2023-05-16' },
    
    { number: '12345', carMake: 'Toyota', carNumberPlate: 'ABC123', date: '2023-05-15' },
    { number: '67890', carMake: 'Honda', carNumberPlate: 'XYZ789', date: '2023-05-16' },
    
    { number: '12345', carMake: 'Toyota', carNumberPlate: 'ABC123', date: '2023-05-15' },
    { number: '67890', carMake: 'Honda', carNumberPlate: 'XYZ789', date: '2023-05-16' },
    
  ];
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredTickets = tickets.filter(ticket => {
    if (filter === 'all') {
      return (
        ticket.number.toLowerCase().includes(search.toLowerCase()) ||
        ticket.carMake.toLowerCase().includes(search.toLowerCase()) ||
        ticket.carNumberPlate.toLowerCase().includes(search.toLowerCase()) ||
        ticket.date.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return ticket[filter].toLowerCase().includes(search.toLowerCase());
    }
  });

  return (
    <Container>
      <Title>Unpaid Tickets</Title>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <SelectInput
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="number">Ticket Number</option>
          <option value="carMake">Car Make</option>
          <option value="carNumberPlate">Car Number Plate</option>
          <option value="date">Date</option>
        </SelectInput>
      </SearchContainer>
      <TicketList>
        {filteredTickets.map((ticket, index) => (
          <TicketItem key={index}>
            <TicketInfo>
              <TicketDetail>
                <FaTicketAlt /> Ticket Number: {ticket.number}
              </TicketDetail>
              <TicketDetail>
                <FaCar /> Car Make: {ticket.carMake}
              </TicketDetail>
              <TicketDetail>
                <FaCar /> Car Number Plate: {ticket.carNumberPlate}
              </TicketDetail>
              <TicketDetail>
                <FaCalendarAlt /> Date: {ticket.date}
              </TicketDetail>
            </TicketInfo>
          </TicketItem>
        ))}
      </TicketList>
      <TotalTickets>Total Unpaid Tickets: {filteredTickets.length}</TotalTickets>
    </Container>
  );
};

export default UnpaidTickets;
