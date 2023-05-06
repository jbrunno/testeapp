import { useFormik } from "formik";
import { Button, Card, Grid, styled } from "@mui/material";
import { useNavigate, createSearchParams } from "react-router-dom";
import { QUESTIONS } from "../../application/routes/paths";
import { CardDescription } from "./CardDescription";
import { CardForm } from "./CardForm";
import * as yup from "yup";

enum FormikData {
  email = "email",
  nome = "nome",
  whatsapp = "whatsapp",
  menorIdade = "menorIdade",
}

export function HomeScreen() {
  const navigate = useNavigate();

  const initialValues = {
    [FormikData.email]: "",
    [FormikData.nome]: "",
    [FormikData.whatsapp]: "",
    [FormikData.menorIdade]: false,
  };
  const validationSchema = yup.object().shape({
    [FormikData.email]: yup
      .string()
      .email("Esta pergunta é obrigatória")
      .required("Esta pergunta é obrigatória"),
    [FormikData.nome]: yup
      .string()
      .min(3)
      .required("Esta pergunta é obrigatória"),
    [FormikData.whatsapp]: yup
      .string()
      .min(11, "Esta pergunta é obrigatória")
      .required("Esta pergunta é obrigatória"),
    [FormikData.menorIdade]: yup
      .boolean()
      .test("isTruth", "Esta pergunta é obrigatória", (value) => !!value)
      .required("Esta pergunta é obrigatória"),
  });

  const onSubmit = (values: typeof initialValues) => {
    navigate({
      pathname: QUESTIONS,
      search: createSearchParams({
        email: values.email,
        nome: values.nome,
        whatsapp: values.whatsapp,
      }).toString(),
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <GridStyled>
      <CardDescription />
      <form onSubmit={formik.handleSubmit}>
        <CardForm.Email
          name={FormikData.email}
          onChange={formik.handleChange}
          error={formik.errors[FormikData.email]}
        />
        <CardForm.Name
          name={FormikData.nome}
          onChange={formik.handleChange}
          error={formik.errors[FormikData.nome]}
        />
        <CardForm.Phone
          name={FormikData.whatsapp}
          onChange={formik.handleChange}
          error={formik.errors[FormikData.whatsapp]}
        />
        <CardForm.UnderAge
          onChange={formik.handleChange}
          name={FormikData.menorIdade}
          error={formik.errors[FormikData.menorIdade]}
        />
        <Grid marginBottom={2}>
          <CardStyled>
            <Button type="submit" variant="contained">
              Próxima
            </Button>
          </CardStyled>
        </Grid>
      </form>
    </GridStyled>
  );
}

const GridStyled = styled(Grid)(({ theme }) => ({
  display: "grid",
  alignItems: "center",
  backgroundColor: "#ffc3c3",
  [theme.breakpoints.up("xl")]: {
    padding: theme.spacing(2, 50),
  },
}));

export const CardStyled = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(4, 4, 0),
}));
