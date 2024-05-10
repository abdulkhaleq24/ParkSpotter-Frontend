// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";

// const SignUp = () => {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm();
//   const onSubmit = (data) => {
//     console.log(data.firstName);
//   };
//   return (
//     <div>
//       <Link to={"/"}>
//         <button>Home</button>
//       </Link>
//       <div
//         style={{
//           width: "50%",
//           margin: "auto",
//           border: "1px solid black",
//           borderRadius: "10px",
//           padding: "20px",
//         }}
//       >
//         <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
//           Create your account
//         </h1>
//         <form
//           onSubmit={handleSubmit(onSubmit)}
//           style={{ display: "flex", flexDirection: "column", gap: "10px" }}
//         >
//           <input
//             placeholder="Create a username"
//             type="text"
//             style={{
//               padding: "10px",
//               borderRadius: "5px",
//               border: "1px solid #CCCCCC",
//             }}
//             {...register("userName", { required: true })}
//             aria-invalid={errors.userName ? "true" : "false"}
//           />
//           {errors.userName?.type === "required" && (
//             <p
//               role="alert"
//               style={{
//                 color: "red",
//                 border: "1px solid red",
//                 padding: "10px",
//                 background: "#FDEDE8",
//                 borderRadius: "5px",
//               }}
//             >
//               Username name is required
//             </p>
//           )}
//           <input
//             placeholder="First Name"
//             type="text"
//             style={{
//               padding: "10px",
//               borderRadius: "5px",
//               border: "1px solid #CCCCCC",
//             }}
//             {...register("firstName", { required: true })}
//             aria-invalid={errors.firstName ? "true" : "false"}
//           />
//           {errors.firstName?.type === "required" && (
//             <p
//               role="alert"
//               style={{
//                 color: "red",
//                 border: "1px solid red",
//                 padding: "10px",
//                 background: "#FDEDE8",
//                 borderRadius: "5px",
//               }}
//             >
//               First name is required
//             </p>
//           )}

//           <input
//             placeholder="Last Name"
//             type="text"
//             style={{
//               padding: "10px",
//               borderRadius: "5px",
//               border: "1px solid #CCCCCC",
//             }}
//             {...register("lastName", { required: true })}
//             aria-invalid={errors.lastName ? "true" : "false"}
//           />
//           {errors.lastName?.type === "required" && (
//             <p
//               role="alert"
//               style={{
//                 color: "red",
//                 border: "1px solid red",
//                 padding: "10px",
//                 background: "#FDEDE8",
//                 borderRadius: "5px",
//               }}
//             >
//               Last Name is required
//             </p>
//           )}

//           <input
//             placeholder="Password"
//             style={{
//               padding: "10px",
//               borderRadius: "5px",
//               border: "1px solid #CCCCCC",
//             }}
//             type="password"
//             {...register("password", {
//               required: true,
//               minLength: 6,
//               maxLength: 20,
//               pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
//             })}
//             aria-invalid={errors.password ? "true" : "false"}
//           />

//           {errors.password?.type === "required" && (
//             <p
//               role="alert"
//               style={{
//                 color: "red",
//                 border: "1px solid red",
//                 padding: "10px",
//                 background: "#FDEDE8",
//                 borderRadius: "5px",
//               }}
//             >
//               Password is required
//             </p>
//           )}
//           {errors.password?.type === "minLength" && (
//             <p
//               role="alert"
//               style={{
//                 color: "red",
//                 border: "1px solid red",
//                 padding: "10px",
//                 background: "#FDEDE8",
//                 borderRadius: "5px",
//               }}
//             >
//               Password must be 6 characters
//             </p>
//           )}
//           {errors.password?.type === "maxLength" && (
//             <p
//               role="alert"
//               style={{
//                 color: "red",
//                 border: "1px solid red",
//                 padding: "10px",
//                 background: "#FDEDE8",
//                 borderRadius: "5px",
//               }}
//             >
//               Password must be less than 20 characters
//             </p>
//           )}
//           {errors.password?.type === "pattern" && (
//             <p
//               role="alert"
//               style={{
//                 color: "red",
//                 border: "1px solid red",
//                 padding: "10px",
//                 background: "#FDEDE8",
//                 borderRadius: "5px",
//               }}
//             >
//               Password must have one Uppercase one lower case, one number and
//               one special character.
//             </p>
//           )}
//           <input
//             placeholder="Confirm Password"
//             style={{
//               padding: "10px",
//               borderRadius: "5px",
//               border: "1px solid #CCCCCC",
//             }}
//             type="password"
//             {...register("confirmPassword", {
//               required: "Confirm Password  is required",
//             })}
//             aria-invalid={errors.confirmPassword ? "true" : "false"}
//           />
//           {errors.confirmPassword && (
//             <p
//               role="alert"
//               style={{
//                 color: "red",
//                 border: "1px solid red",
//                 padding: "10px",
//                 background: "#FDEDE8",
//                 borderRadius: "5px",
//               }}
//             >
//               {errors.confirmPassword?.message}
//             </p>
//           )}

//           <input
//             style={{
//               padding: "10px",
//               borderRadius: "5px",
//               border: "1px solid #CCCCCC",
//             }}
//             type="submit"
//             value={"Create Account"}
//           />

//           <p>
//             Don&apos;t have an account? <Link to={"/login"}>Log In</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <div
        style={{
          width: "50%",
          margin: "auto",
          border: "1px solid black",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
          Create your account
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <input
            placeholder="Create a username"
            type="text"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #CCCCCC",
            }}
            {...register("userName", { required: true })}
            aria-invalid={errors.userName ? "true" : "false"}
          />
          {errors.userName?.type === "required" && (
            <p
              role="alert"
              style={{
                color: "red",
                border: "1px solid red",
                padding: "10px",
                background: "#FDEDE8",
                borderRadius: "5px",
              }}
            >
              Username name is required
            </p>
          )}
          <input
            placeholder="First Name"
            type="text"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #CCCCCC",
            }}
            {...register("firstName", { required: true })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {errors.firstName?.type === "required" && (
            <p
              role="alert"
              style={{
                color: "red",
                border: "1px solid red",
                padding: "10px",
                background: "#FDEDE8",
                borderRadius: "5px",
              }}
            >
              First name is required
            </p>
          )}
          <input
            placeholder="Last Name"
            type="text"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #CCCCCC",
            }}
            {...register("lastName", { required: true })}
            aria-invalid={errors.lastName ? "true" : "false"}
          />
          {errors.lastName?.type === "required" && (
            <p
              role="alert"
              style={{
                color: "red",
                border: "1px solid red",
                padding: "10px",
                background: "#FDEDE8",
                borderRadius: "5px",
              }}
            >
              Last Name is required
            </p>
          )}
          <input
            placeholder="Password"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #CCCCCC",
            }}
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
            })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {/* Password validation error messages */}
          {errors.password?.type === "required" && (
            <p
              role="alert"
              style={{
                color: "red",
                border: "1px solid red",
                padding: "10px",
                background: "#FDEDE8",
                borderRadius: "5px",
              }}
            >
              Password is required
            </p>
          )}
          {errors.password?.type === "minLength" && (
            <p
              role="alert"
              style={{
                color: "red",
                border: "1px solid red",
                padding: "10px",
                background: "#FDEDE8",
                borderRadius: "5px",
              }}
            >
              Password must be 6 characters
            </p>
          )}

          {errors.password?.type === "maxLength" && (
            <p
              role="alert"
              style={{
                color: "red",
                border: "1px solid red",
                padding: "10px",
                background: "#FDEDE8",
                borderRadius: "5px",
              }}
            >
              Password must be less than 20 characters
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p
              role="alert"
              style={{
                color: "red",
                border: "1px solid red",
                padding: "10px",
                background: "#FDEDE8",
                borderRadius: "5px",
              }}
            >
              Password must have one Uppercase one lower case, one number and
              one special character.
            </p>
          )}
          <input
            placeholder="Confirm Password"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #CCCCCC",
            }}
            type="password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
            aria-invalid={errors.confirmPassword ? "true" : "false"}
          />
          {/* Confirm password validation error message */}
          {errors.confirmPassword && (
            <p
              role="alert"
              style={{
                color: "red",
                border: "1px solid red",
                padding: "10px",
                background: "#FDEDE8",
                borderRadius: "5px",
              }}
            >
              {errors.confirmPassword?.message}
            </p>
          )}
          <input
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #CCCCCC",
            }}
            type="submit"
            value={"Create Account"}
          />
          <p>
            Don&apos;t have an account? <Link to={"/login"}>Log In</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
