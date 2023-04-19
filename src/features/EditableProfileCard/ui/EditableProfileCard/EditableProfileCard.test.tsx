import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import { EditableProfileCard } from './EditableProfileCard';

import { profileCardReducer } from '../../model/slice/profileCardSlice';

import { Profile } from 'entities/Profile';

import { $api } from 'shared/api/api';
import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender';

const data: Profile = {
  first: 'admin',
  lastname: 'admin',
  id: '1',
  age: '25',
};

const options = {
  asyncReducers: {
    profile: profileCardReducer,
  },
  initialState: {
    profile: {
      data,
      form: data,
      readonly: true,
    },
    user: {
      authData: { id: '1', username: 'admin' },
    },
  },
};

describe('features/EditableProfileCard', () => {
  beforeEach(() => {
    ComponentRender(<EditableProfileCard id='1' />, options);
  });

  it('should be can edit profile', async () => {
    await userEvent.click(screen.getByTestId('ProfileHeader.editBtn'));
    expect(screen.getByTestId('ProfileHeader.cancelBtn')).toBeInTheDocument();
  });
  it('if cancelled them values should be reverted', async () => {
    await userEvent.click(screen.getByTestId('ProfileHeader.editBtn'));

    await userEvent.clear(screen.getByTestId('ProfileCard.first'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

    await userEvent.type(screen.getByTestId('ProfileCard.first'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

    await userEvent.click(screen.getByTestId('ProfileHeader.cancelBtn'));

    expect(screen.getByTestId('ProfileCard.first')).toHaveDisplayValue('admin');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveDisplayValue('admin');
  });
  it('if clear name or lastname should be error', async () => {
    await userEvent.click(screen.getByTestId('ProfileHeader.editBtn'));

    await userEvent.clear(screen.getByTestId('ProfileCard.first'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

    await userEvent.click(screen.getByTestId('ProfileHeader.saveBtn'));

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });
  it('should return correct on save', async () => {
    const mockPutReq = jest.spyOn($api, 'put');

    await userEvent.click(screen.getByTestId('ProfileHeader.editBtn'));

    await userEvent.clear(screen.getByTestId('ProfileCard.first'));

    await userEvent.type(screen.getByTestId('ProfileCard.first'), 'user');

    await userEvent.click(screen.getByTestId('ProfileHeader.saveBtn'));

    expect(mockPutReq).toHaveBeenCalled();
  });
});
