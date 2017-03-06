export class Address {
  street: string;
  street2: string;
  city: string;
  district: string;
  stateOrProvince: string;
  country: string;
  postCode: string;
  phoneNumber: string;
  fax: string;
  email: string;
  geoPoint: any;
  timeZone: any;

  constructor(address?: any) {
    this.setAddress(address || {});
  }

  setAddress(address: any) {
    this.street = address.street || '';
    this.street2 = address.street2 || '';
    this.city = address.city || '';
    this.district = address.district || '';
    this.stateOrProvince = address.stateOrProvince || '';
    this.country = address.country || '';
    this.postCode = address.postCode || '';
    this.phoneNumber = address.phoneNumber || '';
    this.fax = address.fax || '';
    this.email = address.email || '';
    this.geoPoint = address.geoPoint || {
      lat: 45.530060165000464,
      lng: -73.58311552199967
    };
    this.timeZone = address.timeZone || {
      dstOffset : 3600,
      rawOffset : -18000,
      status : 'OK',
      timeZoneId : 'America/Toronto',
      timeZoneName : 'Eastern Standard Time'
    };
    return this;
  }

  getAddress(): any {
    return {
      street: this.street || '',
      street2: this.street2 || '',
      city: this.city || '',
      district: this.district || '',
      stateOrProvince: this.stateOrProvince || '',
      country: this.country || '',
      postCode: this.postCode || '',
      phoneNumber: this.phoneNumber || '',
      fax: this.fax || '',
      email: this.email || '',
      geoPoint: this.geoPoint || {
        lat: 45.530060165000464,
        lng: -73.58311552199967
      },
      timeZone: this.timeZone || {
        dstOffset : 3600,
        rawOffset : -18000,
        status : 'OK',
        timeZoneId : 'America/Toronto',
        timeZoneName : 'Eastern Standard Time'
      }
    };
  }
}
