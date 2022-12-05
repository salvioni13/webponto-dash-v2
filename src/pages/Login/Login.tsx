
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { login, user } from "../../redux/users/userSlicer";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useAppDispatch();
  const loggedUser = useAppSelector(user);
  const navigate = useNavigate();


  const onSubmit = useCallback(
    (data: any) => {
      dispatch(login({ email: data?.email, password: data?.password },))
    }, [dispatch]
  );

  useEffect(() => {
    if (loggedUser && loggedUser?.id) {
      navigate('/dashboard');
    }
  }, [loggedUser])
  return (
    // <form >
    //   <div>
    //     <label>
    //       E-mail
    //     </label>

    //     <input className="form-control" type="email" placeholder="email"  />

    //   </div>
    //   <div className="mt-3">
    //     <label>
    //       Senha
    //     </label>

    //     <input className="form-control" type="password" placeholder="senha"  />

    //   </div>
    //   <div className="justify-content-center mt-3">
    //     <div className="d-flex justify-content-center gap-3">
    //       <button type="submit" className="btn btn-outline-primary"
    //       >
    //         Logar
    //       </button>
    //     </div>
    //   </div>
    // </form>
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-4 py-10 bg-white dark:bg-indigo-900 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl dark:text-white font-semibold">Webponto</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit(onSubmit)} className="py-8 text-base dark:bg-indigo-900 dark:text-white leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input id="email" {...register("email")} type="text" className="peer placeholder-transparent dark:bg-indigo-900 dark:text-white  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-300" placeholder="Email" />
                  <label htmlFor="email"  className="absolute left-0 -top-3.5 dark:text-white text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-blue-300 peer-focus:text-sm">Email Address</label>
                </div>
                <div className="relative">
                  <input id="password" {...register("password")} type="password" className="peer placeholder-transparent dark:bg-indigo-900 dark:text-white h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                  <label htmlFor="password"  className="absolute left-0 -top-3.5 dark:text-white text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-blue-300 peer-focus:text-sm">Password</label>
                </div>
                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login