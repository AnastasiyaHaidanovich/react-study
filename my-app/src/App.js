export const App = () => {
    const SliderItem = props => {
        return (
            /* jshint ignore:start */
            <div className="features-slider_item">
                <div className="features-img" style={{backgroundImage: `url(${props.Url})`}}></div>
                <div className="features-feature">Первое целевое преимущество</div>
            </div>
            /* jshint ignore:end */
        );    
    };
    
    const AddTel = props => {
        return (
            /* jshint ignore:start */
            <div className={props.name}>
                <a href={`tel:${props.telNumber}`}>+{props.telNumber}</a>
            </div>
            /* jshint ignore:end */
        );    
    };
    
    const AddLogo = props => {
        return (
            /* jshint ignore:start */
            <a href="#">
                <img src={require('./images/logo.svg').default} className={props.name} alt="logo"/>
            </a>
            /* jshint ignore:end */
        );    
    };
    
    const AddBtn = props => {
        return (
            /* jshint ignore:start */
            <button className={props.name}><span>{props.btnText}</span></button>
            /* jshint ignore:end */
        );    
    };
    
    const render = (
        /* jshint ignore:start */
        <div>
            <header>
                <div className="wrapper">
                    <div className="header">
                        <AddLogo name="header-logo"/>
                        <AddTel name="header-phonelink" telNumber="7(962)556-1234"/>
                    </div>
                </div>
            </header>
            <main>
                <div className="wrapper">
                    <div className="main">
                        <h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
                        <div className="main-small">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более.
                        </div>
                        <AddBtn name="btn main-btn" btnText="Подробнее"/>
                    </div>
                </div>
            </main>
            <section className="features">
                <div className="wrapper">
                    <div className="features-wrapper">
                        <h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
                        <div className="features-subhead">О нас</div>
                        <div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить.
                        </div>
                        <div className="features-slider">
                            <div className="features-slider_items">
                                <SliderItem Url={require('./images/1.svg').default}/>
                                <SliderItem Url={require('./images/2.svg').default}/>
                                <SliderItem Url={require('./images/3.svg').default}/>
                                <SliderItem Url={require('./images/4.svg').default}/>                            
                            </div>
                            <button className="features-slider-arrow features-slider-prev">
                                <svg width="9" height="16"
                                        xmlns="http://www.w3.org/2000/svg">
                                    <path
                                            d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                                    </path>
                                </svg>
                            </button>
                            <button className="features-slider-arrow features-slider-next">
                                <svg width="9"
                                        height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                            d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact">
                <div className="wrapper">
                    <div className="contact-wrapper">
                        <h2 className="contact-title">Остались вопросы?</h2>
                        <div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
                        <form className="contact-form">
                            <input type="text" placeholder="Ваше имя"/>
                            <input type="tel" placeholder="Телефон"/> 
                            <input type="email" placeholder="E-mail"/>
                            <AddBtn name="btn contact-btn" btnText="Позвоните мне"/>
                        </form>
                        <div className="contact-personal">Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="footer">
                    <AddLogo name="footer-logo"/>
                    <div className="footer-company">
                        <span>© 2020 XXXcompany. Все права защищены.</span>
                    </div>
                    <div className="footer-websurfer">
                        <span className="footer-websurfer_build">Сделано</span>
                        <a href="#">Ваше имя</a>
                    </div>
                    <AddTel name="footer-phonelink" telNumber="7(962)556-1234"/>
                </div>
            </footer>        
        </div>
        /* jshint ignore:end */
    );
    return render;
};
