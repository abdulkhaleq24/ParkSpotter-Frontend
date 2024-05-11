import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Container, Header, Form, Loader } from "./SingIn.styles";
import toast from "react-hot-toast";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    setLoading(true);
    fetch("https://parkspottermain.pythonanywhere.com/accounts/user_login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.is_staff) {
          setLoading(false);
          toast.success("Login successful");
          navigate("/dashboard");
          console.log("Success:", data);
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        // console.error("Error:", error);
        toast.error(error);
      });
  };

  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Container>
        <Header>Sign in</Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Username"
            type="text"
            {...register("username", { required: true })}
            aria-invalid={errors.username ? "true" : "false"}
          />
          {errors.username?.type === "required" && (
            <p role="alert">Username is required</p>
          )}

          <input
            placeholder="Password"
            type="password"
            {...register("password", { required: "Password is required" })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && <p role="alert">{errors.password?.message}</p>}

          {loading ? (
            <>
              <Loader type="submit"></Loader>
            </>
          ) : (
            <>
              <input type="submit" value={"Sign In"} />
            </>
          )}

          <p>
            Dont have an account? <Link to={"/signup"}>Sign Up</Link>
          </p>
        </Form>
      </Container>
    </div>
  );
};

export default SignIn;
