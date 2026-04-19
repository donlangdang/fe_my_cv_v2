interface UploadedBy {
  access_key: string;
  custom_id: string;
  external_id: string;
}

interface CreatedBy {
  access_key: string;
  custom_id: string;
  external_id: string;
}

export interface CloudinaryResource {
  access_control: null | string | number;
  access_mode: string;
  aspect_ratio: number;
  asset_folder: string;
  asset_id: string;
  backup_bytes: number;
  bytes: number;
  created_at: string;
  created_by: CreatedBy;
  display_name: string;
  etag: string;
  filename: string;
  format: string;
  height: number;
  pixels: number;
  public_id: string;
  resource_type: string;
  secure_url: string;
  status: string;
  type: string;
  uploaded_at: string;
  uploaded_by: UploadedBy;
  url: string;
  version: number;
  width: number;
}

export interface CloudinarySearchResponse {
  rate_limit_allowed: number;
  rate_limit_remaining: number;
  rate_limit_reset_at: string;
  resources: CloudinaryResource[];
  time: number;
  total_count: number;
}
