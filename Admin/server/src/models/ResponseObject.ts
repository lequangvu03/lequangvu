export class ResponseObject<T> {
  message: string
  data: T
  constructor({ data, message }: { message: string; data: T }) {
    this.message = message
    this.data = data
  }
}
