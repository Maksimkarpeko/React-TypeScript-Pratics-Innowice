export const APP_TEXT = {
  welcome: {
    title: 'Welcome to the Help Desk',
    description:
      'We will help you process requests efficiently, manage clients, and solve problems faster.',
    registrationButton: 'Registration',
    loginButton: 'Login',
  },
  authMode: {
    register: 'registration',
    login: 'login',
  },
  auth: {
    registration: {
      title: 'Create an account',
      subTitle: 'Please fill in the details to register.',
      buttonText: 'Register',
      footerText: 'If you have an account',
      footerLink: 'Log in',
    },
    login: {
      title: 'Welcome back',
      subTitle: 'Please log in to your account',
      buttonText: 'Log in',
      footerText: "If you don't have an account?",
      footerLink: 'Registration',
    },
    fieldsLabel: {
      name: 'Name',
      password: 'Password',
      email: 'Email',
    },
  },
} as const

export type AuthModeType = (typeof APP_TEXT.authMode)[keyof typeof APP_TEXT.authMode]
