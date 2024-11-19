import React from 'react';
import './HomePage.css';
import macbookImage from '../assets/macbook.png';
import buyingbusiness from '../assets/buying-business-2.png';
import sellers from '../assets/sellers.png';
import amazon from '../assets/amazon-associates.svg';
import startup from '../assets/A-Startups-Guide-to-Ecommerce-Inventory-Management-506x296.jpg';
import future from '../assets/The-Future-of-E-commerce-Trends-and-Predictions-for-Shopify-Businesses-506x296.jpg';
import why from '../assets/Why-choose-us.jpg';
import right from '../assets/AI_Generated_Image_2024-11-19_469708523007201.png';
import left from '../assets/AI_Generated_Image_2024-11-19_469709646017201.png';
const HomePage = () => {

  const listings = [
    { 
      monetization: "eCommerce", 
      niche: "Beleza", 
      id: "#80328", 
      profit: "R$65.406,00", 
      price: "R$1.438.910,00", 
      link: "/listing/80328" 
    },
    { 
      monetization: "Amazon FBA", 
      niche: "Arte, Crianças, Hobbies, Ocasiões & Presentes", 
      id: "#80821", 
      profit: "R$25.213,00", 
      price: "R$1.134.540,00", 
      link: "/listing/80821" 
    },
    {
      monetization: "Múltiplos",
      niche: "Boletins Informativos, Publicidade Display, Questionários, Entretenimento, Informação",
      id: "#80590",
      profit: "R$34.592,00",
      price: "R$1.037.760,00",
      link: "/listing/80590"
    },
    {
      monetization: "Amazon FBA",
      niche: "Suplementos",
      id: "#79631",
      profit: "R$9.612,00",
      price: "R$346.036,00",
      link: "/listing/79631"
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Obrigado por se inscrever!');
  };

  return (
    <>
      {/* Home Top Section */}
      <section className="homepage-section">
        <div className="content-container">
          <div className="left-column">
            <h1 className="title">
              Quer investir ou abrir um negócio? Compre um que já esteja online, pronto e faturando!
            </h1>
            <p className="description">
              Junte-se ao principal marketplace para comprar e vender negócios digitais: sites, blogs, aplicativos, serviços de assinatura, lojas Shopify, Amazon, Mercado Livre e muito mais.
            </p>
            <div className="button-group">
              <button className="btn get-started">Comece Gratuitamente</button>
              <button className="btn learn-more">Saiba Mais</button>
            </div>
            <p className="as-seen-on">Como visto em:</p>
            <div className="as-seen-logo">
              <span>Exame</span>
              <span>InfoMoney</span>
              <span>Valor Econômico</span>
              <span>PEGN</span>
              <span>StartSe</span>
            </div>
          </div>
          <div className="right-column">
            <img src={macbookImage} alt="Showcase" className="showcase-image" />
          </div>
        </div>
      </section>

      {/* Latest Listings Section */}
      <div className="listings-section">
        <h2 >Nossas Últimas Listagens</h2>
        <p>Todas os dias publicamos novos negócios à venda em nosso marketplace.</p>
        <div className="listings-container">
          {listings.map((listing, index) => (
            <div className="listing-row" key={index}>
              <span><h3>{listing.monetization}</h3></span>
              <span className="niche"><span>{listing.niche}</span></span>
              <span><h4>{listing.id}</h4></span>
              <span>{listing.profit}</span>
              <span className="price">{listing.price}</span>
            </div>
          ))}
        </div>
        <div className="view-all">
          <a href="/all-listings" className="button">Ver Todas as Listagens</a>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="subscription-section">
        <h2>Publicamos Novos Negócios Todos os Dias</h2>
        <p>Insira seu e-mail abaixo para ser o primeiro a ser notificado “In the Know”.</p>
        <form className="subscription-form" onSubmit={handleSubscribe}>
          <input 
            type="email" 
            placeholder="Digite seu e-mail" 
            className="subscription-input" 
            required
          />
          <button type="submit" className="subscription-button">Receber Notificações</button>
        </form>
      </div>






      <section class="como-funciona">
  <div class="content-wrapper">
    
    <div class="text-content">
      <h2>Como Funciona</h2>
      <h3>Comprando um Negócio</h3>
      <p>
        Acesse nosso marketplace e descubra negócios online já validados e em operação. 
        Temos opções que vão desde investimentos passivos até negócios mais complexos, 
        atendendo a todos os perfis de investidores.
      </p>
      <p>
        Encontrou um negócio ou site interessante? Desbloqueie a listagem agora com nossa 
        assinatura e tenha acesso a todos os dados essenciais para avaliar sua compra 
        com segurança: URL, Google Analytics, Demonstração de Lucros e Perdas, e muito mais.
      </p>
      <a href="#" class="cta-button">Página de Cadastro</a>
    </div>

   
    <div class="image-content">
      <img src={right} alt="Marketplace" />
    </div>
  </div>
</section>




<section class="como-funciona">
  <div class="content-wrapper">
    
    <div class="image-content">
      <img src={left} alt="Marketplace" />
    </div>

   
    <div class="text-content">
      <h2>Como Funciona</h2>
      <h3>Comprando um Negócio</h3>
      <p>
        Acesse nosso marketplace e descubra negócios online já validados e em operação. 
        Temos opções que vão desde investimentos passivos até negócios mais complexos, 
        atendendo a todos os perfis de investidores.
      </p>
      <p>
        Encontrou um negócio ou site interessante? Desbloqueie a listagem agora com nossa 
        assinatura e tenha acesso a todos os dados essenciais para avaliar sua compra 
        com segurança: URL, Google Analytics, Demonstração de Lucros e Perdas, e muito mais.
      </p>
      <a href="#" class="cta-button">Página de Cadastro</a>
    </div>
  </div>
</section>








      
      <section className="popular-monetizations">
  <div className="monetizations-header">
    <h2>Monetizaciones Populares</h2>
    <p>
      Explora una selección exclusiva de negocios online establecidos en venta 
      al seleccionar una categoría que te interese a continuación.
    </p>
  </div>
  <div className="monetizations-grid">
    <div className="monetization-card">
      <img src={amazon} alt="Amazon Associates" />
      <h3>Amazon Associates</h3>
      <p>15 Listados</p>
    </div>
    <div className="monetization-card">
      <img src={amazon} alt="Amazon FBA" />
      <h3>Amazon FBA</h3>
      <p>70 Listados</p>
    </div>
    <div className="monetization-card">
      <img src={amazon} alt="Amazon FBM" />
      <h3>Amazon FBM</h3>
      <p>3 Listados</p>
    </div>
    <div className="monetization-card">
      <img src={amazon} alt="Amazon KDP" />
      <h3>Amazon KDP</h3>
      <p>9 Listados</p>
    </div>
    <div className="monetization-card">
      <img src={amazon} alt="Amazon Merch" />
      <h3>Amazon Merch</h3>
      <p>2 Listados</p>
    </div>
    <div className="monetization-card">
      <img src={amazon} alt="Display Advertising" />
      <h3>Publicidad Display</h3>
      <p>36 Listados</p>
    </div>
    <div className="monetization-card">
      <img src={amazon} alt="DropShipping" />
      <h3>DropShipping</h3>
      <p>10 Listados</p>
    </div>
    <div className="monetization-card">
      <img src={amazon} alt="eCommerce" />
      <h3>eCommerce</h3>
      <p>28 Listados</p>
    </div>
  </div>
</section>

<section class="why-choose-us">
  <div class="content-container">
    <div class="image-section">
      <img src={why} alt="Por Qué Elegirnos Imagen" />
    </div>
    <div class="text-section">
      <h2>¿Por Qué Elegirnos?</h2>
      <p class="highlight">$510M+ de Negocios Online Vendidos</p>
      <p class="description">
        Empire Flippers es una empresa de Inc. 5000 y el mercado curado #1 
        para comprar y vender un negocio online.
      </p>
    </div>
  </div>
  <div class="features-row">
    <div class="feature">
      <h3>Negocios Legítimos</h3>
      <p>
        Rechazamos la mayoría de los negocios antes de que se publiquen, asegurando 
        que tendrás las mejores opciones para tu próxima adquisición.
      </p>
    </div>
    <div class="feature">
      <h3>Datos Reales</h3>
      <p>
        Para encontrar un negocio en internet a la venta, regístrate para una cuenta gratuita 
        y comienza tu proceso de debida diligencia.
      </p>
    </div>
    <div class="feature">
      <h3>Migraciones Hechas Para Ti</h3>
      <p>
        Nuestro equipo te ayudará en cada paso del camino para transferir el activo una vez vendido.
      </p>
    </div>
  </div>
</section>

<section class="business-sell-section">
  <div class="overlay">
    <div class="container">
      <h2>¿Tienes un Negocio Online para Vender?</h2>
      <p>Consulta las herramientas online a continuación para vender o valorar tu negocio</p>
      <div class="button-group">
        <button class="btn-primary">Vender Mi Negocio Online</button>
        <button class="btn-secondary">Probar Herramienta de Valoración</button>
      </div>
    </div>
  </div>
</section>

<section class="latest-blog-posts">
  <div class="listings-header">
    <h2>Últimas Publicaciones del Blog</h2>
    <p>Mira lo que hay de nuevo en el blog</p>
  </div>

  <div class="blog-container">
   
    <div class="blog-post">
      <div class="blog-image">
        <img src={startup} alt="Blog Post 1" />
      </div>
      <br></br>
      <div class="listings-header">
        <h3>Cómo Optimizar Tu Empaque para Ahorrar Dinero y Mejorar la Experiencia del Cliente</h3>
        <p>
          El empaque es un componente integral de cualquier negocio de comercio electrónico. 
          Cuando alguien pide tu producto online, es el paquete el que asegura que se mueva 
          de manera segura desde tu almacén hasta el cliente. Ese envoltorio externo también 
          les proporciona […]
        </p>
        <br></br>
        <div class="blog-meta">
          <span class="author">Tom Wicky</span>
          <span class="category">Amazon FBA, Ecommerce</span>
        </div>
        <a href="#" class="read-more">LEER MÁS</a>
      </div>
    </div>

    
    <div class="blog-post">
      <div class="blog-image">
        <img src={future} alt="Blog Post 2" />
      </div>
      <br></br>
      <div class="listings-header">
        <h3>Técnicas para Aumentar las Tasas de Conversión en Shopify</h3>
        <p>
          El rango promedio de tasas de conversión para sitios web de comercio electrónico es de 1% a 4%. 
          Esto significa que de cada 100 visitantes, típicamente 1 a 4 personas realizan una compra. 
          ¿Está tu tasa de conversión de Shopify dentro […]
        </p>
        <br></br>
        <div class="blog-meta">
          <span class="author">Ryan Robinson</span>
          <span class="category">Ecommerce</span>
        </div>
        <a href="#" class="read-more">LEER MÁS</a>
      </div>
    </div>
  </div>

  <div class="view-all">
    <a href="#" class="view-all-link">Ver Todas las Publicaciones del Blog</a>
  </div>
</section>

<section class="business-consultation-section">
  <div class="container">
    <div class="left-div">
      <p class="phone-number">+1-888 658 8388</p>
      <p class="description">Permítenos simplificar el proceso para ti, haz clic en el botón a continuación.</p>
      <button class="btn-primary">Agenda una Llamada Gratis</button>
    </div>
    <div class="right-div">
      <p class="heading">Nuestros asesores en M&A están listos para ayudarte a dar tu próximo gran paso.</p>
      <p class="subtext">Consulta con nuestros analistas de negocios líderes en la industria hoy mismo.</p>
    </div>
  </div>
</section>
    </>
  );
};

export default HomePage;
