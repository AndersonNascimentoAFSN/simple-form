import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./styles.module.scss";

interface IFormProps {
  name: string;
  password: string;
  email: string;
}

const signUpSchema = yup
  .object({
    name: yup.string().required("É necessário informar seu nome"),
    password: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .required(),
    email: yup
      .string()
      .email()
      .required("É necessário informar seu endereço de e-mail"),
  })
  .required();

export function SimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormProps>({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      name: '',
      password: '',
      email: ''
    }
  });

  const onSubmit = (data: IFormProps) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome</label>
        <input type="text" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label>Senha</label>
        <input
          type="password"
          // autocomplete="current-password"
          {...register("password")}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <label>Email</label>
        <input type="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
