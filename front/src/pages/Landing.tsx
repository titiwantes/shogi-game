import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import useAppContext from "@/utils/hooks/useAppContext";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const appContext = useAppContext();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const handleClick = () => {
    if (!username) return;
    appContext.setUsername(username);
    navigate("/game");
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Shogi game</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Input
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </CardContent>
        <CardFooter
            className="flex justify-center"
        >
          <Button onClick={handleClick}>
            <span>Play</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Landing;
