import express from 'express';
import cors from 'cors';

import lessonsRouter from './src/app/lessons/infrastructure/lessons.router';
import modalsRouter from './src/app/modals/infrastructure/modals.router';
import sitemapRouter from './src/app/sitemap/infrastructure/sitemap.router';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;

app.use('/lessons', lessonsRouter);
app.use('/sitemap', sitemapRouter);
app.use('/modals', modalsRouter);

app.listen(PORT, () => {});