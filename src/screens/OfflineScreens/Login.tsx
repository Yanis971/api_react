import React, { SyntheticEvent, useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import CustomInput from '../../components/Input/CustomInput';
import ButtonLoader from '../../components/Loader/ButtonLoader';
import SubmitButton from '../../components/Button/SubmitButton';
import axios from 'axios';
import { API_ROOT } from '../../constants/ApiConstant';

const Login: React.FC = () => {
  //on déclare nos states
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //on récupère la méthode signIn du contexte d'authentification
  const { signIn } = useAuthContext();
  //on récupère le hook de navigation
  const navigate = useNavigate();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);
    axios.post(`${API_ROOT}/login`, {
      email,
      password
    }).then((response) => {
      if (response.data.email) {
        const user = {
          userId: response.data.id,
          email: response.data.email,
          name: response.data.name,
        };

        try {
          signIn(user);
          setIsLoading(false);
          navigate('/');
        } catch (error) {
          setIsLoading(false);
          console.log(`Erreur lors de la création de la session : ${error}`)
        }

      }
    }).catch((error) => {
      console.log(`Erreur lors de la connexion : ${error}`)
      setIsLoading(false);
    })
  }

  return (
    <div className='flex flex-1 flex-col h-screen justify-start items-center bg-brown_dark'>
      <h1 className='text-white font-bold text-4xl pb-5'>Connectez vous</h1>
      <form onSubmit={handleSubmit} className='w-[80%] md:w-1/2 lg:w-4/12'>
        {/* input email */}
        <CustomInput
          state={email}
          label='Mon email'
          callable={(e) => setEmail(e.target.value)}
          type='email'
        />
        {/* input email */}
        <CustomInput
          state={password}
          label='Mon mot de passe'
          callable={(e) => setPassword(e.target.value)}
          type='password'
        />
        <Link to='/register' className='text-white hover:text-yellow_hover'>Pas de compte ? Inscrivez vous</Link>
        <div className='flex items-center justify-center pt-5'>
          {isLoading ? <ButtonLoader /> : <SubmitButton label="Se connecter" />}
        </div>

      </form>
    </div>
  )
}

export default Login;