import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R73J8RZW28"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R73J8RZW28');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="fb-customer-chat" className="fb-customerchat"></div>
        <Script strategy="lazyOnload" id="facebook-chat">
          {`
        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "108284838463506");
        chatbox.setAttribute("attribution", "biz_inbox");
  
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v12.0'
          });
        };
  
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        `}
        </Script>
      </body>
    </Html>
  );
};

export default Document;
