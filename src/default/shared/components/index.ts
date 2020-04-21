/*
 * spurtcommerce
 * version 3.0
 * http://www.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

// components
import {MainCarouselComponent} from './main-carousel/main-carousel.component';
import {BrandsCarouselComponent} from './brands-carousel/brands-carousel.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {FooterComponent} from './footer/footer.component';
import {OptionsComponent} from './options/options.component';
import {SidenavMenuComponent} from './sidenav-menu/sidenav-menu.component';
import {MenuComponent} from './menu/menu.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {HeaderComponent} from './header/header.component';
import {HeaderMenuComponent} from './header-menu/header-menu.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {ControlsComponent} from './controls/controls.component';
import {ProductsCarouselComponent} from './products-carousel/products-carousel.component';
import {ProductDialogComponent} from './products-carousel/product-dialog/product-dialog.component';
import {CartNavComponent} from './cart/cart.component';


// modules
import {PipesModule} from '../pipes/pipes.module';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {SharedModule} from '../shared.module';

// store
import {EffectsModule} from '@ngrx/effects';
import {ProductControlEffect} from '../../../core/product-control/effects/product-control.effect';
import {CommonEffect} from '../../../core/common/effects/common.effect';
import {ProductControlService} from '../../../core/product-control/product-control.service';
import {ProductControlSandbox} from '../../../core/product-control/product-control.sandbox';
import {CommonSandbox} from '../../../core/common/common.sandbox';
import {CommonService} from '../../../core/common/common.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ControlsProductDetailComponent} from './controls-product-detail/controls-product-detail.component';
import {GetDirectionsComponent} from '../get-directions/get-directions.component';
// import {AgmCoreModule} from '@agm/core';


import {MapModule, MapAPILoader, MarkerTypeId, IMapOptions, IBox, IMarkerIconInfo, WindowRef,   
    DocumentRef, MapServiceFactory, 
    BingMapAPILoaderConfig, BingMapAPILoader, 
    GoogleMapAPILoader,  GoogleMapAPILoaderConfig
} from 'angular-maps';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    wheelPropagation: true,
    suppressScrollX: true
};

const useBing = true;

export const COMPONENTS = [
    MainCarouselComponent,
    BrandsCarouselComponent,
    CategoryListComponent,
    BreadcrumbComponent,
    TopMenuComponent,
    MenuComponent,
    SidenavMenuComponent,
    OptionsComponent,
    FooterComponent,
    HeaderComponent,
    HeaderMenuComponent,
    SideBarComponent,
    ControlsComponent,
    ProductsCarouselComponent,
    ProductDialogComponent,
    ControlsProductDetailComponent,
    GetDirectionsComponent,
    CartNavComponent
];

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        PipesModule,
        PerfectScrollbarModule,
        SharedModule,
        EffectsModule.forFeature([ProductControlEffect, CommonEffect]),
        // AgmCoreModule,
        NgbModule,
        useBing ? MapModule.forRootBing() : MapModule.forRootGoogle()
    ],
    declarations: [COMPONENTS],

    exports: [COMPONENTS,
        PipesModule],
    entryComponents: [
        ProductDialogComponent
    ],
    providers: [
        {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG},
        ProductControlService, ProductControlSandbox, CommonSandbox, CommonService,
        { 
            provide: MapAPILoader, deps: [], useFactory: useBing ? BingMapServiceProviderFactory :  GoogleMapServiceProviderFactory
        }
    ]
})
export class ComponentsModule {
}


export function BingMapServiceProviderFactory(){
    let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
    bc.apiKey ="Av3k-1UVhR_OC_f4NluIl0svWbrojTLltmOWj7chODOA2hSEhgcwODt-LfBrDxT-"; 
      // replace with your bing map key
      // the usage of this key outside this plunker is illegal. 
    bc.branch = "experimental"; 
      // to use the experimental bing brach. There are some bug fixes for
      // clustering in that branch you will need if you want to use 
      // clustering.
    return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}

export function GoogleMapServiceProviderFactory(){
    const gc: GoogleMapAPILoaderConfig = new GoogleMapAPILoaderConfig();
    gc.apiKey = 'AIzaSyDe2QqXrbtaORvL-I0WHpiI72HxtfTz5Zo';
      // replace with your google map key
      // the usage of this key outside this plunker is illegal. 
    gc.enableClustering = true;
    return new GoogleMapAPILoader(gc, new WindowRef(), new DocumentRef());
}
