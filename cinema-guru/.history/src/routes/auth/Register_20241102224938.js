import './auth.css';
import Input from '../../components/general/Input';
import SubmitInput from '../../components/general/SubmitButton';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import { Fragment } from 'react';

const Register = ({ username, setUsername, password, setPassword }) => {
  return (
    <Fragment>
      <h1 className='authentication-header'>Create a new account</h1>
      <Input type="text" icon={faUser} label="Username" value={username} setValue={setUsername} />
      <Input type="password" icon={faKey} label="Password" value={password} setValue={setPassword} />
      <SubmitInput label="Sign in" icon={faKey} />
    </Fragment>
  );
}

export default Register;
