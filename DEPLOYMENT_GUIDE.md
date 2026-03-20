# 🚀 Полное руководство: GitHub → Render → Домен

## Часть 1: GitHub (шаг, который вы делаете сейчас)

### 1.1 Создать репозиторий
- Откройте: https://github.com/new
- Repository name: `pro100fem`
- Visibility: **Public** ✅
- НЕ инициализируйте (без README, .gitignore, license)
- **Create repository**

### 1.2 После создания выполните в командной строке:
```bash
cd i:\BUCH\PRO100FEM.COM
git push -u origin main
```

Если спросит креденшалы:
- Username: `EpicStarAi`
- Password: Используйте Personal Access Token (см. выше)

---

## Часть 2: Деплой на Render.com

### 2.1 Регистрация на Render
- Откройте: https://render.com
- Нажмите "/ознакомитьсяС" или "Sign Up"
- **Выберите: "Continue with GitHub"**
- Авторизуйтесь
- Дайте разрешение на доступ к репозиториям

### 2.2 Создание Web Service
1. На главной Render нажмите **"New +"** → **"Web Service"**
2. В списке выберите репозиторий **`EpicStarAi/pro100fem`**
3. Если репо не видно, нажмите "Connect account" и авторизуйтесь еще раз

### 2.3 Конфигурация сервиса
Заполните поля:
- **Name**: `pro100fem`
- **Runtime**: `Node`
- **Region**: `Oregon (US West)` или ближайший к вам
- **Branch**: `main`
- **Build Command**: 
  ```
  npm install && npm run build
  ```
- **Start Command**: 
  ```
  npm start
  ```

### 2.4 Окружение (Environment Variables)
Нажмите **"Add Environment Variable"** и добавьте:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `PORT` | `3000` |
| `SESSION_SECRET` | сгенерируйте с помощью (из консоли): `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |

**Если используете БД PostgreSQL:**
- `DATABASE_URL` = ваша строка подключения

### 2.5 Запуск
- Нажмите **"Create Web Service"**
- Render автоматически начнет сборку (можно смотреть логи)
- Когда статус станет **"Live"** - сервер готов!
- Render выдаст вам URL вида: `https://pro100fem-xxx.onrender.com`

### 2.6 Автоматический деплой
После каждого `git push` в `main` - Render автоматически пересобирает приложение.

---

## Часть 3: Подключение домена www.pro100fem.com

### 3.1 В панели Render
1. Откройте ваш Web Service
2. Найдите раздел **"Custom Domain"** или **"Domains"**
3. Нажмите **"Add Custom Domain"**
4. Введите: `www.pro100fem.com`
5. Render покажет CNAME запись (например: `onrender.com`)

### 3.2 В панели управления доменом (GoDaddy, Namecheap, etc)
1. Найдите DNS записи
2. Добавьте CNAME запись:
   - **Type**: CNAME
   - **Name/Host**: `www` (НЕ полный домен)
   - **Value/PoinTo**: скопируйте из Render (обычно `onrender.com`)
   - **TTL**: 300 или меньше

3. Для базового домена (`pro100fem.com` без www):
   - **Type**: A
   - **Name/Host**: `@` или оставить пусто
   - **Value**: IP адрес из Render (если указан) или используйте CNAME

4. **Сохраните** изменения

### 3.3 Проверка
- Дождитесь 5-30 минут (распространение DNS)
- Откройте `www.pro100fem.com` в браузере
- Должен показать ваш сайт!

---

## 🔍 Отладка

### Сайт не показывается
```bash
# Проверьте логи в Render (Live Logs)
# Должны быть строки типа: "serving on port 3000"

# Проверьте DNS:
nslookup www.pro100fem.com
# Должна вывести IP адрес Render
```

### Ошибка сборки в Render
- Откройте **Deploy Logs** на Render
- Обычно помогает: `npm install` или проверка `package.json`

### Нужна база данных PostgreSQL
Render предоставляет бесплатные Postgres:
1. В Render нажмите **"New +"** → **"PostgreSQL"**
2. Скопируйте `External Database URL`
3. Добавьте в env Web Service как `DATABASE_URL`
4. Перезапустите сервис

---

## 📝 Итого - Последовательность действий

1. ✅ Создать репо на GitHub (сейчас!)
2. ✅ `git push -u origin main` (загрузить код)
3. ✅ Зарегистрироваться на Render через GitHub
4. ✅ Создать Web Service в Render
5. ✅ Добавить env переменные
6. ✅ Запустить сервис
7. ✅ Подключить домен через CNAME в DNS

**Готово! Ваш сайт будет доступен по адресу www.pro100fem.com** 🎉

---

## 💡 Советы

- **Разработка**: используйте `npm run dev` локально
- **Продакшн логи**: смотрите в Render Live Logs
- **Обновления**: просто делайте `git push` - Render все сделает автоматически
- **Бесплатный план**: 750 часов/месяц (достаточно для одного приложения)

