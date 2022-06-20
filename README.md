# Food-for-cats
## 1. Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения 
- пользователя - в хорошей верстке присутствует, в первую очередь, адаптивность под разные устройства, отсутствует горизонтальный скролл(используется как "резиновая" верстка, так и медиа-запросы). При верстке используются теги, позволяющие сделать код семантическим, т.е. доступным для пользователей с ограниченными возможностями. Очень важно наличие кроссбраузности, чтобы сайт отображался одинаково в разных браузерах. Продумана оптимизация сайта, которая позволяет сайту быстро взаимодействовать с пользователем. Также можно выделить важность обозначения высоты для изображений, даже если они хорошо расположились на сайте без этого, так как в таком случае текст не будет "съезжать" при загрузке изображений. 
- менеджера проекта и дизайнера - полное совпадение готового проекта с макетом и желанием заказчика, гибкая верстка. 
- верстальщика - структурированный и чистый код, правильное использование тегов(правильная вложенность тегов). Понятные названия классов, наличие комментариев там, где это необходимо. В HTML файле - разметка, в CSS - стили, в JS - функциональность. Отсутствие стилей и логики в HTML файле для более простого взаимодействия с кодом другим разработчикам.  
В случае большого проекта - правильная структура папок и логическая связь между файлами в них.
- клиентского программиста - понятные названия классов, наличие комментариев там, где это необходимо, чистый код; 
- серверного программиста - быстрая обработка браузером, легкозагружаемость, правильно сверстанные элементы, которые непосредственно будут взаимодействовать с сервером. 

## 2. Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки.  Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике. 
В первую очередь - удобная структура проекта, правильное распределение файлов по папкам для удобной навигации и поиска не только самому, но и другим разработчикам. 
Во вторых - методика БЭМ, для  более удобного взаимодействия и внесения правок. Данная методика помогает понять, к какой части проекта относится тот или иной элемент, что облегает внесение изменений.
Для взаимодействия разработчикам между собой также могут быть полезны комментарии.
В моей практике не было на данный момент работы с действительно масштабными проектами, но при работе с большими объемами, мне больше всего помогает именно правильно структурированный проект, в котором лежит все "по полочкам", что позволяет быстро перемещаться между необходимыми файлами.

## 3. Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.  
- Так называемая, "резиновая верстка". Можно использовать как Flexbox, так и Grid, чтобы расположение элементов адаптировалось под различную ширину.
- media запросы, с помощью которых можно было бы изменять расположения элементов, их размер и тд также в зависимости от ширины устройств. 
- кроссбраузность. Использование префиксов для идентичного расположения содержимого вне зависимости от браузера.
В работе использовала все вышеперечисленное, чтобы сайт адаптировался под любую ширину, начиная от 320 пикселей. Проверяла, правильно ли все отображается с помощью панели инструментов разработчика в Chrome.

## 4. Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.  
Я использую VSCode в процессе написания кода, который мне и визуально удобен, и показывает в случае чего ошибки.
Также, использую панель инструментов разработчика в Chrome, что мне помогает при создании адаптивности для сайта, также при исправлении ошибок и верстке.

## 5. Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?   
С конкретно такой ситуацией я не сталкивалась. Можно проверить, отображается ли корректно страница в других браузерах. Если да, то скорее всего не прописаны префиксы, отвечающие за кроссбраузность. 
Также, можно открыть консоль и посмотреть на наличие ошибок, которые также могут нам дать понять о возможных проблемах.
Можно попробовать проверить страницу через Google Lighthouse, который также покажет существующие проблемы.
## 6. Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия? 
Уточню, как именно должны выглядеть элементы при тех или иных действиях, чтобы сразу сделать так, как нужно.

## 7. Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSSверстка или что-то ещё? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны? 
Первоначально использовала платформу freeCodeCamp для изучения курса JavaScript Algorithms and Data Structures, в настоящее время, в основном использую codecademy для прохождения различных курсов, в том числе освоения React, Redux и TypeScript. На этой же платформе освоила HTML и CSS, включая использование FlexBox, Grid, адаптивную и кроссбраузную верстки, а также работу с Git. Для практики решения различных задач как на JavaScript, так и на TypeScript, выбрала codewars, там решено уже около 600 задач.   
Мне интересны как верстка, так и JS-программирование.  Мне нравится совмещать в работе как логику, которая присутствует в работе с JS, так и, в какой-то степени, творчество, которое можно проявить, работая с версткой.
Дополнительно стараюсь улучшать английский язык, который мне интересен и, я уверена, также поможет в карьере.

## 8. Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.
Еще со старшей школы мне очень нравилась математика, в том числе и высшая математика. Принимала участие в различных олимпиадах, в республиканских, также по математике. Тогда еще не понимала, где можно было бы применить математическое мышление, но со временем нашла ту область, которая мне интересна и получается. 
Сейчас постоянно стараюсь развиваться, осваивать новые технологии, использую в своем обучении актуальные курсы. Создаю собственные pet-проекты для отработки теоретических знаний на практике. Были созданы как проекты по верстке, так и проекты на React и Redux (с использованием хуков, роутинга, запросов на сервер с помощью API). Также владею иностранным языком на уровне, позволяющем свободно читать документацию и проходить курсы на английском языке, продолжаю развивать этот навык и доводить до совершенства.  Также сейчас в процессе создания находится сайт для российского представительства французской фирмы седел Meyer.
Ссылки на работы: https://github.com/ladleva
