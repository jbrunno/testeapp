import { Card, Grid, styled, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api } from "../../application/api/axios";
import logoAcreditarImg from "../../assets/logoAcreditar.png";
import scoreImg from "../../assets/score.jpg";

export function ScoreScreen() {
  const [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get("email") ?? "";
  const nome = searchParams.get("nome") ?? "";
  const whatsapp = searchParams.get("whatsapp") ?? "";
  const resultado = searchParams.get("resultado") ?? "";

  const [_, setcallOnce] = useState<boolean>(true);

  const handlePostAPI = useCallback(
    () =>
      setcallOnce((state) => {
        if (state) {
          api.post("/api/quizzes", {data:{
            email,
            nome,
            whatsapp,
            resultado,
          }});
        }

        return !state;
      }),
    []
  );

  useEffect(() => {
    handlePostAPI();
  }, []);

  return (
    <GridStyled>
      <CardStyled>
        <ImgStyled src={logoAcreditarImg} />
        <Typography variant="h6" fontWeight={700} align="center">
          {nome.toUpperCase()}, analisando suas respostas
        </Typography>
        <Typography variant="h4" fontWeight={700} align="center">
          A soma total das sua respostas é
        </Typography>
        <Typography variant="h3" fontWeight={700} align="center" marginY={2}>
          {resultado}
        </Typography>
        <Typography align="center">
          Pegue o total das suas resposta e veja na imagem a baixo qual o nível
          da sua ansiedade.
        </Typography>
        <Typography align="center">
          – Se o total deu <strong>acima de 60</strong> você precisa
          <strong> cuidar urgentemente da sua Ansiedade.</strong>
        </Typography>
        <Typography align="center">
          – Se o total deu <strong>de 36 a 59</strong> você precisa
          <strong> cuidar urgentemente da sua Ansiedade.</strong>
        </Typography>
        <Typography align="center">
          – Se o total deu <strong>de 16 a 35</strong> você precisa olhar com
          <strong> atenção para sua Ansiedade.</strong>
        </Typography>
        <Typography align="center">
          – Se o total deu <strong>menos que 15</strong> você saber que
          <strong> tem pouca de Ansiedade.</strong>
        </Typography>
        <Typography align="center">
          – Se o total deu <strong>ZERO</strong>, parabéns você tem o domínio
          total da sua vida e ansiedade não faz parte do seu dia a dia.
        </Typography>
        <ImgScore src={scoreImg} />
      </CardStyled>
    </GridStyled>
  );
}

const GridStyled = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(2, 20),
  },
}));

const CardStyled = styled(Card)(({ theme }) => ({
  display: "grid",
  justifyContent: "center",
  padding: theme.spacing(3),
  margin: theme.spacing(1),
}));

const ImgStyled = styled("img")(({ theme }) => ({
  margin: theme.spacing(0, "auto", 2),
}));

const ImgScore = styled("img")(({ theme }) => ({
  margin: theme.spacing(4, "auto"),
  width: "100%",
  maxWidth: "600px",
}));
