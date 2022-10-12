export class User {
  uid: string;
  email: string;
  name: string;
  photoURL: string;
  emailVerified: boolean;

  constructor(
    uid: string,
    email: string,
    name: string,
    photoURL: string,
    emailVerified: boolean
  ) {
    this.uid = uid;
    this.email = email;
    this.name = name;
    this.photoURL = photoURL;
    this.emailVerified = emailVerified;
  }
}
