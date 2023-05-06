import { useState } from "react";
import {
  Button,
  Card,
  Grid,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  styled,
} from "@mui/material";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { HOME, SCORE } from "../../application/routes/paths";
import { questions, answers } from "../../config/data";

const PAGESIZE = 1;

export type QuestionsType = Array<{
  title: string;
  answerValue: null | number;
}>;

export function QuestionsFormScreen() {
  const navigate = useNavigate();
  const [items, setItems] = useState<QuestionsType>(
    questions.map((question) => ({ title: question, answerValue: null }))
  );
  const [searchParams, setSearchParams] = useSearchParams();

  const pageNumber = parseInt(searchParams.get("page") ?? "1", 10);
  const email = searchParams.get("email") ?? "";
  const nome = searchParams.get("nome") ?? "";
  const whatsapp = searchParams.get("whatsapp") ?? "";

  const initialQuestion = (pageNumber - 1) * PAGESIZE;
  const nextQuestions = initialQuestion + PAGESIZE;
  const isEndQuestions = nextQuestions >= questions.length;

  const handlePreviousPage = () => {
    const previousPage = (pageNumber - 1).toString();
    setSearchParams({ page: previousPage, email, nome, whatsapp });
  };

  const handleNextPage = async () => {
    if (!isEndQuestions) {
      const nextPage = (pageNumber + 1).toString();
      setSearchParams({ page: nextPage, email, nome, whatsapp });
      return;
    }

    const resultado = items
      .reduce(
        (accumulator, item) =>
          item.answerValue ? accumulator + item.answerValue : accumulator,
        0
      )
      .toString();

    navigate({
      pathname: SCORE,
      search: createSearchParams({
        email,
        nome,
        whatsapp,
        resultado,
      }).toString(),
    });
  };

  const handleChangeAnswer = (questionTitle: string, answerNumber: number) =>
    setItems((state) =>
      state.map((newState) =>
        newState.title === questionTitle
          ? { ...newState, answerValue: answerNumber }
          : newState
      )
    );

  return (
    <GridStyled>
      <Typography variant="h6" fontWeight={700} marginBottom={1} align="center">
        Questionário {pageNumber} (QNADE)
      </Typography>
      {items
        .slice(initialQuestion, nextQuestions)
        .map(({ title, answerValue }) => (
          <CardStyled key={title}>
            <Typography variant="h5" fontWeight={700} marginBottom={1}>
              - {title}
            </Typography>
            <FormControl>
              <RadioGroup>
                {answers.map((answer, index) => (
                  <FormControlLabel
                    sx={{ padding: "1rem" }}
                    key={answer}
                    checked={answerValue === index}
                    control={<Radio />}
                    label={`${index} - ${answer}`}
                    onChange={() => handleChangeAnswer(title, index)}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </CardStyled>
        ))}
      <Grid container justifyContent="space-around" marginBottom={4}>
        <Button
          variant="outlined"
          onClick={() =>
            pageNumber > 1 ? handlePreviousPage() : navigate(HOME)
          }
        >
          Voltar
        </Button>

        <Button onClick={handleNextPage} variant="contained">
          {isEndQuestions ? "Enviar" : "Próxima"}
        </Button>
      </Grid>
    </GridStyled>
  );
}

export const GridStyled = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(2, 50),
  },
}));

const CardStyled = styled(Card)(({ theme }) => ({
  padding: theme.spacing(1),
  margin: theme.spacing(1),
}));
