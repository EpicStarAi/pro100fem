# Инструкция по деплою на Render.com

## Шаг 1: Создать GitHub репозиторий
1. На GitHub создайте новый репозиторий: `pro100fem`
2. Нажмите "Create repository"

## Шаг 2: Загрузить код на GitHub

```bash
cd your/local/path
git remote set-url origin https://github.com/EpicStarAi/pro100fem.git
git branch -M main
git push -u origin main
```

## Шаг 3: Развернуть на Render.com

1. Перейдите на https://render.com
2. Войдите через GitHub (нажмите "GitHub")
3. Нажмите "New +" > "Web Service"
4. Выберите репозиторий `pro100fem`
5. Заполните поля:
   - **Name**: pro100fem
   - **Runtime**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Port**: 3000

6. В разделе "Environment Variables" добавьте:
   - `NODE_ENV` = `production`
   - `SESSION_SECRET` = сгенерируйте используя: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
   - Если нужна БД, добавьте `DATABASE_URL`

7. Нажмите "Create Web Service"

Сервис автоматически развернется при каждом push в main ветку.

## Шаг 4: Подключить домен www.pro100fem.com

1. В панели Render найдите "Custom Domain"
2. Введите: `www.pro100fem.com`
3. Скопируйте CNAME запись
4. В панели управления доменом (GoDaddy/Namecheap) добавьте CNAME запись:
   - Имя хоста: `www`
   - Тип: `CNAME`
   - Значение: скопируйте из Render

5. Дождитесь верификации (обычно 5-30 минут)

## Важно!

- Убедитесь, что `PORT=3000` установлен в переменных окружения
- Не коммитьте `.env` файл (он в `.gitignore`)
- Используйте `.env.example` как шаблон
