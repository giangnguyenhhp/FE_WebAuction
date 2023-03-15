export interface AuthResponseDto {
  "isAuthSuccessful": boolean,
  "errorMessage": string,
  "token": string,
  "expiration": Date
}
