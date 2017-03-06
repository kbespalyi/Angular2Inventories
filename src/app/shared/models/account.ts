import { Address } from '../models/address';

export class Account {
  id?: string;
  dealerName: string;
  dealerType: string;
  address: Address;
  status: string;

  constructor(account?: any) {
    this.setAccount(account || {});
  };

  setAccount(account: any) {
    this.id = account.id || null;
    this.dealerName = account.dealerName || '';
    this.dealerType = account.dealerType || '';
    this.address = new Address(account.address);
    this.status = account.status || 'inactive';
    return this;
  }

  getAccount() {
    return {
      id: this.id || null,
      dealerName: this.dealerName || '',
      dealerType: this.dealerType || '',
      address: this.address,
      status: this.status || 'inactive'
    };
  }

  getBlankAccount() {
    return {
      dealerName: '',
      dealerType: '',
      address: new Address(),
      status: 'inactive'
    };
  }
}
