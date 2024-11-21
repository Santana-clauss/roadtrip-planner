const express = require('express');
const app = express();
const PORT = process.env.PORT || 4005;


app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
