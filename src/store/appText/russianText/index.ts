export const russianText = {
    errorBoundary: {
        standardErrorContent: {
            text: "Что-то пошло не так.\nПовторите попытку или зайдите позже.",
            button: "На главную"
        }
    },
    header: {
        faq: "Частые вопросы",
        lk: "Личный кабинет",
        login: "Войти",
        register: "Зарегистрироваться"
    },
    footer: {
        terms: "Пользовательское соглашение",
        privacy: "Политика конфиденциальности"
    },
    homePage: {
        banner: {
            title: {
                improve: "Тренируй",
                yourSpeaking: " свою\nустную",
                skills: " речь"
            },
            text: "Описывай различные предметы, которые увидишь на экране, и развивай свое мышление"
        },
        summary: {
            descriptionText: {
                paragraphOne: "Во время интервью или публичного выступления не знаешь, что сказать, не можешь подобрать"
                        + " нужное слово или вообще впадаешь в ступор?",
                paragraphTwo: {
                    recordYourOwnSpeech: "Запись собственной речи",
                    trainDialogs: " и тренировочные диалоги с родными или друзьями давно и успешно используют, чтобы",
                    lowStressLevel: " снизить уровень стресса",
                    selfConfidence: " перед важным выступлением и повысить уверенность в себе."
                }
            },
            cardText: "Ты видишь изображение — это может быть закат, или диван, или панда — и твоя задача описать увиденное"
                + " сначала с положительной стороны, потом с отрицательной и подвести итог."
        },
        study: {
            title: {
                together: "С ",
                you_will: " ты будешь"
            },
            cards: [
                { 
                    id: 1,
                    title: "Говорить",
                    text: "В процессе ты неизменно учишься улавливать речевые и грамматические ошибки, отмечаешь слова-паразиты"
                        + " и начинаешь использовать те слова, которые ты вряд ли используешь в повседневной речи."
                },
                { 
                    id: 2,
                    title: "Слушать",
                    text: "Услышав себя со стороны, ты в спокойной обстановке можешь"
                        + " проанализировать услышанное и оценить свой монолог по качеству используемых"
                        + " слов, наличию пауз, скорости и как угодно ещё."
                },
                { 
                    id: 3,
                    title: "Видеть",
                    text: "На видео ты оценишь не только свой внешний вид, но и обстановку. Например, гладильная доска"
                        + " за спиной может быть не лучшим фоном для интервью или видео-конференции. Обрати внимание на"
                        + " артикуляцию, жестикуляцию, зрительный контакт, позу и освещение — нюансов может быть множество."
                },{ 
                    id: 4,
                    title: "Комментировать",
                    text: "Через 24 часа после записи ты сможешь оставить письменный комментарий для себя — похвалу,"
                        + " оценку прогресса, заметки на будущее или напоминание на следующий раз. Ведь научно доказано,"
                        + " что написанное или озвученное усваивается лучше, чем проговоренное про себя."
                }
            ]
        },
        speech: {
            improve: "Развивай",
            your_speech_and_thinking: " свою речь и мышление",
            by_yourself: " самостоятельно",
            under_comfortable_conditions: " в комфортных условиях", 
            right_now: " прямо сейчас"
        },
        buttons: {
            start: "Начать"
        }
    },
    errorPages: {
        error_400: {
            title: "То, что вы ищете, не существует.\nПопробуйте другую страницу.",
            altMoon: "Луна",
            altAstronaut: "Космонавт",
            goToMain: "На главную"
        },
        error_500: {
            title: "У нас что-то случилось, мы это чиним.\nПопробуйте перезагрузить страницу.",
            altError: "Ошибка",
            reload: "Перезагрузить"
        }
    },
    faqPage: {
        title: "Мы приготовили для вас ответы на частые вопросы.",
        faqs: [
            { id: 1, question: "Для чего сервис?", answer: "Запись собственных выступлений и тренировочные диалоги с родными или друзьями - это давно используемые инструменты, которые могут помочь вам\n уменьшить стресс и напряженность перед важным выступлением и повысить уверенность в своих силах. Такие тренировки помогают вам практиковать свою\n речь и выработать нужные навыки для успешного публичного выступления. Также запись своих выступлений может помочь вам выявить слабые места и\n научиться их исправлять, чтобы добиться еще большей уверенности в себе, в будущих выступлениях." }, 
            { id: 2, question: "Как зарегистрироваться?", answer: "Зарегистрироваться можно, нажав на кнопку в правом верхнем углу." }, 
            { id: 3, question: "Редактирование профиля.", answer: "В личном кабинете вы можете изменить Имя, Фамилию и пароль." }, 
            { id: 4, question: "Как проверить камеру и микрофон?", answer: "Перед записью видео вам всегда открывается функционал записи тестового видео и аудио." }, 
            { id: 5, question: "Можно ли использовать сервис без камеры?", answer: "Да, сервисом возможно пользоваться без веб-камеры, тогда будет происходить запись только аудио. Мы рекомендуем использовать сервис для записи видео, чтобы вы могли  подготовиться к видеовстрече и не чувствовали на них дискомфорт." }, 
            { id: 6, question: "Описание изображения.", answer: "Сервис автоматически предлагает описать положительные и отрицательные стороны изображения, генерируя их случайным образом. Подведение итогов всегда в конце записи." },
            { id: 7, question: "Появление изображений и слов.", answer: "Категории, слова и изображения генерируются случайным образом из списка слов, которые вы ранее не описывали."},
            { id: 8, question: "Запись видео: Сколько попыток записей в день? Какое время длится запись видео?", answer: "В базовом функционале возможно записать до 3х видео в день максимальной продолжительностью 5 минут."},
            { id: 9, question: "Где я найду своё видео? Как смотреть записанные видео ? Можно ли скачать видео?", answer: "Доступ к записанному видео открывается через 24 часа после записи. Посмотреть видео можно в своем личном кабинете. Также на странице видеозаписи есть функционал, который позволяет вам скачать видео или отправить его на электронный адрес, указанный при регистрации."},
            { id: 10, question: "Почему можно смотреть видео только через 24 часа?", answer: "Анализ своих действий с задержкой во времени более эффективен. Это позволяет получить более объективный подход к оценке событий и учесть возможные изменения или развития, которые могли произойти между тем и теперь. Также временной промежуток может дать вам возможность успокоиться и проанализировать свои действия с расстояния, это может помочь избежать эмоциональных реакций или предубеждений."},
            { id: 11, question: "Как удалить аккаунт? Как удалить свои данные ?", answer: "Удалить свой аккаунт возможно в личном кабинете. При удалении аккаунта полностью удаляются все ваши данные, а также аудио- и видеофайлы без возможности восстановления."},
            { id: 12, question: "Сколько хранится видео?", answer: "В базовом тарифе видео хранятся 2 недели с момента записи, далее конвертируются в аудио."},
            { id: 13, question: "Сколько хранится аудио?", answer: "Аудиофайлы хранятся до удаления вашего аккаунта."},
            { id: 14, question: "А это безопасно? Кто может смотреть мои видео?", answer: "Все данные хранятся в обезличенном и зашифрованном формате."},
            { id: 15, question: "Это бесплатно?", answer: "Базовый функционал сервиса бесплатный. С платными опциями вы можете ознакомиться по ссылке."},
            { id: 16, question: "Возрастные ограничения есть?", answer: "Базовый функционал сервиса без возрастных ограничений, платные тарифы требуют подтверждения возраста от 18 лет."},
            { id: 17, question: "Устранение проблем (Техподдержка)", answer: "По всем вопросам, связанным с работой сервиса, вы можете связаться с нами по почте mail@talkaboutall.ru"},
            { id: 18, question: "Переключение языка.", answer: "Сервис поддерживает два языка: Русский и Английский. Кнопка переключения языка находится в верхнем правом углу."},
            { id: 19, question: "Можно ли редактировать комментарии?", answer: "Комментарии к видео можно редактировать в любой момент."},
            { id: 20, question: "Сортировка видео/аудио и выборочный просмотр.", answer: "Наше приложение предлагает удобный способ хранения и анализа ваших видео/аудиозаписей. Все записи сортируются по дате в порядке убывания, так что вы всегда можете быстро найти самые последние записи. Кроме того, мы предлагаем возможность фильтровать записи по положительным и отрицательным чертам, что позволяет легко анализировать сценарии с положительными или отрицательными исходами."},
            { id: 21, question: "Ссылка на наши правила.", answer: "С правилами использования сервиса вы можете ознакомиться по следующей ссылке в нижней части страницы."},
            { id: 22, question: "Если взломали аккаунт?", answer: "Обратитесь в нашу службу поддержки mail@talkaboutall.ru"},
            { id: 23, question: "Подать жалобу на нарушение конфиденциальности.", answer: "Обратитесь в нашу службу поддержки mail@talkaboutall.ru"}
        ]
    }
}

export type AppText = typeof russianText