import { Link, useLocation, useNavigate } from 'react-router-dom';
import bannerImg from '../assets/images/banner.jpg';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    // watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const onSubmit = data => {
    console.log(data);

    loginUser(data.email, data.password)
      .then(res => {
        const user = res.user;
        console.log(user);
        toast('Logged In Successfully!', {
          icon: '👏',
          style: {
            borderRadius: '8px',
            background: '#333',
            color: '#fff',
          },
        });
        reset();
        navigate(from, { replace: true });
      })
      .catch(err => {
        console.log(err.message);
        toast(err.message, {
          icon: '❌',
          style: {
            borderRadius: '8px',
            background: '#333',
            color: '#fff',
          },
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(res => {
        const user = res.user;
        console.log(user);
        toast('Google Login Successful!', {
          icon: '👏',
          style: {
            borderRadius: '8px',
            background: '#333',
            color: '#fff',
          },
        });
        navigate(from, { replace: true });
      })
      .catch(err => {
        console.log(err.message);
        toast(err.message, {
          icon: '❌',
          style: {
            borderRadius: '8px',
            background: '#333',
            color: '#fff',
          },
        });
      });
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="card shrink-0 w-full max-w-sm shadow-2xl glass rounded-md">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h2 className="text-2xl text-center text-white font-black tracking-widest mb-5">
            Sign In
          </h2>
          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
              {...register('email')}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white font-medium">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              {...register('password', {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password?.type === 'required' && (
              <p className="text-red-200 font-semibold ml-2 mt-1 text-xs">
                Password is required
              </p>
            )}
            {errors.password?.type === 'minLength' && (
              <p className="text-red-200 font-semibold ml-2 mt-1 text-xs">
                Password must be atleast 6 ch.
              </p>
            )}
            {errors.password?.type === 'maxLength' && (
              <p className="text-red-200 font-semibold ml-2 mt-1 text-xs">
                Password must be less than 20 ch.
              </p>
            )}
            {errors.password?.type === 'pattern' && (
              <p className="text-red-200 font-semibold ml-2 mt-1 text-xs">
                Password must have 1 uppercase, lowercase, number and sp.ch.
              </p>
            )}
          </div>
          <p className="text-right text-white text-sm">
            Not a member yet?{' '}
            <Link className="text-yellow-400 font-bold" to="/register">
              Register
            </Link>
          </p>
          <div className="form-control mt-6">
            <button className="btn btn-primary capitalize">Login Now</button>
          </div>
        </form>

        <div className="px-8">
          <div className="divider divider-warning text-white">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white btn-block capitalize my-8"
          >
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
