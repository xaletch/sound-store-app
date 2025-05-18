export interface SendEmailRequest {
  email: string;
}

export type SendEmailResponse = 'success' | 'error';