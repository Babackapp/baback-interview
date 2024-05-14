import { log } from "console";
import app from "./server";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
});
