/*createSecretHolder accepts any value as secret and returns an object with two 
methods getSecret() which returns the secret and setSecret() which sets the secret*/
function createSecretHolder(secret) {
  return {
    getSecret: () => secret,
    setSecret: function (value) {
      secret = value;
    }
  }
}
