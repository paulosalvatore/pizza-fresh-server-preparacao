'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">pizza-fresh-server-preparacao documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-7340ff7556bf5d1e8de3d04d94bf1c3b3c965ce13f3649e9746a2d394cd53c4e78b9b9fec28b8e4aa75f0b2a81133f26d8968221a2630c25a0b27c93d9b46699"' : 'data-target="#xs-controllers-links-module-AppModule-7340ff7556bf5d1e8de3d04d94bf1c3b3c965ce13f3649e9746a2d394cd53c4e78b9b9fec28b8e4aa75f0b2a81133f26d8968221a2630c25a0b27c93d9b46699"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-7340ff7556bf5d1e8de3d04d94bf1c3b3c965ce13f3649e9746a2d394cd53c4e78b9b9fec28b8e4aa75f0b2a81133f26d8968221a2630c25a0b27c93d9b46699"' :
                                            'id="xs-controllers-links-module-AppModule-7340ff7556bf5d1e8de3d04d94bf1c3b3c965ce13f3649e9746a2d394cd53c4e78b9b9fec28b8e4aa75f0b2a81133f26d8968221a2630c25a0b27c93d9b46699"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-7340ff7556bf5d1e8de3d04d94bf1c3b3c965ce13f3649e9746a2d394cd53c4e78b9b9fec28b8e4aa75f0b2a81133f26d8968221a2630c25a0b27c93d9b46699"' : 'data-target="#xs-injectables-links-module-AppModule-7340ff7556bf5d1e8de3d04d94bf1c3b3c965ce13f3649e9746a2d394cd53c4e78b9b9fec28b8e4aa75f0b2a81133f26d8968221a2630c25a0b27c93d9b46699"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-7340ff7556bf5d1e8de3d04d94bf1c3b3c965ce13f3649e9746a2d394cd53c4e78b9b9fec28b8e4aa75f0b2a81133f26d8968221a2630c25a0b27c93d9b46699"' :
                                        'id="xs-injectables-links-module-AppModule-7340ff7556bf5d1e8de3d04d94bf1c3b3c965ce13f3649e9746a2d394cd53c4e78b9b9fec28b8e4aa75f0b2a81133f26d8968221a2630c25a0b27c93d9b46699"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-188e4d438e882e1c067abba8eabda97c28560de3da9b1fef6913f0ac93cb8ee68b6fe5c66a00201c43e2bcb0ab196d723037bb07f7f9c006c8910e9b4707f4c0"' : 'data-target="#xs-controllers-links-module-AuthModule-188e4d438e882e1c067abba8eabda97c28560de3da9b1fef6913f0ac93cb8ee68b6fe5c66a00201c43e2bcb0ab196d723037bb07f7f9c006c8910e9b4707f4c0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-188e4d438e882e1c067abba8eabda97c28560de3da9b1fef6913f0ac93cb8ee68b6fe5c66a00201c43e2bcb0ab196d723037bb07f7f9c006c8910e9b4707f4c0"' :
                                            'id="xs-controllers-links-module-AuthModule-188e4d438e882e1c067abba8eabda97c28560de3da9b1fef6913f0ac93cb8ee68b6fe5c66a00201c43e2bcb0ab196d723037bb07f7f9c006c8910e9b4707f4c0"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-188e4d438e882e1c067abba8eabda97c28560de3da9b1fef6913f0ac93cb8ee68b6fe5c66a00201c43e2bcb0ab196d723037bb07f7f9c006c8910e9b4707f4c0"' : 'data-target="#xs-injectables-links-module-AuthModule-188e4d438e882e1c067abba8eabda97c28560de3da9b1fef6913f0ac93cb8ee68b6fe5c66a00201c43e2bcb0ab196d723037bb07f7f9c006c8910e9b4707f4c0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-188e4d438e882e1c067abba8eabda97c28560de3da9b1fef6913f0ac93cb8ee68b6fe5c66a00201c43e2bcb0ab196d723037bb07f7f9c006c8910e9b4707f4c0"' :
                                        'id="xs-injectables-links-module-AuthModule-188e4d438e882e1c067abba8eabda97c28560de3da9b1fef6913f0ac93cb8ee68b6fe5c66a00201c43e2bcb0ab196d723037bb07f7f9c006c8910e9b4707f4c0"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OrderModule-f25c81772b87469dce36e3fc0f308680465cf16e5c6d1bf859bec5616b788cf88dbce114c56d895ca347b443a52422437ce01e2359708933a06fe43ab530a63b"' : 'data-target="#xs-controllers-links-module-OrderModule-f25c81772b87469dce36e3fc0f308680465cf16e5c6d1bf859bec5616b788cf88dbce114c56d895ca347b443a52422437ce01e2359708933a06fe43ab530a63b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderModule-f25c81772b87469dce36e3fc0f308680465cf16e5c6d1bf859bec5616b788cf88dbce114c56d895ca347b443a52422437ce01e2359708933a06fe43ab530a63b"' :
                                            'id="xs-controllers-links-module-OrderModule-f25c81772b87469dce36e3fc0f308680465cf16e5c6d1bf859bec5616b788cf88dbce114c56d895ca347b443a52422437ce01e2359708933a06fe43ab530a63b"' }>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OrderModule-f25c81772b87469dce36e3fc0f308680465cf16e5c6d1bf859bec5616b788cf88dbce114c56d895ca347b443a52422437ce01e2359708933a06fe43ab530a63b"' : 'data-target="#xs-injectables-links-module-OrderModule-f25c81772b87469dce36e3fc0f308680465cf16e5c6d1bf859bec5616b788cf88dbce114c56d895ca347b443a52422437ce01e2359708933a06fe43ab530a63b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-f25c81772b87469dce36e3fc0f308680465cf16e5c6d1bf859bec5616b788cf88dbce114c56d895ca347b443a52422437ce01e2359708933a06fe43ab530a63b"' :
                                        'id="xs-injectables-links-module-OrderModule-f25c81772b87469dce36e3fc0f308680465cf16e5c6d1bf859bec5616b788cf88dbce114c56d895ca347b443a52422437ce01e2359708933a06fe43ab530a63b"' }>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductModule-227258f78e2ade148dbf3f8611d0853ffb1b9dc3d5d1860a0c45182490d1b009f5e3c65691203e1601af61a2bb5cc5197448593421dc39aba7fe793aebcb00f0"' : 'data-target="#xs-controllers-links-module-ProductModule-227258f78e2ade148dbf3f8611d0853ffb1b9dc3d5d1860a0c45182490d1b009f5e3c65691203e1601af61a2bb5cc5197448593421dc39aba7fe793aebcb00f0"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-227258f78e2ade148dbf3f8611d0853ffb1b9dc3d5d1860a0c45182490d1b009f5e3c65691203e1601af61a2bb5cc5197448593421dc39aba7fe793aebcb00f0"' :
                                            'id="xs-controllers-links-module-ProductModule-227258f78e2ade148dbf3f8611d0853ffb1b9dc3d5d1860a0c45182490d1b009f5e3c65691203e1601af61a2bb5cc5197448593421dc39aba7fe793aebcb00f0"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductModule-227258f78e2ade148dbf3f8611d0853ffb1b9dc3d5d1860a0c45182490d1b009f5e3c65691203e1601af61a2bb5cc5197448593421dc39aba7fe793aebcb00f0"' : 'data-target="#xs-injectables-links-module-ProductModule-227258f78e2ade148dbf3f8611d0853ffb1b9dc3d5d1860a0c45182490d1b009f5e3c65691203e1601af61a2bb5cc5197448593421dc39aba7fe793aebcb00f0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-227258f78e2ade148dbf3f8611d0853ffb1b9dc3d5d1860a0c45182490d1b009f5e3c65691203e1601af61a2bb5cc5197448593421dc39aba7fe793aebcb00f0"' :
                                        'id="xs-injectables-links-module-ProductModule-227258f78e2ade148dbf3f8611d0853ffb1b9dc3d5d1860a0c45182490d1b009f5e3c65691203e1601af61a2bb5cc5197448593421dc39aba7fe793aebcb00f0"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TableModule.html" data-type="entity-link" >TableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TableModule-dd5fb564e40a8625ffbacb238b371d97a0dbd3a15962feef8ada0dc543240df0bc0d0a919337269704e1d30929d70804c201665b1583b72b207db61cd4ef1f29"' : 'data-target="#xs-controllers-links-module-TableModule-dd5fb564e40a8625ffbacb238b371d97a0dbd3a15962feef8ada0dc543240df0bc0d0a919337269704e1d30929d70804c201665b1583b72b207db61cd4ef1f29"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TableModule-dd5fb564e40a8625ffbacb238b371d97a0dbd3a15962feef8ada0dc543240df0bc0d0a919337269704e1d30929d70804c201665b1583b72b207db61cd4ef1f29"' :
                                            'id="xs-controllers-links-module-TableModule-dd5fb564e40a8625ffbacb238b371d97a0dbd3a15962feef8ada0dc543240df0bc0d0a919337269704e1d30929d70804c201665b1583b72b207db61cd4ef1f29"' }>
                                            <li class="link">
                                                <a href="controllers/TableController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TableModule-dd5fb564e40a8625ffbacb238b371d97a0dbd3a15962feef8ada0dc543240df0bc0d0a919337269704e1d30929d70804c201665b1583b72b207db61cd4ef1f29"' : 'data-target="#xs-injectables-links-module-TableModule-dd5fb564e40a8625ffbacb238b371d97a0dbd3a15962feef8ada0dc543240df0bc0d0a919337269704e1d30929d70804c201665b1583b72b207db61cd4ef1f29"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TableModule-dd5fb564e40a8625ffbacb238b371d97a0dbd3a15962feef8ada0dc543240df0bc0d0a919337269704e1d30929d70804c201665b1583b72b207db61cd4ef1f29"' :
                                        'id="xs-injectables-links-module-TableModule-dd5fb564e40a8625ffbacb238b371d97a0dbd3a15962feef8ada0dc543240df0bc0d0a919337269704e1d30929d70804c201665b1583b72b207db61cd4ef1f29"' }>
                                        <li class="link">
                                            <a href="injectables/TableService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-88539706d348a22702ad551240172f59ec9b9e335cd323d6009e51dd26b87bd6a553fcc3bfbd520f3f4f6ac26f685392131f76fef43b7672632fe680f825a01c"' : 'data-target="#xs-controllers-links-module-UserModule-88539706d348a22702ad551240172f59ec9b9e335cd323d6009e51dd26b87bd6a553fcc3bfbd520f3f4f6ac26f685392131f76fef43b7672632fe680f825a01c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-88539706d348a22702ad551240172f59ec9b9e335cd323d6009e51dd26b87bd6a553fcc3bfbd520f3f4f6ac26f685392131f76fef43b7672632fe680f825a01c"' :
                                            'id="xs-controllers-links-module-UserModule-88539706d348a22702ad551240172f59ec9b9e335cd323d6009e51dd26b87bd6a553fcc3bfbd520f3f4f6ac26f685392131f76fef43b7672632fe680f825a01c"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-88539706d348a22702ad551240172f59ec9b9e335cd323d6009e51dd26b87bd6a553fcc3bfbd520f3f4f6ac26f685392131f76fef43b7672632fe680f825a01c"' : 'data-target="#xs-injectables-links-module-UserModule-88539706d348a22702ad551240172f59ec9b9e335cd323d6009e51dd26b87bd6a553fcc3bfbd520f3f4f6ac26f685392131f76fef43b7672632fe680f825a01c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-88539706d348a22702ad551240172f59ec9b9e335cd323d6009e51dd26b87bd6a553fcc3bfbd520f3f4f6ac26f685392131f76fef43b7672632fe680f825a01c"' :
                                        'id="xs-injectables-links-module-UserModule-88539706d348a22702ad551240172f59ec9b9e335cd323d6009e51dd26b87bd6a553fcc3bfbd520f3f4f6ac26f685392131f76fef43b7672632fe680f825a01c"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/OrderController.html" data-type="entity-link" >OrderController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductController.html" data-type="entity-link" >ProductController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TableController.html" data-type="entity-link" >TableController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderProductDto.html" data-type="entity-link" >CreateOrderProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableDto.html" data-type="entity-link" >CreateTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/Table.html" data-type="entity-link" >Table</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTableDto.html" data-type="entity-link" >UpdateTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableService.html" data-type="entity-link" >TableService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});