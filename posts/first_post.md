# Кодер рожает блогера

В лучших традициях, таких историй, брать какое-то готовое решение для своего блога нельзя
Да и пользоваться знакомыми технологиями тоже не вариант

## Все с ноля

По этому начинаем все с ноля и учимся на ходу

    mkdir BlogGorre
    npm init
    git init
    git add package.json
    git commit -m "Init"

Проходим в сотый раз -  [гайд по добавлению ssh ключей в github](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

Попутно создаем репозиторий на github.com выбираем лицензии и `.gitignore`... Хотя лучше было сразу создать репо и сделать `git clone`

Но нас не взять, мы сразу красиво делать не умеем, поэтому делаем такую фигню (благополучно найдено с помощью гугла):

    git remote add origin git@github.com:fily7/BlogGorre.git
    git branch --set-upstream-to=origin/main master
    git push origin HEAD:main

из-за разницы в именнах веток (они сами так назвались я не виноватый) `git push` дает такое:

    fatal: The upstream branch of your current branch does not match
    the name of your current branch.  To push to the upstream branch
    on the remote, use

        git push origin HEAD:main

    To push to the branch of the same name on the remote, use

        git push origin HEAD

    To choose either option permanently, see push.default in 'git help config'.

Нууууу и ладно `git push origin HEAD:main` наш вариант, потом ветку `master` поменяю на `main` и должно быть норм

Попытки вкатится в REACT через `create-react-app` почему то приводят постоянно к каким то тоннам сообщениям от npm'a. А поскольку я глупенький, то сообщения о 16 критических уязвимостях меня пугают. После ~~гугления~~ анализа ситуации, было решено что вариант снизу вообще норм и предупреждений ноль

    npm i react react-dom next

Так теперь ставим **eslint** для **next**'a, ибо надо да и ";" будет за меня раставлять. И будем в Typescript все фигачить потому что JS без типов это прям совсем боль

    npm i -D eslint eslint-config-next typescript @types/react @types/node

Еще что бы жизнь медом не казалась будем погружаться в **Tailwind**, а то все эти **Bootstrap**'ы итд для слабаков будем через **Хвостветер** позновать глубины **CSS**'а. Из доков узнаем что нам надо делать так:

    npm i -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

В `tailwind.config.js` пишем такое, ибо в доках так написано, а кто я такой что бы спорить, непонятно что за фигня, но пусть будет

    module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }

В `styles/global.css` пишем такое, ибо тоже доки

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

В `pages/index/tsx` рожаем следующее

import Link from "next/link"
import React from "react"

    function Index() {
      return (
        <div>
          <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
          <Link href={'/about'}>
            <a>About</a>
          </Link>
        </div>
      )
    }
    export default Index

Понимаем что что-то не так, обращаемся к чертогам разума ~~(Google)~~ и узнаем что надо замутить фай `pages/_app.tsx` для настройки приложени и собственно добавления глобальных стилей. Везде гуглится для `_app.js` и там чутка код другой, но мы за типы и по этому через небольшие мучения находим такое содержание которое нас полностью устраивает:

    import '../styles/global.css'
    import { AppProps } from 'next/app';

    function MyApp({ Component, pageProps }: AppProps) {
      return <Component {...pageProps} />
    }

    export default MyApp

Там дальше эксперименты с **Ветровым хвостом** и `pages/index.tsx` и `pages/about.tsx`. Рождаем `components\layout.tsx` с таким сложнейшим содержанием которое 300 раз поменяется еще:

    import React from "react";

    function Layout({ children }) {
      return (
        <>
          <div> Heelo</div>
          <div>
            {children}
          </div>
        </>
      )
    }

    export default Layout;

И пробуем **Layout** на `pages/about.tsx`

    import Link from "next/link";
    import React from "react";
    import Layout from "../components/layout";



    function About() {
      return (
        <Layout>
          <div className="p-6 bg-black max-w-sm mx-auto text-white rounded-xl flex space-x-4">
            <div className="shrink-0">
              <img src="/images/profile.jpg" alt="" className="h-12 w-12 rounded-full" />
            </div>
            <div>
              <div className="text-xl font-medium">
                Hello, world!
              </div>
              <p className="text-gray-500">Igor Potashev </p>
            </div>
          </div>
          <Link href={'/'}>
            <a>Back home</a>
          </Link>
        </Layout>
      )
    }

    export default About;

На данный момент результат мучений выглядит убого, но многообещающе:

    картинка

Где-то примерно на этих порах создается `posts/first_post.md` где записано все что выше и что ниже, поэтому скорее всего я что-то забыл в первой части что-то написать что я делал.

## Передохнули и пошли дальше

Сам пост пока нравится писать больше чем код.