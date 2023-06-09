- client (клиентская часть приложения):

1) папка public содержит билд (сборка) клиентской части

2) файл .env содержит название API, к которой происходят запросы с клиента

3) файл package.json содержит метаданные и конфигурацию клиентской части.
Он используется в Node.js-приложениях для управления зависимостями, скриптами, 
версиями пакетов и другой информацией о проекте.

4) файл package-lock.json  является автоматически сгенерированным файлом, 
создаваемым npm при установке пакетов. Содержит точную информацию о версиях 
пакетов и их зависимостях, которые были установлены для проекта.

5) файл .gitignore  используется в системе контроля версий Git для указания файлов и 
директорий, которые должны быть проигнорированы при выполнении операций Git, 
таких как коммиты и слияния.

6) папка src содержит основную кодовую базу клиентской части

6.1) папка Components содержит функциональные компоненты 
(переиспользуемые функции для создания элементов интерфейса и
пользовательской логики)

6.1.1) папка cardActions содержит компоненты, отвечающие за активное взаимодействие
с карточками

6.1.2) папка forms содержит все компоненты, относящиеся к работе с карточкой на странице
редактирования карточки (формы, обёртки форм, действия)

6.1.2.1) папка formsRows содержит компоненты паттернов строк в формах

6.1.2.2) папка formSendButton содержит компонент кнопки отправки всех форм (в виде единого отчёта)

6.1.2.3) папка formWrapper содержит компонент-обёртку для форм

6.1.2.4) папка inputComment содержит чекбокс с полем комментария к полю для заполнения

6.1.2.5) папка reportSend содержит логику отправки всех форм (в виде единого отчёта) в зависимости
от статуса отчёта

6.1.2.6) оставшиеся 12 файлов содержат формы для заполнения, составляющие единый отчёт вместе 
с их логикой взаимодействия

6.1.3) папка modal содержит компоненты основных паттернов полей модального окна
для создания карточки на странице со списком карточек

6.1.4) файл AppRouter.js содержит маршрутизатор клиентской части с учётом авторизации пользователя
(ограничение доступа к страницам сайта с конентам для незарегистрированного пользователя)

6.1.5) файл GeneralList.js содержит компонент таблицы с карточками на главной странице

6.1.6) файл NavBar.js содержит компонент верхней панели (шапки) сайта

6.1.7) файл Pages.js содержит компонент пагинации таблицы с карточками

6.1.8) файл SideBarElement.js содержит компонент боковой панели навигации на странице 
редактирования карточки

6.2) папка Helpers содержит вспомогательные функции для работы боковой панели и логику 
отправки отдельной формы

6.3) папка Hooks содержит файл пользовательского хука useFetch.js для получения данных
на клиентской части с помощью запроса на сервер

6.4) папка http содержит файлы с сформированными запросами на сервер с клиентской части

6.4.1) папка formsAPI содержит запросы, касающиеся работы с формами карточки

6.4.1.1) папка checkFormCommentsExistence содержит файл checkFormCommentsExistence.js 
с запросам на проверку наличия комментариев к какой-либо форме при отправке конкретного отчёта

6.4.1.2) папка formsCommentAPI содержит файлы с запросами от полей с комментариями в каждой
отдельной форме

6.4.1.3) папка formsContentAPI содержит файлы с запросами от полей с контентом в каждой отдельной
форме

6.4.2) файл cardInfoAPI содержит запросы для работы с записями в таблице карточек на главной странице

6.4.3) файл index.js содержит основу всех запросов для авторизированных и неавторизированных 
пользователей 

6.4.4) файл userAPI.js содержит запросы на регистрацию, логин и проверку авторизованности пользователя

6.5) папка Pages содержит файлы компонентов-страниц

6.5.1) файл Auth.js содержит страницу авторизации и регистрации

6.5.2) файл Card.js содержит страницу редактирования отдельной карточки со всеми её формами

6.5.3) файл Home.js содержит главную страницу (страницу с таблицей карточек, фильтрацией, созданием
и действиями над отдельными записями-карточками в таблице)

6.6) папка store содержит файлы глобального стейт-менеджера mobx / mobx-lite cо стейтами
информации о пользователе и логики работы сортировки и фильтрации таблицы карточек

6.7) папка utils содержит файл с константами URL-путей к страницам на клиентской части

6.8) файл App.css содержит таблицу стилей для главного компонента App

6.9) файл App.js содержит логику работы корневого компонента приложения App

6.10) файл index.css содержит таблицу глобальных стилей для всего HTML-документа

6.11) файл index.js является главным файлом, который создаёт точку входа в приложение

6.12) файл routes.js распределяет страницы клиентской части на доступные авторизированным пользователям
и на доступные всем

- server (серверная часть приложения):

1) файл index.js содержит точку входа для запуска серверного приложения
(импорт необходимых модулей и зависимостей, 
настройка приложения и промежуточного программного обеспечения (middleware),
определение маршрутов и их обработчиков,
запуск сервера и прослушивание определенного порта)

2) файл db.js экспортирует  экземпляр объекта Sequelize, 
который является ORM (Object-Relational Mapping) для работы с базой данных в Node.js

3) файл package.json содержит метаданные и конфигурацию сервера. 

4) файл package-lock.json  является автоматически сгенерированным файлом, 
создаваемым npm при установке пакетов

5) файл .gitignore  используется в системе контроля версий Git для указания файлов и 
директорий, которые должны быть проигнорированы при выполнении операций Git, 
таких как коммиты и слияния.

6) файл .env содержит данные для подключения к базе данных PostgreSQL, порт,
на котором запускается сервер и ключ шифрования для паролей

7) папка controllers содержит контроллеры (модули или классы, 
которые содержат логику обработки запросов от клиента). В папках внутри
controllers содержатся контроллеры отдельных форм.

7.1) файл allTableslController.js содержит контроллеры для работы
со всеми формами сразу (каскадное создание, поиск по отдельному полю
каждой таблицы, получение конкретной записи со всех таблиц)

7.2) файл userController.js содержит контроллеры для запросов
регистрации, авторизации / аутентификации и проверки авторизации

7.3) файл pdfmakeController.js содержит контроллер для генерации
пдф-документа

8) папка error содержит промежуточное ПО (middleware) для обработки
ошибок сервера

9) папка middleware содержит промежуточное ПО (middleware) для проверки
авторизации пользователя и его роли

10) папка static (пустая) - место для хранения изображений на сервере

11) папка models содержит файлы моделей данных , которые описывают 
структуру и взаимодействие каждой отдельной таблицы в базе данных

12) папка routes содержит роуты (механизм определения и обработки 
маршрутов (URL-путей) веб-приложения. . Они определяют, как сервер 
должен обрабатывать запросы, поступающие от клиента, и какие действия 
выполнять для каждого маршрута.). В папках внутри routes содержатся роуты 
отдельных форм.

12.1) файл allTableslRouter.js содержит роуты для работы
со всеми формами сразу (каскадное создание, поиск по отдельному полю
каждой таблицы, получение конкретной записи со всех таблиц)

12.2) файл userRouter.js содержит роуты для запросов
регистрации, авторизации / аутентификации и проверки авторизации

12.3) файл pdfmakeRouter.js содержит роут для генерации
пдф-документа

12.4) файл index.js является маршрутизатором 
(объединяет все роуты в папке routes в отдельный файл для простоты 
его подключения к главному файлу на сервере - index.js)



















