import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
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
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Sign in</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <input
            placeholder="Username"
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
              Username is required
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
            {...register("password", { required: "Password is required" })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && (
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
              {errors.password?.message}
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
            Already have an account? <Link to={"/signup"}>Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
