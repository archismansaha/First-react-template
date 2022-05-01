import React from 'react'
import { FormLabel } from './SigninElements'
import { 
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    
    FormInput,
    FormButton,
    Text} from "./SigninElements.js"

const SignIn = () => {
  return (
    <>
    <Container>
    <FormWrap>
    <Icon to="/">dolla</Icon>
    <FormContent>
    
    <Form action="#">
    <FormH1>Sign in account</FormH1>
  <FormLabel htmlFor='for'>Email</FormLabel>
  <FormInput type='email' required/>

<FormLabel htmlFor='for'>Password</FormLabel>
  <FormInput type='password' required/>
  <FormButton type='submit'>submit</FormButton>
  <Text>Forgot PAssowrd</Text>
    </Form>
    </FormContent>
    </FormWrap>
    </Container>
    
    
    </>
  )
}

export default SignIn