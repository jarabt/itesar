import config from "./src/config/environment.js";
import app from "./src/app.js";

app.listen(config.app.port, () => {
  console.log(`Server running on port ${config.app.port}`);
});
