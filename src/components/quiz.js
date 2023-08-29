import { Margin } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../App.css";
import { Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Quizapp(props) {
  return (
    <div className="card">
      <Box
        sx={{
          width: 700,
          height: 410,
          padding: 1,

          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "dark",
            //   opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Typography variant="h5" color={"white"} m={1}>
          {" "}
          {props.quiz.question}{" "}
        </Typography>
        {props.quiz.options.map((option) => (
          <Button
            fullWidth={true}
            sx={{ padding: 2.5, margin: 0.5 }}
            variant="contained"
            onClick={() => {
                if(option === props.quiz.answer){
                    props.updateScore(props.score+1)
                }
                props.setCount(props.count + 1)
            }}
          >
            {option}
          </Button>
        ))}
      </Box>
    </div>
  );
}
