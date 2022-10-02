import { app } from './index.js';
import './database.js';

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`running on port ${PORT}`));
