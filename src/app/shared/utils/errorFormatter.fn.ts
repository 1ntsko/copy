import { ErrorMessages } from 'src/app/models/user.model';

export function signInErrorMessage(message: string): string {
  switch (message) {
    case ErrorMessages.UserNotFound:
      return 'User with this email is not found';
    case ErrorMessages.InvalidPassword:
      return 'Invalid password. Try again.';
    case ErrorMessages.DisabledAccount:
      return 'Access to this account has been temporarily disabled due to many failed login attempts.';
    default:
      return '';
  }
}

export function signUpErrorMessage(message: string): string {
  if (message === ErrorMessages.EmailTaken)
    return 'The email address is already in use by another account';

  return '';
}
