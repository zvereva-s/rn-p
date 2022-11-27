<h3>HomeWork 1</h3>

<img src='https://github.com/zvereva-s/rn-p/raw/main/images/hw-01.jpg' width='640' heught='auto' />

<h3>Homework 2</h3>

Registration Screen
<br>
<img src='https://github.com/zvereva-s/rn-p/raw/main/images/RegistrationScreen.png' width='188' heigth='auto'/>
<img src='https://github.com/zvereva-s/rn-p/raw/main/images/RegistrationScreen(password).png' width='188' heigth='auto'/>
<img src='https://github.com/zvereva-s/rn-p/raw/main/images/RegistrationScreen(show password).png' width='188' heigth='auto'/>
<img src='https://github.com/zvereva-s/rn-p/raw/main/images/RegistrationScreen(keyboard).png' width='188' heigth='auto'/>

State Registration Screen
<img src='https://github.com/zvereva-s/rn-p/raw/main/images/RegistrationScreen-state.jpg' width='auto' heigth='auto'/>

Login Screen
<br>
<img src='https://github.com/zvereva-s/rn-p/raw/main/images/LoginScreen.png' width='188' heigth='auto'/>
<img src='https://github.com/zvereva-s/rn-p/raw/main/images/LoginScreen(keyboard).png' width='188' heigth='auto'/>

State Login Screen
<img src='https://github.com/zvereva-s/rn-p/raw/main/images/LoginScreen-state.jpg' width='auto' heigth='auto'/>

<h3>HomeWork 3. Debugger</h3>
<img src='https://github.com/zvereva-s/rn-p/raw/main/images/Debugger.jpg' width='640' heigth='auto'/>

<h3>HomeWork 4</h3>
<h4>Задания</h4>
1.  ✅ Создать экран PostsScreen <br>
2.  ✅ Создать экран CreatePostsScreen <br>
3.  ✅  Создать экран CommentsScreen <br>
4.  ✅ Создать экран ProfileScreen <br>
5.  ✅ Создать экран MapScreen <br>
6.  ✅ Создать экран Home <br>
<img src='https://github.com/zvereva-s/rn-p/raw/main/images/screens.jpg' width='1200' heigth='auto'/>
7. ✅ Подключить в проект навигацию.
8. ✅ Добавить в проект переходы между экранами LoginScreen, RegistrationScreen при помощи компонента createStackNavigator
   C RegistrationScreen можно перейти на LoginScreen кликнув по тексту Войти / C LoginScreen можно перейти на RegistrationScreen по тексту Зарегистрироваться

9. ✅ После сабмита в LoginScreen, RegistrationScreen перебрасывает на Home где сразу показывается экран PostsScreen
   <img src='https://github.com/zvereva-s/rn-p/raw/main/images/navToPosts.jpg' width='1200' heigth='auto'/>

10. ✅ Подключить нижнюю навигацию используя createBottomTabNavigator
11. ✅ В нижней навигации создать 3 перехода.
    <img src='https://github.com/zvereva-s/rn-p/raw/main/images/Tabs.jpg' width='188' heigth='auto'/>

12. ✅ Клик по иконке №1 ведет на экран PostsScreen
13. ✅ Клик по иконке №2 ведет на экран CreatePostsScreen
14. ✅ Клик по иконке №3 ведет на экран ProfileScreen
15. ❌ В хедере на экране PostsScreen добавить иконку для logout
16. ✅ Стилизировать нижнюю навигацию

<h3>HomeWork 5</h3>
<h4>Задания</h4>

1. ✅ Подключить камеру в компонент CreatePostsScreen;
2. ❌ При открытии экрана CreatePostsScreen активируется камера и изображение из нее выводится в блок с иконкой камеры
3. ✅ При клике на иконку камеры делается снимок
4. ✅ В инпут с плейсхолдером Название можно добавить название фото
5. ✅ В инпут с плейсхолдером Местность можно добавить название где был сделан снимок
6. ✅ Добавить определение геолокоции в момент создания поста при клике на кнопку Опубликовать
7. ✅ После создания поста должно перенаправлять на экран PostsScreen
8. ✅ В компоненте отдельного поста при клике на иконку коментариев перебрасывает на экран CommentsScreen
9. ✅ В компоненте отдельного поста при клике на иконку геолокации перебрасывает на экран MapScreen где можно увидеть карту с маркером где была сделана фотография

<h3>HomeWork 6</h3>

1. ✅ Подключить Redux в проект
2. ✅ Подключить Firebase в проект
3. ✅ Добавить логику регистрации на экране RegistrationScreen через методы Firebase
4. ✅ Добавить логику логина на экране LoginScreen через методы Firebase
5. ✅ Обновить профиль пользователя на Firebase и добавить туда логин в поле displayName после регистрации
6. ✅ Сохранять данные о пользователе в Redux после регистрации или логинизации
7. Добавить проверку залогинен ли пользователь в приложении или нет. Если залогинен то сразу перенаправлять на экран PostsScreen иначе - на экран LoginScreen
8. Добавить логику Logout на экране PostsScreen при клике на иконку в хедере используя методы Firebase
9. Добавить логику загрузки постов в базу данных используя Firebase и Redux
10. Добавить логику добавления коментария под постом используя Firebase и Redux
