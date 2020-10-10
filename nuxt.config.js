export default {
  generate: {
    exclude: [/spa-fallback/],
  },
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],
  router: {
    middleware: ["auth"],
  },
  auth: {
    redirect: {
      login: "/",
      callback: "/auth",
    },
    strategies: {
      aad: {
        scheme: "oauth2",
        endpoints: {
          authorization:
            "https://haptio.b2clogin.com/haptio.onmicrosoft.com/B2C_1_signupsignin1/oauth2/v2.0/authorize",
          token:
            "https://haptio.b2clogin.com/haptio.onmicrosoft.com/B2C_1_signupsignin1/oauth2/v2.0/token",
          access_token_endpoint:
            "https://haptio.b2clogin.com/haptio.onmicrosoft.com/B2C_1_signupsignin1/oauth2/v2.0/token",
          logout: "/",
        },
        token: {
          property: "access_token",
          type: "Bearer",
          maxAge: 1800,
        },
        refreshToken: {
          property: "refresh_token",
          maxAge: 60 * 60 * 24 * 30,
        },
        responseType: "code",
        grantType: "authorization_code",
        accessType: "offline",
        // ******** change this for your Application (Client) ID ********
        clientId: "293fede3-b400-4969-98bf-17f7f5837b5a",
        codeChallengeMethod: "S256",
        scope: ["openid", "profile"],
        autoLogout: true,
      },
    },
  },
};
