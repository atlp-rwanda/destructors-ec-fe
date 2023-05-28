import { render, screen } from '@testing-library/react';
import UserRoleForm from '../components/Admin/UserRoleForm';

describe('UserRoleForm', () => {
  const selectedUser = { firstname: 'John', lastname: 'Doe' };
  const selectedRole = 'buyer';
  let handleRoleChangeMock;
  let handleFormSubmitMock;
  let setFormVisibleMock;

  const createMockFunction = () => {
    const mockFn = (args) => {
      mockFn.mock.calls.push(args);
    };
    mockFn.mock = { calls: [] };
    return mockFn;
  };

  beforeEach(() => {
    handleRoleChangeMock = createMockFunction();
    handleFormSubmitMock = createMockFunction();
    setFormVisibleMock = createMockFunction();

    render(
      <UserRoleForm
        selectedUser={selectedUser}
        selectedRole={selectedRole}
        handleRoleChange={handleRoleChangeMock}
        handleFormSubmit={handleFormSubmitMock}
        setFormVisible={setFormVisibleMock}
      />,
    );
  });

  it('displays the selected user and role', () => {
    const userRoleText = screen.getByText(
      `Update Role for ${selectedUser.firstname} ${selectedUser.lastname}`
 );
    expect(userRoleText).toBeInTheDocument();

    const roleSelect = screen.getByLabelText('Role:');
    expect(roleSelect).toHaveValue(selectedRole);
  });

});
