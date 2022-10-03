const app = require('./index');
require('./database');

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`running on port ${PORT}`));
