import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import css from './LoginForm.module.css';
import { FormContainer, FromInput, SubmitButton } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  return (
    <div>
      <h1>Sign In</h1>
    <FormContainer onSubmit={handleSubmit} autoComplete="off">
      <label>Email</label>
        <FromInput
          type="email"
          autoComplete="email"
          id="email"
          label="Email Address"
          name="email" />
      <label>Password</label>
        <FromInput
          type="password"
          name="password"
          id="password"
          label="Password"
          autoComplete="current-password" />
      <SubmitButton type="submit">Log In</SubmitButton>
      </FormContainer>
      </div>
  );
};
