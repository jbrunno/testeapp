import {
  Card,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { answers } from "../../config/data";
import { CardStyled } from "./Home";

export function CardDescription() {
  return (
    <CardStyled>
      <Typography variant="h4" fontWeight={700}>
        Questionário para medir o Nível de Ansiedade, Depressão e Estresse
        (QNADE)
      </Typography>
      <Typography variant="body2" marginY={1}>
        O <strong>Questionário</strong> é composto de 24 perguntas e possui 2
        objetivos:
      </Typography>
      <List>
        {[
          "Identificado os sintomas de ansiedade, depressão e estresse.",
          "Identificar o Nível que você se encontra.",
        ].map((text, index) => (
          <ListItem key={text}>
            <ListItemText>
              <Typography variant="body2">
                {index + 1}.{text}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>

      <Typography variant="body2" fontWeight={700} marginBottom={1}>
        Como funciona ?
      </Typography>
      <Typography variant="body2">
        O <strong>QNADE</strong> utiliza um sistema de pontuação com base em um
        código placas e cores organizado por Intensidade:
      </Typography>

      <Typography fontStyle="italic" marginY={1}>
        Emergência, Prioridade, Atenção e Não Urgente.
      </Typography>

      <Typography sx={{ display: "inline-block" }} fontWeight={700}>
        Como preencher o formulário?
      </Typography>

      <Typography variant="body2" marginY={1}>
        Você deverá responder cada questões sobre os sintomas que apresentou{" "}
        <strong>nos últimos 7 dias.</strong>
      </Typography>

      <Typography variant="body2">
        Cada resposta tem uma pontuação na frente ex:{" "}
      </Typography>

      <Typography sx={{ display: "inline-block" }} fontWeight={700} marginY={1}>
        Pergunta:
      </Typography>

      <Typography variant="body2">Você sentiu .... ?</Typography>

      <Typography sx={{ display: "inline-block" }} fontWeight={700} marginY={1}>
        Resposta:
      </Typography>

      {answers.map((answer, index) => (
        <Grid key={answer}>
          <Typography sx={{ display: "inline-block" }} fontWeight={700}>
            {index} -
          </Typography>{" "}
          {answer}
        </Grid>
      ))}

      <Typography sx={{ display: "inline-block" }} fontWeight={700} marginY={1}>
        #ATENÇÃO#
      </Typography>
      <Typography sx={{ display: "inline-block" }} fontWeight={700} marginY={1}>
        A resposta que você marcou, na frente dela tem um número, pode ser (0,1,
        2, 3 ou 4), o que precisa fazer é ir somando os pontos de cada resposta
        manualmente e no final terá o total de pontos para verificar o seu
        nível.
      </Typography>

      <Typography variant="body2" marginY={1}>
        Assim que responder todas as perguntas você terá um resultado com o
        total de pontos, este total você terá conferir na imagem abaixo o seu
        nível de ansiedade.
      </Typography>

      <Typography variant="body2" marginY={1}>
        Depois de preenchido todo o questionário você receberá um e-mail
        automático para poder conferir sua resposta caso precise.
      </Typography>

      <Typography variant="body2" marginY={1}>
        Este teste foi retirado do site Núcleo de Atenção ao Desenvolvimento
        Humano
      </Typography>
    </CardStyled>
  );
}
