export interface FireUser {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

export interface User {
  firstName: string;
  lastName: string;
  entityNo: string;
}

export enum Roles {
  Doctor = '1100000111',
  Patient = '1000000002',
}

export enum ErrorMessages {
  UserNotFound = 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).',

  InvalidPassword = 'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).',

  DisabledAccount = 'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).',

  EmailTaken = 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).',
}
