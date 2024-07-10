import HTTP_RESPONSE_STATUS_CODES from '~/constants/http-status-codes'

interface IServerError {
  message: string
  status: number
}

type TErrors = Record<
  string,
  {
    msg: string
    [key: string]: any
  }
>

export class ServerError implements IServerError {
  message: string
  status: number

  constructor({ message, status }: ServerError) {
    this.message = message
    this.status = status
  }
}

export class EntityError extends ServerError {
  errors: TErrors
  constructor({ message = 'Validation Error', errors }: { message?: string; errors: TErrors }) {
    super({ message, status: HTTP_RESPONSE_STATUS_CODES.UNPROCESSABLE_CONTENT })
    this.errors = errors
  }
}
