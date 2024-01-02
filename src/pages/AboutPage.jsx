import {
  AboutPageLink,
  AboutPageStyled,
  AboutPageText,
  AboutPageTitle,
} from 'components/PageStyled/AboutPage.styled';
import React from 'react';

const AboutPage = () => {
  return (
    <>
      <AboutPageStyled>
        <AboutPageTitle>Про нас</AboutPageTitle>
        <AboutPageText>
          Ми команда професіоналів в сфері монтажу та продажу сантехніки,
          опалення та водопостачання.
          <br />
          Ми вже більше 10 років працюємо на ринку України. Наші фахівці мають
          великий досвід роботи та високу кваліфікацію.
          <br />
          Клієнти нашого магазину можуть бути впевнені в якості наших послуг та
          товарів які ми пропонуємо. Це підтверджують сотні задоволених клієнтів
          які звертаються до нас знову та знову.
          <br />
          Наша мета - зробити ваше життя комфортнішим та затишнішим. Ми
          пропонуємо вам широкий асортимент товарів, які відповідають всім
          сучасним стандартам якості.
          <br />
          Наші фахівці допоможуть вам зробити правильний вибір та відповідно до
          вашого бюджету. Наша місія - зробити ваше життя комфортнішим за
          адекватну ціну. Досить витрачати свій час на пошук товарів, ми зробимо
          це за вас.
          <br />
          Ви можете замовити товари онлайн та ми доставимо їх вам додому. Також
          ви можете замовити
          <AboutPageLink to={'/servis'}> послуги</AboutPageLink> наших фахівців
          та ми виконаємо роботи якісно та в найкоротші терміни.
          <br />
          Ми працюємо для вас!
        </AboutPageText>
      </AboutPageStyled>
    </>
  );
};

export default AboutPage;
