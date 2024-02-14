import * as dotenv from 'dotenv';
import app from './server'

dotenv.config();

app.listen(process.env.PORT || 3001, () => {
	console.log("Server running on port 3001");
});
