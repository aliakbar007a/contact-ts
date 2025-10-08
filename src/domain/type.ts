export interface Contact {
  name: string;
  phone: string;
  tag?: string;
}

export interface BaseResponse {
  success: boolean;
  message: string;
}

// export interface ContactsResponse extends BaseResponse {
//   data?: Contact[];
// }

export interface ContactResponse extends BaseResponse {
  data?: Contact;
}

