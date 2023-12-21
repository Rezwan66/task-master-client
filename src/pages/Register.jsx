import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import bannerImg from '../assets/images/banner.jpg';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
// import useAxiosPublic from '../hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import axios from 'axios';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const { createUser, updateUserProfile, googleLogin } =
    useContext(AuthContext);
  // const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const onSubmit = async data => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    // console.log(imageFile);
    const res = await axios.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    // console.log(res);
    const photoLink = res?.data?.data?.display_url;
    if (res.data.success) {
      createUser(data.email, data.password).then(res => {
        const loggedUser = res.user;
        console.log(loggedUser);
        updateUserProfile(data.name, photoLink)
          .then(() => {
            toast('Registered Successfully!', {
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
      });
    }
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
        <form onSubmit={handleSubmit(onSubmit)} className="card-body py-3">
          <h2 className="text-2xl text-center text-white font-black tracking-widest mb-2">
            Sign Up
          </h2>
          {/* name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white font-medium">Name</span>
            </label>
            <input
              type="text"
              name="name"
              {...register('name')}
              placeholder="full name"
              className="input input-bordered"
              required
            />
          </div>
          {/* photo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white font-medium">Photo</span>
            </label>
            <input
              {...register('image')}
              type="file"
              name="image"
              className="file-input file-input-bordered w-full max-w-xs"
              required
            />
          </div>
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
            Already registered?{' '}
            <Link className="text-yellow-400 font-bold" to="/login">
              Login
            </Link>
          </p>
          <div className="form-control">
            <button className="btn btn-primary capitalize mt-4 mb-2">
              Register Now
            </button>
          </div>
          <div className="divider divider-warning text-white">OR</div>
        </form>

        <div className="px-8">
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white btn-block capitalize mb-4"
          >
            Sign In with Google <FcGoogle className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
