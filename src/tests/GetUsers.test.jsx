import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import GetUsers from '../components/GetUsers';

describe('GetUsers component', () => {
  test('renders the component', async () => {
    render(
      <BrowserRouter basename="/">
        <GetUsers />
      </BrowserRouter>,
    );
    await screen.findByText((content, element) => {
      return element.textContent === 'All Users';
    });
    expect(screen.queryAllByText('Dashboard')).toHaveLength(2);
    expect(screen.getByText('Assign Role')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('Buyers')).toBeInTheDocument();
    expect(screen.getByText('Sellers')).toBeInTheDocument();
    expect(screen.getByText('Admins')).toBeInTheDocument();
    expect(screen.queryByText('mfirstname')).toBeNull();
    expect(screen.queryByText('msecondname')).toBeNull();
    expect(screen.queryByText('tstmail1234@gmail.com')).toBeNull();
  });

  test('disables a user when confirmation is accepted', async () => {
    <BrowserRouter basename="/">
      <GetUsers />
    </BrowserRouter>,

    await screen.findByText('All Users');
    const disableButton = screen.getByText('Disable');
    expect(disableButton).toBeInTheDocument();
    disableButton.click();
    await screen.findByText('Are you sure you want to disable this user account?');
    const confirmButton = screen.getByText('Disable');
    confirmButton.click();
    expect(disableUsers).toHaveBeenCalledTimes(1);
    const cancelButton = screen.getByText('Cancel');
    expect(cancelButton).toHaveBeenCalledTimes(1);
    cancelButton.click();
    expect(disableUsers).toHaveBeenCalledWith(1, expect.any(String));
    const emailElement = screen.getByAltText('lock');
    expect(emailElement).toBeInTheDocument();
  });
});
