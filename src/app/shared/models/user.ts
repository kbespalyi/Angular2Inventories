export class User {
  id?: string;
  accountId: string;
  firstName: string;
  lastName: string;
  name: string;
  level: string;
  language: string;
  email: string;
  avatar: string;
  status: string;

  constructor(user?: any) {
    this.setUser(user || {});
  };

  setUser(user: any) {
    this.id = user.id || null;
    this.accountId = user.accountId || null;
    this.firstName = user.firstName || '';
    this.lastName = user.lastName || '';
    this.name = `${user.firstName} ${user.lastName}` || '';
    this.level = user.level || 'user';
    this.language = user.language || 'en';
    this.email = user.email || '';
    this.avatar = user.image ? user.image.img : '';
    this.status = user.status || 'inactive';
    return this;
  }

  getUser() {
    return {
      id: this.id || null,
      accountId: this.accountId || null,
      firstName: this.firstName || '',
      lastName: this.lastName || '',
      name: this.name || '',
      level: this.level || 'user',
      language: this.language || 'en',
      email: this.email || '',
      avatar: this.avatar || '',
      status: this.status || 'inactive'
    };
  }

  getBlankUser() {
    return {
      accountId: this.accountId,
      firstName: '',
      lastName: '',
      level: 'user',
      language: 'en',
      email: '',
      avatar: '',
      status: 'inactive'
    };
  }
}
