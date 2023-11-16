import { A } from "@solidjs/router";

export default function LoginForm() {
  return (
    <div class="login__form mt-1">
      <h1>Login</h1>
      <span>
        Se não tiver conta se
        <A href="/cadastro"> cadastre</A>{" "}
      </span>
      <form
        class="flex flex__column mt-1"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>Email</label>
        <input
          class="input__new"
          type="text"
          placeholder="Digite seu email"
        ></input>
        <label>Senha</label>
        <input
          class="input__new"
          type="text"
          placeholder="Digite sua senha"
        ></input>
        <button class={"button primary"}>LOGIN</button>
      </form>
      <A href={`${import.meta.env.VITE_PUBLIC_BACKEND}/auth/google`}>
        <button class={"button primary"}>LOGIN COM GOOGLE</button>
      </A>
    </div>
  );
}
