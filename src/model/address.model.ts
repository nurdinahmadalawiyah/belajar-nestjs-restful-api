export class AddressResponse {
  id: number;
  street?: string;
  city?: string;
  province?: string;
  country: string;
  postal_code: string;
}

export class CreateAdressRequest {
  contact_id: number;
  street?: string;
  city?: string;
  province?: string;
  country: string;
  postal_code: string;
}
