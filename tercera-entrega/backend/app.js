import app from './index.js'
import './db/database.js'

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`server running on port ${PORT}`)
)