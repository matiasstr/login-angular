import dotenv from 'dotenv';
dotenv.config();

import app from './app';

const port = process.env.PORT || 3001;
console.log('🟢 SERVER ENV TEST MONGODB_URI:', process.env.MONGODB_URI);

app.listen(port, () => {
  console.log(`Server corriendo en http://localhost:${port}`);
});
