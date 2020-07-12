interface Token {
  token: string,
  expiration: Date | string
}

interface User {
  email?: string,
  uuid?: string
}

interface UserData {
  tokens?: Token[],
}
