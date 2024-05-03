import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormContainer, FromInput, SubmitButton } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  return (
    <div>
    <h1>Registration</h1>
    <FormContainer noValidate onSubmit={handleSubmit} autoComplete="off">
      <label>Username</label>
        <FromInput
          type="text"
          autoComplete="given-name"
          name="name" />
      
      <label>Email</label>
        <FromInput
          type="email"
          autoComplete="email"
          name="email"
          id="email"
          label="Email Address"
          />
        
      
      <label>Password</label>
        <FromInput
          type="password"
          name="password"
          id="password"
          label="Password"
          autoComplete="new-password"
        />
      
      <SubmitButton type="submit">Register</SubmitButton>
      </FormContainer>
      </div>
  );
};
