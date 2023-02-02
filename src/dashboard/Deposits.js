import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>今週の勉強時間</Title>
      <Typography component="p" variant="h4">
        325時間
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        2023/2/2 現在
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          先週の学習時間を見る
        </Link>
      </div>
    </React.Fragment>
  );
}
