import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutPage } from '../pages/about/about';
import { Contact } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Crops } from '../pages/crops/crops';
import { Maize } from '../pages/maize/maize';
import { Wheat } from '../pages/wheat/wheat';
import { Cotton } from '../pages/cotton/cotton';
import { Rice } from '../pages/rice/rice';
import { Potato } from '../pages/potato/potato';
import { Seeds } from '../pages/seeds/seeds';
import { Pesticides } from '../pages/pesticides/pesticides';
import { Fertilizerz } from '../pages/fertilizerz/fertilizerz';
import { Wseeds }       from '../pages/wseeds/wseeds';
import { Wpesticides } from '../pages/wpesticides/wpesticides';
import { Wfertilizerz } from '../pages/wfertilizerz/wfertilizerz';
import { Cseeds }       from '../pages/cseeds/cseeds';
import { Cpesticides } from '../pages/cpesticides/cpesticides';
import { Cfertilizerz } from '../pages/cfertilizerz/cfertilizerz';
import { Rseeds }       from '../pages/rseeds/rseeds';
import { Rpesticides } from '../pages/rpesticides/rpesticides';
import { Rfertilizerz } from '../pages/rfertilizerz/rfertilizerz';
import { Pseeds }       from '../pages/pseeds/pseeds';
import { Ppesticides } from '../pages/ppesticides/ppesticides';
import { Pfertilizerz } from '../pages/pfertilizerz/pfertilizerz';
import { P1543 }    from '../pages/p1543/p1543';
import { Y3087 }    from '../pages/y3087/y3087';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
	Crops,
	Contact,
	Maize,
	Wheat,
	Cotton,
	Rice,
	Potato,
	Seeds,
	Pesticides,
	Fertilizerz,
	Wseeds,
	Wpesticides,
	Wfertilizerz,
	Cseeds,
	Cpesticides,
	Cfertilizerz,
	Rseeds,
	Rpesticides,
	Rfertilizerz,
	Pseeds,
	Ppesticides,
	Pfertilizerz,
	P1543,
	Y3087
	
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
	Crops,
	Contact,
	Maize,
	Wheat,
	Cotton,
	Rice,
	Potato,
	Seeds,
	Pesticides,
	Fertilizerz,
	Wseeds,
	Wpesticides,
	Wfertilizerz,
	Cseeds,
	Cpesticides,
	Cfertilizerz,
	Rseeds,
	Rpesticides,
	Rfertilizerz,
	Pseeds,
	Ppesticides,
	Pfertilizerz,
	P1543,
    Y3087
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
