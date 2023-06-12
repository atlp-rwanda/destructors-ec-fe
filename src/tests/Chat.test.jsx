import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { io } from 'socket.io-client';
import { act } from 'react-dom/test-utils';
import ChatApp from '../components/Chat/Chat.app';
import MockAdapter from 'axios-mock-adapter';
import axios from '../redux/app/customAxios';

const mock = new MockAdapter(axios);
let socket;

beforeEach(() => {
  socket = io();
});

afterEach(() => {
    socket.disconnect();
  });

it('renders ChatApp component', () => {
  render(<ChatApp loggedInUser="user1" />);


});
it('receives a chat message', async () => {
    render(<ChatApp loggedInUser="user1" />);
    
    const chatMessage = {
      username: 'user2',
      text: 'Hello from user2!',
      time: '12:34 PM',
    };
    
    act(() => {
      socket.emit('chat', chatMessage);
    });
    
    await waitFor(() => {
      const messageElement = screen.queryByText(chatMessage.text, { selector: 'p' });
    
    });
  });
  

it('toggles the chat visibility', () => {
  render(<ChatApp loggedInUser="user1" />);
  const chatToggleButton = screen.getByRole('button', { name: '' });

  userEvent.click(chatToggleButton);

  userEvent.click(chatToggleButton);
  expect(screen.queryByText('Chat')).not.toBeInTheDocument();
});
it('displays old chat messages', async () => {
    const oldMessages = [
      {
        username: 'user1',
        text: 'Hello from user1!',
        time: '10:00 AM',
      },
      {
        username: 'user2',
        text: 'Hello from user2!',
        time: '11:00 AM',
      },
    ];
  
    // Mock the server response for old messages
    mock.onGet('/old-messages').reply(200, oldMessages);
  
    render(<ChatApp loggedInUser="user1" />);
  });
