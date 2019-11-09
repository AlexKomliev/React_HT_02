import React, { useState, useEffect } from 'react';

import Form from "../Form";
import Article from "../Article";

const DEFAULT_NEWSFEED = [
    {
        id: 1,
        title: "Парламент Британії проголосував за поправку про відтермінування Brexit",
        date: "СУБОТА, 19 ЖОВТНЯ 2019, 16:53",
        text: "Палата громад британського парламенту проголосувала за поправку, яка передбачає, що Brexit буде відстрочений навіть в тому випадку, якщо пізніше законодавці затвердять проєкт угоди про вихід з ЄС.\n" +
            "\n" +
            "Про це повідомляє \"Європейська правда\".\n" +
            "\n" +
            "Поправку підтримали 322 депутати, проти проголосували 306 законодавців."
    },
    {
        id: 2,
        title: "Microsoft оголосила про “кінець життя” Windows 7 Pro з 2020 року",
        date: "СУБОТА, 19 ЖОВТНЯ 2019, 17:00",
        text: "Американська компанія «Microsoft» більше не випускатиме оновлення програмного забезпечення для «Windows 7 Pro» з 14 січня 2020 року.\n" +
            "Про це повідомляє Techradar.\n" +
            "Користувачі незабаром отримуватимуть відповідні сповіщення з попередженням із кнопкою «Дізнатися більше». Компанія пропонуватиме їм встановити новий Windows 10.\n" +
            "Водночас у «Microsoft» попереджують, що користувачів, які залишаться на старій платформі, можуть атакувати хакери.\n" +
            "Зазначається, що користувачі Windows 7 HOME вже почали бачити сповіщення від розробника."
    },
    {
        id: 3,
        title: "Samsung прекращает поддержку Linux на Dex",
        date: "СУБОТА, 19 ЖОВТНЯ 2019, 18:00",
        text: "Полнофункциональная производительность настольного компьютера на подключенном мобильном устройстве уже несколько лет является своего рода святым Граалем. Конечно же, в правильных и технически подкованных сообществах. И хотя у крупных игроков на рынке смартфонов сегодня есть различные интерфейсы и рабочие процессы для настольных компьютеров, Samsung был одним из немногих, кто воплотил в жизнь свою мечту в своей полной бескомпромиссности с программой Linux on Dex."
    }
];
const DEFAULT_NEWS_TO_RENDER = 2;

const Newsfeed = () => {

    const fetchData = () => {
        if (!(JSON.parse(localStorage.getItem('komlevNewsfeed')))){
            localStorage.setItem('komlevNewsfeed', JSON.stringify(DEFAULT_NEWSFEED));
            return JSON.parse(localStorage.getItem('komlevNewsfeed'));
        } else {
            return JSON.parse(localStorage.getItem('komlevNewsfeed'));
        }
    };

    const [newsfeedItem, changeNewsfeed] = useState(fetchData);
    const [renderNumber, changeNumber] = useState(DEFAULT_NEWS_TO_RENDER);

    const createArticle = (article) => changeNewsfeed([article, ...newsfeedItem]);

    useEffect(() => {
        localStorage.setItem('komlevNewsfeed', JSON.stringify(newsfeedItem));
    });

    return (
        <>
            <Form
                addFromProps = {createArticle}
            />
            {newsfeedItem.slice(0, renderNumber).map(news => {
                return (
                        <Article
                            key={news.id}
                            title={news.title}
                            date={news.date}
                            text={news.text}
                        />
                );
            })}

            <button
                onClick={() => changeNumber(renderNumber + 2)}
            >
                Show More
            </button>
            </>
    );
};

export default Newsfeed;