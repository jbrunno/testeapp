import { ErrorOutline } from "@mui/icons-material";
import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, SyntheticEvent } from "react";
import { CardStyled } from "./Home";

type CardFormProps = {
  name: string;
  error?: string;
  onChange: (e: ChangeEvent | SyntheticEvent) => void;
};

type CardErrorMessageProps = Record<"error", string>;

function CardErrorMessage({ error }: CardErrorMessageProps) {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="flex-start"
      marginTop={2}
    >
      <ErrorOutline color="error" />
      <Typography variant="subtitle2" color="red" marginLeft={1}>
        {error}
      </Typography>
    </Grid>
  );
}

function CardEmail({ name, onChange, error }: CardFormProps) {
  return (
    <CardStyled>
      <TextField
        size="small"
        error={!!error}
        fullWidth
        type="email"
        label="E-mail"
        placeholder="Seu e-mail"
        name={name}
        onChange={onChange}
      />
      {error && <CardErrorMessage error={error} />}
    </CardStyled>
  );
}

function CardName({ name, onChange, error }: CardFormProps) {
  return (
    <CardStyled>
      <TextField
        size="small"
        error={!!error}
        fullWidth
        type="text"
        label="Nome:"
        placeholder="Sua resposta"
        name={name}
        onChange={onChange}
      />
      {error && <CardErrorMessage error={error} />}
    </CardStyled>
  );
}

function CardPhone({ name, onChange, error }: CardFormProps) {
  return (
    <CardStyled>
      <TextField
        size="small"
        error={!!error}
        fullWidth
        type="text"
        label={
          <Typography variant="subtitle1">
            Telefone DDD+CELULAR <strong>00 00000-0000</strong>
          </Typography>
        }
        placeholder="Sua resposta"
        name={name}
        onChange={onChange}
      />
      {error && <CardErrorMessage error={error} />}
    </CardStyled>
  );
}

function CardUnderAge({ name, onChange, error }: CardFormProps) {
  const radioValue = [
    {
      value: true,
      text: "Sim, sou maior de 18 anos",
    },
    {
      value: false,
      text: "Não",
    },
  ];
  return (
    <CardStyled>
      <FormControl>
        <RadioGroup>
          {radioValue.map((radio) => (
            <FormControlLabel
              key={radio.text}
              name={name}
              value={radio.value}
              onChange={onChange}
              control={<Radio />}
              label={<Typography variant="subtitle1">{radio.text}</Typography>}
            />
          ))}
        </RadioGroup>
      </FormControl>
      {error && <CardErrorMessage error={error} />}
    </CardStyled>
  );
}

export const CardForm = {
  Email: CardEmail,
  Name: CardName,
  Phone: CardPhone,
  UnderAge: CardUnderAge,
};
