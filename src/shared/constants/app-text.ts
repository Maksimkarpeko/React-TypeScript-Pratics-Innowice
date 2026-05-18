import type { keyof } from 'zod'

export const APP_TEXT = {
  onboarding: {
    title: 'Welcome to the Help Desk',
    description:
      'We will help you process requests efficiently, manage clients, and solve problems faster.',
    registrationButton: 'Registration',
    loginButton: 'Login',
  },
  auth_mode: {
    reg: 'registration',
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
      Name: 'Name',
      Password: 'Password',
      Email: 'Email',
    },
  },
} as const

export type AuthModeType = (typeof APP_TEXT.auth_mode)[keyof typeof APP_TEXT.auth_mode];
