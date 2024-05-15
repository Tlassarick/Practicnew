import React from "react";
import NewHeader from "../Header/NewHeader.js";
import "./NewPage.css";

function NewPage() {
  return (
    <div>
      <NewHeader />
      <img
        width="455px"
        height="212px"
        src="https://s3-alpha-sig.figma.com/img/273d/043a/6a88eb542e5ef1185d5f119e7b327d7b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jfQYgUbcscwhqyNT~Gdei70vtugYjemzrCsLR3ftVu3iUxuXh0wZYNUUB0VfvcVLxnJfZaeAZAHwJptcuQhsDu7wYBGsl9q-ff8T71~~iAucIAHJUrXSXkaWso1IMcmEzv4TlOcJfUr95901MMnV05YWTbAqXH6l5PmCXPwV13X6rrKJYB5b-G5Mu-TLxxvad5KySIKpMqmQncA-U9iic~70pPJsBPiEEmdkzEhaRv4cMsQ~xVsj2VaJVrdohB~8TBbpTeKQDA1heVSwmEdbUcBEJDxjsdNLxQPrmy6dypC7fbPyURzpJ1XxOoQASi5Qw2sHujggxDzQrqgR4vIvrg__"
      />
      <div className="main-text">
        <h1>ГОЛОВНЕ УПРАВЛІННЯ ДПС </h1>
        <h1>У КИЇВСЬКІЙ ОБЛАСТІ</h1>
      </div>

      <div className="about">
        <div className="text-box-about">
          <span className="span-about">
            Наш сайт створений для надання зручного доступу до інформації та
            послуг, що пропонуються Головним Управлінням Державної податкової
            служби (ГУДПС) у Київській області. Розроблена нами інформаційна
            система є локальною, доступ до неї мають виключно співробітники
            установи.
          </span>
        </div>
      </div>
      <div className="why">
        <div className="text-box-why">
          <span className="span-why">
            Система спрямована на забезпечення ефективної внутрішньої взаємодії
            та організації роботи податкової служби, підвищуючи прозорість та
            зручність внутрішніх процесів.
          </span>
        </div>
      </div>
      <div className="what">
        <div className="text-box-what">
          <span className="span-what">
            Наша мета – підвищити прозорість та зручність внутрішніх процедур,
            сприяючи більш ефективному виконанню завдань та взаємодії між
            відділами податкової служби
          </span>
        </div>
      </div>
      <div className="text-bot-wtf">
        <span className="text-wtf">
          Наша інформаційна система розроблена для забезпечення зручного та
          ефективного пошуку контактної інформації співробітників. Нижче
          наведено основні можливості та інструкції з використання телефонного
          довідника
        </span>
      </div>
      <div className="telephone-box">
        <div className="text-box-telephone">
          <span className="span-box">Пошук за різними критеріями:</span>
          <li className="list-box">
            Ім'я: Ви можете шукати контакти за іменем.
          </li>
          <li className="list-box">
            Прізвище: Використовуйте прізвище для точного пошуку потрібної
            особи.
          </li>
          <li className="list-box">
            Посада: Шукайте співробітників за їх посадою.
          </li>
          <li className="list-box">
            Відділ: Знайдіть контакти всіх співробітників певного відділу.
          </li>
          <li className="list-box">
            Номер телефону: Шукайте за номером телефону для швидкого доступу до
            контакту
          </li>
        </div>
        <button
          className="telephone-button"
          onClick={() => (window.location.href = "/")}
        >
          <span className="telephone-name">Перейти</span>
        </button>
      </div>
    </div>
  );
}

export default NewPage;
