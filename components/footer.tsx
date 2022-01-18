import React from "react";

import { FaVk, FaGithub } from 'react-icons/fa';

const YandexMetrika = `
<!-- Yandex.Metrika informer -->
<a href="https://metrika.yandex.ru/stat/?id=87133696&amp;from=informer"
target="_blank" rel="nofollow"><img src="https://informer.yandex.ru/informer/87133696/3_0_EFEFEFFF_EFEFEFFF_0_pageviews"
style="width:88px; height:31px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" class="ym-advanced-informer" data-cid="87133696" data-lang="ru" /></a>
<!-- /Yandex.Metrika informer -->

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(87133696, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/87133696" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
`;

function Footer({ children }) {
  return (
    <footer className="flex flex-row">
      <div className="basis-1/3" >
        <div dangerouslySetInnerHTML={{__html: YandexMetrika}}></div>
      </div>
      <div className="basis-1/3">
        AD
      </div>
      <div className="basis-1/3 p-6">
        <ol>
          <li className="">
            <a href="https://vk.com/MrGorre" className="text-primary hover:text-primary-active" target={'_blank'} rel="noreferrer">
              <FaVk className="inline-block text-3xl m-2 align-middle" />
              vk.com/MrGorre</a>
          </li>
          <li>
            <a href="https://github.com/Mr-Gorre" className=" text-primary hover:text-primary-active" target={'_blank'} rel="noreferrer">
              <FaGithub className=" inline-block text-3xl m-2 align-middle" />
              <span>
              github.com/Mr-Gorre
              </span>
            </a>
          </li>
        </ol>
      </div>
    </footer>
  );
}

export default Footer;
