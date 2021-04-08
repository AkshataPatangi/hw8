(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/DKY":
/*!************************************************************************************!*\
  !*** ./src/app/components/homepage/carousel-popular/carousel-popular.component.ts ***!
  \************************************************************************************/
/*! exports provided: CarouselPopularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselPopularComponent", function() { return CarouselPopularComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _carousel_popular_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel-popular.component.service */ "4wk1");
/* harmony import */ var _carousel_general_carousel_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../carousel-general/carousel-general.component */ "9MXf");





class CarouselPopularComponent {
    constructor(service, bo) {
        this.service = service;
        this.bo = bo;
        this.carouselid = "carousel2";
        this.mediatype = "movie";
    }
    ngOnInit() {
        this.service.getPosts().subscribe(response => {
            this.results = response;
            this.bo.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset])
                .subscribe((bs) => {
                if (bs.matches) {
                    var mobileresults = new Array();
                    for (var i = 0; i < this.results.length; i++) {
                        for (var j = 0; j < this.results[i].length; j++) {
                            mobileresults.push([this.results[i][j]]);
                        }
                    }
                    this.results = mobileresults;
                    console.log('Viewport is Handset');
                }
                else {
                    console.log('Viewport is not Handset');
                }
            });
        });
    }
}
CarouselPopularComponent.ɵfac = function CarouselPopularComponent_Factory(t) { return new (t || CarouselPopularComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_carousel_popular_component_service__WEBPACK_IMPORTED_MODULE_2__["CarouselPopularService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
CarouselPopularComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselPopularComponent, selectors: [["app-carousel-popular"]], decls: 4, vars: 3, consts: [[1, "mt-5"], [1, "carouselheader"], [3, "carid", "mediatype", "imagearray"]], template: function CarouselPopularComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Popular Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-carousel-general", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carid", ctx.carouselid)("mediatype", ctx.mediatype)("imagearray", ctx.results);
    } }, directives: [_carousel_general_carousel_general_component__WEBPACK_IMPORTED_MODULE_3__["CarouselGeneralComponent"]], styles: ["@media screen and (max-width: 600px) {\n    .carouselheader[_ngcontent-%COMP%]{\n        width:70%;\n        margin:0 auto;\n\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLXBvcHVsYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksU0FBUztRQUNULGFBQWE7O0lBRWpCO0FBQ0oiLCJmaWxlIjoiY2Fyb3VzZWwtcG9wdWxhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY2Fyb3VzZWxoZWFkZXJ7XG4gICAgICAgIHdpZHRoOjcwJTtcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcblxuICAgIH1cbn0gIl19 */"] });


/***/ }),

/***/ "/zwQ":
/*!***********************************************************************!*\
  !*** ./src/app/components/commondetails/reviews/reviews.component.ts ***!
  \***********************************************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ReviewsComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", review_r2["avatar_path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", review_r2["author"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r2["rating"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", review_r2["author"], " on ", review_r2["created_at"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r2["content"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://www.themoviedb.org/review/" + review_r2["id"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ReviewsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReviewsComponent_div_0_div_5_Template, 18, 7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.reviews);
} }
class ReviewsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReviewsComponent.ɵfac = function ReviewsComponent_Factory(t) { return new (t || ReviewsComponent)(); };
ReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewsComponent, selectors: [["app-reviews"]], inputs: { reviews: "reviews", count: "count" }, decls: 1, vars: 1, consts: [["class", "mt-5", 4, "ngIf"], [1, "mt-5"], [1, "carouselheader"], [1, "countreviews"], [4, "ngFor", "ngForOf"], [1, "row", "reviewsdetails"], [1, "col-sm-2"], [1, "rounded-circle", 3, "src"], [1, "col-sm-10"], [2, "font-size", "1.17em", "font-weight", "bold"], [1, "badge", "badge-pill", "badge-dark"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "fill", "white", "viewBox", "0 0 16 16", 1, "bi", "bi-star-fill", "badgedarkspacing"], ["d", "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"], [2, "opacity", "0.4"], [1, "lineclampreview"], ["target", "_black", 2, "text-decoration", "underline", 3, "href"]], template: function ReviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ReviewsComponent_div_0_Template, 6, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.count != 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".reviewsdetails[_ngcontent-%COMP%]{\n    width:100%;\n    height:20%;\n    background: white !important;\n    border-radius: 6px;\n    margin-bottom: 5%;\n    color:black;\n    padding:10px;\n}\n.countreviews[_ngcontent-%COMP%]{\n    opacity: 0.5;\n    margin-left:1%\n}\n.rounded-circle[_ngcontent-%COMP%]{\n    width:100px;\n    height:100px;\n}\n.lineclampreview[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;  \n    text-overflow: -o-ellipsis-lastline;\n    overflow: hidden;\n  }\n.badge-pill[_ngcontent-%COMP%] {\n     padding-left: 1.1em !important;\n     padding-right: 1.1em !important;\n     padding-top: .5em !important;\n     padding-bottom: .5em !important;\n     margin-left:3%\n }\n.badgedarkspacing[_ngcontent-%COMP%]{\n      padding-right: 25%;\n  }\n.badge-dark[_ngcontent-%COMP%]{\n      background-color: black !important;\n  }\n@media screen and (max-width: 600px) {\n    .reviewsdetails[_ngcontent-%COMP%]{\n        margin:0 auto;\n        width:90%;\n        height:20%;\n        margin-bottom: 10%;\n    }\n    .carouselheader[_ngcontent-%COMP%]{\n        width:90%;\n        margin:0 auto;\n        margin-bottom: 5%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWjtBQUNKO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsbUNBQW1DO0lBQ25DLGdCQUFnQjtFQUNsQjtBQUVEO0tBQ0ksOEJBQThCO0tBQzlCLCtCQUErQjtLQUMvQiw0QkFBNEI7S0FDNUIsK0JBQStCO0tBQy9CO0NBQ0o7QUFDQztNQUNJLGtCQUFrQjtFQUN0QjtBQUNBO01BQ0ksa0NBQWtDO0VBQ3RDO0FBRUE7SUFDRTtRQUNJLGFBQWE7UUFDYixTQUFTO1FBQ1QsVUFBVTtRQUNWLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksU0FBUztRQUNULGFBQWE7UUFDYixpQkFBaUI7SUFDckI7RUFDRiIsImZpbGUiOiJyZXZpZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmV2aWV3c2RldGFpbHN7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MjAlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUlO1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIHBhZGRpbmc6MTBweDtcbn1cbi5jb3VudHJldmlld3N7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIG1hcmdpbi1sZWZ0OjElXG59XG5cbi5yb3VuZGVkLWNpcmNsZXtcbiAgICB3aWR0aDoxMDBweDtcbiAgICBoZWlnaHQ6MTAwcHg7XG59XG5cbi5saW5lY2xhbXByZXZpZXcge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyAgXG4gICAgdGV4dC1vdmVyZmxvdzogLW8tZWxsaXBzaXMtbGFzdGxpbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gLmJhZGdlLXBpbGwge1xuICAgICBwYWRkaW5nLWxlZnQ6IDEuMWVtICFpbXBvcnRhbnQ7XG4gICAgIHBhZGRpbmctcmlnaHQ6IDEuMWVtICFpbXBvcnRhbnQ7XG4gICAgIHBhZGRpbmctdG9wOiAuNWVtICFpbXBvcnRhbnQ7XG4gICAgIHBhZGRpbmctYm90dG9tOiAuNWVtICFpbXBvcnRhbnQ7XG4gICAgIG1hcmdpbi1sZWZ0OjMlXG4gfSBcbiAgLmJhZGdlZGFya3NwYWNpbmd7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyNSU7XG4gIH1cbiAgLmJhZGdlLWRhcmt7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAucmV2aWV3c2RldGFpbHN7XG4gICAgICAgIG1hcmdpbjowIGF1dG87XG4gICAgICAgIHdpZHRoOjkwJTtcbiAgICAgICAgaGVpZ2h0OjIwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgIH1cbiAgICAuY2Fyb3VzZWxoZWFkZXJ7XG4gICAgICAgIHdpZHRoOjkwJTtcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgfVxuICB9Il19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/akshatapatangi/Documents/HW8/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "2DIH":
/*!*******************************************************************************!*\
  !*** ./src/app/components/commondetails/castandcrew/castandcrew.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CastandcrewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastandcrewComponent", function() { return CastandcrewComponent; });
/* harmony import */ var _castmodal_castmodal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../castmodal/castmodal.component */ "5QXa");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CastandcrewComponent_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "spna");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](image_r1["character"]);
} }
function CastandcrewComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CastandcrewComponent_div_5_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const image_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.openModal(image_r1["id"], image_r1["profile_path"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CastandcrewComponent_div_5_div_6_Template, 6, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r0.colclass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", image_r1["profile_path"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](image_r1["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", image_r1["character"]);
} }
class CastandcrewComponent {
    constructor(modalService, bo) {
        this.modalService = modalService;
        this.bo = bo;
        this.mobile = false;
        this.size = 'lg';
        this.colclass = 'col-2 card-group';
    }
    ngOnInit() {
        this.bo.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset])
            .subscribe((bs) => {
            if (bs.matches) {
                this.mobile = true;
                this.size = 'sm';
                this.colclass = 'col-6 card-group';
            }
        });
    }
    openModal(id, image) {
        const modalRef = this.modalService.open(_castmodal_castmodal_component__WEBPACK_IMPORTED_MODULE_0__["CastmodalComponent"], {
            size: this.size,
            centered: true,
        });
        console.log(this.size);
        modalRef.componentInstance.personid = id;
        modalRef.componentInstance.castimage = image;
        modalRef.result.then((result) => {
            console.log(result);
        }, (reason) => {
        });
    }
}
CastandcrewComponent.ɵfac = function CastandcrewComponent_Factory(t) { return new (t || CastandcrewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
CastandcrewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CastandcrewComponent, selectors: [["app-castandcrew"]], inputs: { castcrew: "castcrew" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_castmodal_castmodal_component__WEBPACK_IMPORTED_MODULE_0__["CastmodalComponent"]])], decls: 6, vars: 1, consts: [[1, "mt-5"], [1, "carouselheader"], [1, "flexcontainer"], [1, "row", "flex-nowrap"], [3, "class", 4, "ngFor", "ngForOf"], [1, "card", "h-100", 3, "click"], [1, "card-img-top", 3, "src"], [1, "card-body", 2, "color", "black"], [4, "ngIf"]], template: function CastandcrewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Full Cast and Crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CastandcrewComponent_div_5_Template, 7, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.castcrew);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".flexcontainer[_ngcontent-%COMP%]{\n    overflow-y: hidden;\n    overflow-x: scroll;\n}\n\n@media screen and (min-width: 600px) {\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n    height: 8px;\n  }\n  \n[_ngcontent-%COMP%]::-webkit-scrollbar-track{\n    box-shadow:         inset 0 0 2px darkgray;\n    background-color:transparent;\n    border-radius: 20px;\n    border: 1px solid slategrey;\n    \n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background-color:darkgray;\n    outline: 1px solid slategrey;\n  }\n}\n\n.card[_ngcontent-%COMP%]{\n    border:none;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n\n.card-body[_ngcontent-%COMP%]{\n    text-align: center;\n  }\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:active{\n    background-color:slategrey\n  }\n\n.card-group[_ngcontent-%COMP%]{\n    margin-bottom: 3%;\n  }\n\n@media screen and (max-width: 600px) {\n    .flexcontainer[_ngcontent-%COMP%]{\n        margin:0 auto;\n        width:100%;\n        height:20%;\n        margin-bottom: 10%;\n    }\n    .carouselheader[_ngcontent-%COMP%]{\n        width:90%;\n        margin:0 auto;\n        margin-bottom: 5%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc3RhbmRjcmV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0FBQ0E7SUFDSSxXQUFXO0VBQ2I7O0FBRUY7SUFHSSwwQ0FBMEM7SUFDMUMsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQiwyQkFBMkI7O0FBRS9CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDRCQUE0QjtFQUM5QjtBQUNGOztBQUVFO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztBQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0U7RUFDRjs7QUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFO1FBQ0ksYUFBYTtRQUNiLFVBQVU7UUFDVixVQUFVO1FBQ1Ysa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxTQUFTO1FBQ1QsYUFBYTtRQUNiLGlCQUFpQjtJQUNyQjtFQUNGIiwiZmlsZSI6ImNhc3RhbmRjcmV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleGNvbnRhaW5lcntcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgaGVpZ2h0OiA4cHg7XG4gIH1cbiAgXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre1xuICAgIC1tb3otYm94LXNoYWRvdzogICAgaW5zZXQgMCAwIDJweCBkYXJrZ3JheTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAycHggZGFya2dyYXk7XG4gICAgYm94LXNoYWRvdzogICAgICAgICBpbnNldCAwIDAgMnB4IGRhcmtncmF5O1xuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XG4gICAgXG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ZGFya2dyYXk7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTtcbiAgfVxufVxuXG4gIC5jYXJke1xuICAgIGJvcmRlcjpub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmNhcmQtYm9keXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnNsYXRlZ3JleVxuICB9XG5cbiAgLmNhcmQtZ3JvdXB7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5mbGV4Y29udGFpbmVye1xuICAgICAgICBtYXJnaW46MCBhdXRvO1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBoZWlnaHQ6MjAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgfVxuICAgIC5jYXJvdXNlbGhlYWRlcntcbiAgICAgICAgd2lkdGg6OTAlO1xuICAgICAgICBtYXJnaW46MCBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICB9XG4gIH1cbiJdfQ== */"] });


/***/ }),

/***/ "31cq":
/*!****************************************************************************!*\
  !*** ./src/app/components/homepage/carousel/carousel.component.service.ts ***!
  \****************************************************************************/
/*! exports provided: CarouselService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselService", function() { return CarouselService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CarouselService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = '/currently';
    }
    getPosts() {
        return this.httpClient.get(this.url);
    }
}
CarouselService.ɵfac = function CarouselService_Factory(t) { return new (t || CarouselService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CarouselService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CarouselService, factory: CarouselService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "3Uuh":
/*!*************************************************************************************!*\
  !*** ./src/app/components/commondetails/youtube-player/youtube-player.component.ts ***!
  \*************************************************************************************/
/*! exports provided: YoutubePlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlayerComponent", function() { return YoutubePlayerComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");




class YoutubePlayerComponent {
    constructor(bo) {
        this.bo = bo;
    }
    ngOnInit() {
        this.bo.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset])
            .subscribe((bs) => {
            if (bs.matches) {
                this.height = "200";
                this.widthyoutube = '340';
            }
        });
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
    }
}
YoutubePlayerComponent.ɵfac = function YoutubePlayerComponent_Factory(t) { return new (t || YoutubePlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
YoutubePlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: YoutubePlayerComponent, selectors: [["app-youtube-player"]], inputs: { ytvideoid: "ytvideoid" }, decls: 1, vars: 3, consts: [[1, "youtubeplayer", 3, "height", "width", "videoId"]], template: function YoutubePlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "youtube-player", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("videoId", ctx.ytvideoid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", ctx.height)("width", ctx.widthyoutube);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__["YouTubePlayer"]], styles: ["@media screen and (max-width: 600px) {\n    .youtubeplayer[_ngcontent-%COMP%]{\n        top:20%\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlvdXR1YmUtcGxheWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJO0lBQ0o7QUFDSiIsImZpbGUiOiJ5b3V0dWJlLXBsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAueW91dHViZXBsYXllcntcbiAgICAgICAgdG9wOjIwJVxuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "4wk1":
/*!********************************************************************************************!*\
  !*** ./src/app/components/homepage/carousel-popular/carousel-popular.component.service.ts ***!
  \********************************************************************************************/
/*! exports provided: CarouselPopularService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselPopularService", function() { return CarouselPopularService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CarouselPopularService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = '/popularmovies';
    }
    getPosts() {
        return this.httpClient.get(this.url);
    }
}
CarouselPopularService.ɵfac = function CarouselPopularService_Factory(t) { return new (t || CarouselPopularService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CarouselPopularService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CarouselPopularService, factory: CarouselPopularService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "5QXa":
/*!***************************************************************************!*\
  !*** ./src/app/components/commondetails/castmodal/castmodal.component.ts ***!
  \***************************************************************************/
/*! exports provided: CastmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastmodalComponent", function() { return CastmodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _castmodal_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./castmodal.component.service */ "CEoe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CastmodalComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Birth: ", ctx_r1.fromParent["birthday"], " ");
} }
function CastmodalComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Birth Place: ", ctx_r2.fromParent["place_of_birth"], " ");
} }
function CastmodalComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Gender: ", ctx_r3.fromParent["gender"], " ");
} }
function CastmodalComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r4.fromParent["website"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.fromParent["website"]);
} }
function CastmodalComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Known for: ", ctx_r5.fromParent["known_for_department"], " ");
} }
function CastmodalComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Also Known as: ", ctx_r6.fromParent["also_known_as"], " ");
} }
function CastmodalComponent_div_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://imdb.com/name/" + ctx_r7.fromParent["imdb_id"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastmodalComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://www.instagram.com/" + ctx_r8.fromParent["instagram_id"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastmodalComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://facebook.com/" + ctx_r9.fromParent["facebook_id"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastmodalComponent_div_0_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://twitter.com/" + ctx_r10.fromParent["twitter_id"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CastmodalComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.fromParent["biography"]);
} }
function CastmodalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CastmodalComponent_div_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CastmodalComponent_div_0_div_11_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CastmodalComponent_div_0_div_12_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CastmodalComponent_div_0_div_13_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CastmodalComponent_div_0_div_14_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CastmodalComponent_div_0_div_15_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CastmodalComponent_div_0_div_16_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CastmodalComponent_div_0_div_18_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CastmodalComponent_div_0_div_19_Template, 3, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CastmodalComponent_div_0_div_20_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CastmodalComponent_div_0_div_21_Template, 3, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CastmodalComponent_div_0_div_22_Template, 5, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.fromParent["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.castimage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fromParent["birthday"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fromParent["place_of_birth"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fromParent["gender"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fromParent["website"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fromParent["known_for_department"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fromParent["also_known_as"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fromParent["imdb_id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fromParent["instagram_id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fromParent["facebook_id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fromParent["twitter_id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.fromParent["biography"]);
} }
class CastmodalComponent {
    constructor(activeModal, service) {
        this.activeModal = activeModal;
        this.service = service;
    }
    ngOnInit() {
        console.log(this.personid);
        this.service.castDetails(this.personid).subscribe(response => {
            this.fromParent = response;
            console.log(this.fromParent);
        });
    }
    closeModal() {
        this.activeModal.close();
    }
}
CastmodalComponent.ɵfac = function CastmodalComponent_Factory(t) { return new (t || CastmodalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_castmodal_component_service__WEBPACK_IMPORTED_MODULE_2__["CastDetailsService"])); };
CastmodalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CastmodalComponent, selectors: [["app-castmodal"]], inputs: { personid: "personid", castimage: "castimage" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "modal-header", 2, "color", "black"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", 2, "color", "black"], [1, "row"], [1, "col-sm-4", 3, "src"], [1, "col-sm-7"], ["class", "mt-1", 4, "ngIf"], [1, "d-inline-flex", "mt-3"], ["class", "popupng", "triggers", "mouseenter:mouseleave", "placement", "top", "ngbPopover", "Visit IMDB", 4, "ngIf"], ["class", "ml-2", "triggers", "mouseenter:mouseleave", "placement", "top", "ngbPopover", "Visit Instagram", 4, "ngIf"], ["triggers", "mouseenter:mouseleave", "placement", "top", "ngbPopover", "Visit Facebook", 4, "ngIf"], ["class", "ml-2", "triggers", "mouseenter:mouseleave", "placement", "top", "ngbPopover", "Visit Twitter", 4, "ngIf"], ["class", "mt-4", 4, "ngIf"], [1, "mt-1"], ["target", "_blank", 3, "href"], ["triggers", "mouseenter:mouseleave", "placement", "top", "ngbPopover", "Visit IMDB", 1, "popupng"], [1, "fa", "fa-imdb", 2, "font-size", "34px", "color", "#F5DE50"], ["triggers", "mouseenter:mouseleave", "placement", "top", "ngbPopover", "Visit Instagram", 1, "ml-2"], [1, "fa", "fa-instagram", 2, "font-size", "34px", "color", "#C13584"], ["triggers", "mouseenter:mouseleave", "placement", "top", "ngbPopover", "Visit Facebook"], [1, "fa", "fa-facebook-official", 2, "padding-left", "10px", "font-size", "34px", "color", "#0d6efd"], ["triggers", "mouseenter:mouseleave", "placement", "top", "ngbPopover", "Visit Twitter", 1, "ml-2"], [1, "fa", "fa-twitter", 2, "font-size", "34px", "color", "#1DA1F2"], [1, "mt-4"], [1, "mt-2"]], template: function CastmodalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CastmodalComponent_div_0_Template, 23, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fromParent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbPopover"]], styles: [".close[_ngcontent-%COMP%]{\n    border:1px solid black;\n}\n.modal-title[_ngcontent-%COMP%]{\n    opacity:0.7;\n}\n  .popupng:hover{\n    color: #fff;\n    border-color: #6c757d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc3Rtb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0g7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJjYXN0bW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5tb2RhbC1vcGVuIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufSAqL1xuLmNsb3Nle1xuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XG59XG4ubW9kYWwtdGl0bGV7XG4gICAgb3BhY2l0eTowLjc7XG59XG5cbjo6bmctZGVlcCAucG9wdXBuZzpob3ZlcntcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICM2Yzc1N2Q7XG59XG4iXX0= */"] });


/***/ }),

/***/ "7Hto":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/homepage/carousel-trending/carousel-trending.component.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: CarouselTrendingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselTrendingService", function() { return CarouselTrendingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CarouselTrendingService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = '/trendingmovies';
    }
    getPosts() {
        return this.httpClient.get(this.url);
    }
}
CarouselTrendingService.ɵfac = function CarouselTrendingService_Factory(t) { return new (t || CarouselTrendingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CarouselTrendingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CarouselTrendingService, factory: CarouselTrendingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "8C7h":
/*!********************************************************************************************!*\
  !*** ./src/app/components/homepage/carousel-trending-tv/carousel-trending-tv.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CarouselTrendingTvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselTrendingTvComponent", function() { return CarouselTrendingTvComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _carousel_trending_tv_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel-trending-tv.component.service */ "B5fK");
/* harmony import */ var _carousel_general_carousel_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../carousel-general/carousel-general.component */ "9MXf");





class CarouselTrendingTvComponent {
    constructor(service, bo) {
        this.service = service;
        this.bo = bo;
        this.carouselid = "carousel7";
        this.mediatype = "tv";
    }
    ngOnInit() {
        this.service.getPosts().subscribe(response => {
            this.results = response;
            this.bo.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset])
                .subscribe((bs) => {
                if (bs.matches) {
                    var mobileresults = new Array();
                    for (var i = 0; i < this.results.length; i++) {
                        for (var j = 0; j < this.results[i].length; j++) {
                            mobileresults.push([this.results[i][j]]);
                        }
                    }
                    this.results = mobileresults;
                    console.log('Viewport is Handset');
                }
                else {
                    console.log('Viewport is not Handset');
                }
            });
        });
    }
}
CarouselTrendingTvComponent.ɵfac = function CarouselTrendingTvComponent_Factory(t) { return new (t || CarouselTrendingTvComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_carousel_trending_tv_component_service__WEBPACK_IMPORTED_MODULE_2__["CarouselTrendingTVService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
CarouselTrendingTvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselTrendingTvComponent, selectors: [["app-carousel-trending-tv"]], decls: 4, vars: 3, consts: [[1, "mt-5"], [1, "carouselheader"], [3, "carid", "mediatype", "imagearray"]], template: function CarouselTrendingTvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Trending TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-carousel-general", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carid", ctx.carouselid)("mediatype", ctx.mediatype)("imagearray", ctx.results);
    } }, directives: [_carousel_general_carousel_general_component__WEBPACK_IMPORTED_MODULE_3__["CarouselGeneralComponent"]], styles: ["@media screen and (max-width: 600px) {\n    .carouselheader[_ngcontent-%COMP%]{\n        width:70%;\n        margin:0 auto;\n\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLXRyZW5kaW5nLXR2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLFNBQVM7UUFDVCxhQUFhOztJQUVqQjtBQUNKIiwiZmlsZSI6ImNhcm91c2VsLXRyZW5kaW5nLXR2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5jYXJvdXNlbGhlYWRlcntcbiAgICAgICAgd2lkdGg6NzAlO1xuICAgICAgICBtYXJnaW46MCBhdXRvO1xuXG4gICAgfVxufSAiXX0= */"] });


/***/ }),

/***/ "9MXf":
/*!***************************************************************************!*\
  !*** ./src/app/components/carousel-general/carousel-general.component.ts ***!
  \***************************************************************************/
/*! exports provided: CarouselGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselGeneralComponent", function() { return CarouselGeneralComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function CarouselGeneralComponent_ol_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "li");
} if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](i_r4 == 0 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-target", "#" + ctx_r2.carid)("data-slide-to", i_r4);
} }
function CarouselGeneralComponent_ol_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ol", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselGeneralComponent_ol_1_li_1_Template, 1, 5, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.imagearray);
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
function CarouselGeneralComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, "/watch/" + ctx_r7.mediatype, item_r8["id"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r8["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8["name"]);
} }
function CarouselGeneralComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CarouselGeneralComponent_div_3_div_2_Template, 7, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("carousel-item ", i_r6 == 0 ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", image_r5);
} }
class CarouselGeneralComponent {
    constructor(bo) {
        this.bo = bo;
        this.mobile = false;
    }
    ngOnInit() {
        this.bo.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset])
            .subscribe((bs) => {
            if (bs.matches) {
                this.mobile = true;
            }
            else {
            }
        });
    }
}
CarouselGeneralComponent.ɵfac = function CarouselGeneralComponent_Factory(t) { return new (t || CarouselGeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
CarouselGeneralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselGeneralComponent, selectors: [["app-carousel-general"]], inputs: { carid: "carid", mediatype: "mediatype", imagearray: "imagearray" }, decls: 12, vars: 5, consts: [["data-ride", "carousel", "data-interval", "false", 1, "carousel", "slide", 3, "id"], ["class", "carousel-indicators", 4, "ngIf"], ["role", "listbox", 1, "carousel-inner"], [3, "class", 4, "ngFor", "ngForOf"], ["role", "button", "data-slide", "prev", 1, "carousel-control-prev", 3, "href"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["role", "button", "data-slide", "next", 1, "carousel-control-next", 3, "href"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "carousel-indicators"], [1, "row", "card-body", "relative"], ["class", "col-md-2", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "card", "absolute"], [3, "routerLink"], ["alt", "Card image cap", 1, "card-img-top", "img-fluid", 3, "src"], [1, "carousel-caption", "relative"], [1, "ml-2", 2, "position", "absolute", "bottom", "0"]], template: function CarouselGeneralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselGeneralComponent_ol_1_Template, 2, 1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselGeneralComponent_div_3_Template, 3, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.carid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.imagearray);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "#", ctx.carid, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "#", ctx.carid, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["@media screen and (min-width: 600px) {\n.carousel-control-next[_ngcontent-%COMP%] {\n    width:3%;\n    right:-4%\n    \n  }\n  .carousel-control-prev[_ngcontent-%COMP%] {\n    width:3%;\n    left: -4%;\n  }\n  .carousel[_ngcontent-%COMP%]{\n    width:95%;\n    margin:0 auto;\n  }\n  \n  .carousel-indicators[_ngcontent-%COMP%] {\n    bottom: -30px;\n}\n.carousel-caption[_ngcontent-%COMP%]{\n  display: none; \n  width:100%;\n  height:50%;\n  background-image: linear-gradient(to top,black,black,black,black,black,black, black,black,rgba(0,0,0,0.5), rgba(255, 255, 255, 0));\n  text-align:left;\n  left: 0;\n  bottom:0;\n  right:0;\n  font-size: 14px;\n}\n[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  box-shadow: none !important;\n}\n.card[_ngcontent-%COMP%]{\n  border:none;\n  outline:none;\n  margin: 10px 5px 5px 5px;\n}\n.card[_ngcontent-%COMP%]:hover{\n  transform: scale(1.1);\n}\n\n.card[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%]{\n  display: block;\n}\n\n}\n\n@media screen and (max-width: 600px) {\n  .carousel[_ngcontent-%COMP%]{\n    width:70%;\n    margin:0 auto;\n  }\n  .carousel-control-next[_ngcontent-%COMP%] {\n    width:15%;\n    right:-8%\n    \n  }\n  .carousel-control-prev[_ngcontent-%COMP%] {\n    width:15%;\n    left: -8%;\n  }\n\n  .carousel-caption[_ngcontent-%COMP%]{\n    display: block; \n    width:100%;\n    height:30%;\n    background-image: linear-gradient(to top,black,black,black,black,black, black,black,rgba(0,0,0,0.5), rgba(255, 255, 255, 0));\n    text-align:left;\n    left: 0;\n    bottom:0;\n    right:0;\n    font-size: 14px;\n  }\n  [_ngcontent-%COMP%]:focus {\n    outline: none !important;\n    box-shadow: none !important;\n  }\n  .card[_ngcontent-%COMP%]{\n    border:none;\n    outline:none;\n    margin: 10px 5px 5px 5px;\n  }\n\n  .card[_ngcontent-%COMP%]:hover{\n    transform: scale(1.1);\n  }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLWdlbmVyYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtJQUNJLFFBQVE7SUFDUjs7RUFFRjtFQUNBO0lBQ0UsUUFBUTtJQUNSLFNBQVM7RUFDWDtFQUNBO0lBQ0UsU0FBUztJQUNULGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsVUFBVTtFQUNWLGtJQUFrSTtFQUNsSSxlQUFlO0VBQ2YsT0FBTztFQUNQLFFBQVE7RUFDUixPQUFPO0VBQ1AsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVCxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFNBQVM7SUFDVDs7RUFFRjtFQUNBO0lBQ0UsU0FBUztJQUNULFNBQVM7RUFDWDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0lBQ1YsVUFBVTtJQUNWLDRIQUE0SDtJQUM1SCxlQUFlO0lBQ2YsT0FBTztJQUNQLFFBQVE7SUFDUixPQUFPO0lBQ1AsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0FBRUYiLCJmaWxlIjoiY2Fyb3VzZWwtZ2VuZXJhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgd2lkdGg6MyU7XG4gICAgcmlnaHQ6LTQlXG4gICAgXG4gIH1cbiAgLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gICAgd2lkdGg6MyU7XG4gICAgbGVmdDogLTQlO1xuICB9XG4gIC5jYXJvdXNlbHtcbiAgICB3aWR0aDo5NSU7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgfVxuICBcbiAgLmNhcm91c2VsLWluZGljYXRvcnMge1xuICAgIGJvdHRvbTogLTMwcHg7XG59XG4uY2Fyb3VzZWwtY2FwdGlvbntcbiAgZGlzcGxheTogbm9uZTsgXG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDo1MCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsYmxhY2ssYmxhY2ssYmxhY2ssYmxhY2ssYmxhY2ssYmxhY2ssIGJsYWNrLGJsYWNrLHJnYmEoMCwwLDAsMC41KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG4gIHRleHQtYWxpZ246bGVmdDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOjA7XG4gIHJpZ2h0OjA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNhcmR7XG4gIGJvcmRlcjpub25lO1xuICBvdXRsaW5lOm5vbmU7XG4gIG1hcmdpbjogMTBweCA1cHggNXB4IDVweDtcbn1cbi5jYXJkOmhvdmVye1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5jYXJkOmhvdmVyIC5jYXJvdXNlbC1jYXB0aW9ue1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY2Fyb3VzZWx7XG4gICAgd2lkdGg6NzAlO1xuICAgIG1hcmdpbjowIGF1dG87XG4gIH1cbiAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgd2lkdGg6MTUlO1xuICAgIHJpZ2h0Oi04JVxuICAgIFxuICB9XG4gIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICAgIHdpZHRoOjE1JTtcbiAgICBsZWZ0OiAtOCU7XG4gIH1cblxuICAuY2Fyb3VzZWwtY2FwdGlvbntcbiAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MzAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsYmxhY2ssYmxhY2ssYmxhY2ssYmxhY2ssYmxhY2ssIGJsYWNrLGJsYWNrLHJnYmEoMCwwLDAsMC41KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOjA7XG4gICAgcmlnaHQ6MDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5jYXJke1xuICAgIGJvcmRlcjpub25lO1xuICAgIG91dGxpbmU6bm9uZTtcbiAgICBtYXJnaW46IDEwcHggNXB4IDVweCA1cHg7XG4gIH1cblxuICAuY2FyZDpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cblxufVxuXG4iXX0= */"] });


/***/ }),

/***/ "9uF1":
/*!*********************************************************************!*\
  !*** ./src/app/components/commondetails/commondetails.component.ts ***!
  \*********************************************************************/
/*! exports provided: CommondetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommondetailsComponent", function() { return CommondetailsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./youtube-player/youtube-player.component */ "3Uuh");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _castandcrew_castandcrew_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./castandcrew/castandcrew.component */ "2DIH");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reviews/reviews.component */ "/zwQ");
/* harmony import */ var _carousel_general_carousel_general_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../carousel-general/carousel-general.component */ "9MXf");










const _c0 = ["selfClosingAlert"];
const _c1 = ["dangerselfClosingAlert"];
function CommondetailsComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.details["release_date"]);
} }
function CommondetailsComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CommondetailsComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.details["vote_average"]);
} }
function CommondetailsComponent_div_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " | ");
} }
function CommondetailsComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CommondetailsComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r7.details["runtime"]);
} }
function CommondetailsComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Genres: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.details["genres"]);
} }
function CommondetailsComponent_div_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Spoken Languages: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.details["spoken_languages"]);
} }
function CommondetailsComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CommondetailsComponent_div_0_div_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r20.removefromwatchlist(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Remove from Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CommondetailsComponent_div_0_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CommondetailsComponent_div_0_ng_template_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r22.addtowatchlist(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Add to Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CommondetailsComponent_div_0_ngb_alert_22_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function CommondetailsComponent_div_0_ngb_alert_22_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r25.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r13.successMessage, " ");
} }
function CommondetailsComponent_div_0_ngb_alert_23_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function CommondetailsComponent_div_0_ngb_alert_23_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r28.dangerMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r14.dangerMessage, " ");
} }
function CommondetailsComponent_div_0_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r15.details["overview"], " ");
} }
function CommondetailsComponent_div_0_app_castandcrew_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-castandcrew", 38);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("castcrew", ctx_r16.castcrew);
} }
function CommondetailsComponent_div_0_app_reviews_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-reviews", 39);
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("reviews", ctx_r17.reviews)("count", ctx_r17.reviews.length);
} }
function CommondetailsComponent_div_0_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Recommended Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CommondetailsComponent_div_0_div_35_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Recommended TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CommondetailsComponent_div_0_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CommondetailsComponent_div_0_div_35_div_1_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CommondetailsComponent_div_0_div_35_div_2_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-carousel-general", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r18.mediatype == "movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r18.mediatype == "tv");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("carid", ctx_r18.carouselid)("mediatype", ctx_r18.mediatype)("imagearray", ctx_r18.recommend)("mobileresults", ctx_r18.mobileresultsr);
} }
function CommondetailsComponent_div_0_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Similar Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CommondetailsComponent_div_0_div_36_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Similar TV Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CommondetailsComponent_div_0_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CommondetailsComponent_div_0_div_36_div_1_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CommondetailsComponent_div_0_div_36_div_2_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-carousel-general", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.mediatype == "movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.mediatype == "tv");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("carid", ctx_r19.carouselid + "s")("mediatype", ctx_r19.mediatype)("imagearray", ctx_r19.similar)("mobileresults", ctx_r19.mobileresultss);
} }
function CommondetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-youtube-player", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "P", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CommondetailsComponent_div_0_div_10_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CommondetailsComponent_div_0_div_11_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CommondetailsComponent_div_0_div_12_Template, 4, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CommondetailsComponent_div_0_ng_template_13_Template, 1, 0, "ng-template", 10, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CommondetailsComponent_div_0_div_15_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CommondetailsComponent_div_0_div_16_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CommondetailsComponent_div_0_div_17_Template, 5, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CommondetailsComponent_div_0_div_18_Template, 5, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, CommondetailsComponent_div_0_div_19_Template, 3, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, CommondetailsComponent_div_0_ng_template_20_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, CommondetailsComponent_div_0_ngb_alert_22_Template, 3, 1, "ngb-alert", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, CommondetailsComponent_div_0_ngb_alert_23_Template, 3, 1, "ngb-alert", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, CommondetailsComponent_div_0_div_25_Template, 4, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, CommondetailsComponent_div_0_app_castandcrew_33_Template, 1, 1, "app-castandcrew", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, CommondetailsComponent_div_0_app_reviews_34_Template, 1, 2, "app-reviews", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, CommondetailsComponent_div_0_div_35_Template, 4, 6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, CommondetailsComponent_div_0_div_36_Template, 4, 6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](21);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ytvideoid", ctx_r0.details["vkey"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.details["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.details["tagline"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.details["release_date"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.details["release_date"] && ctx_r0.details["vote_average"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.details["vote_average"])("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.details["runtime"] && ctx_r0.details["vote_average"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.details["runtime"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.details["genres"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.details["spoken_languages"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.checkexistance())("ngIfElse", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.successMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.dangerMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.details["overview"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r0.twitterURL(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r0.facebookURL(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.castcrew == null ? null : ctx_r0.castcrew.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.reviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.recommend == null ? null : ctx_r0.recommend.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.similar == null ? null : ctx_r0.similar.length) > 0);
} }
class CommondetailsComponent {
    constructor(router) {
        this.router = router;
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this._danger = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.successMessage = '';
        this.dangerMessage = '';
    }
    ngOnInit() {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this._success.subscribe(message => this.successMessage = message);
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(5000)).subscribe(() => {
            if (this.selfClosingAlert) {
                this.selfClosingAlert.close();
            }
        });
        this._danger.subscribe(message => this.dangerMessage = message);
        this._danger.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(5000)).subscribe(() => {
            if (this.dangerselfClosingAlert) {
                this.dangerselfClosingAlert.close();
            }
        });
    }
    twitterURL() {
        var twit = 'https://twitter.com/intent/tweet?text=';
        var strval = 'Watch ' + this.details['name'].replaceAll('&', '%26') + '%0A' + 'https://www.youtube.com/watch?v=' + this.details['vkey'] + '%0A' + '%23USC %23CSCI571 %23FightOn';
        return twit + strval;
    }
    facebookURL() {
        var fb = "https://www.facebook.com/sharer/sharer.php?u=";
        var yt = 'https://www.youtube.com/watch?v=' + this.details['vkey'];
        return fb + yt;
    }
    checkexistance() {
        var watchlisttemp = JSON.parse(localStorage.getItem('watchlist'));
        for (var i = 0; i < watchlisttemp.length; i++) {
            if (watchlisttemp[i]['id'] == this.details['id'] && watchlisttemp[i]['media_type'] == this.mediatype) {
                return true;
            }
        }
        return false;
    }
    addtowatchlist() {
        var watchlisttemp = JSON.parse(localStorage.getItem('watchlist'));
        if (this.dangerselfClosingAlert) {
            this.dangerselfClosingAlert.close();
        }
        console.log(JSON.parse(localStorage.getItem('watchlist')));
        watchlisttemp.unshift({ 'id': this.details['id'], 'media_type': this.mediatype });
        localStorage.setItem('watchlist', JSON.stringify(watchlisttemp));
        this._success.next('Added to watchlist.');
        console.log(JSON.parse(localStorage.getItem('watchlist')));
    }
    removefromwatchlist() {
        if (this.selfClosingAlert) {
            this.selfClosingAlert.close();
        }
        var temparray = JSON.parse(localStorage.getItem('watchlist'));
        console.log(JSON.parse(localStorage.getItem('watchlist')));
        for (var i = 0; i < temparray.length; i++) {
            if (temparray[i]['id'] == this.details['id'] && temparray[i]['media_type'] == this.mediatype) {
                temparray.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('watchlist', JSON.stringify(temparray));
        this._danger.next('Removed from watchlist.');
        console.log(JSON.parse(localStorage.getItem('watchlist')));
    }
}
CommondetailsComponent.ɵfac = function CommondetailsComponent_Factory(t) { return new (t || CommondetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CommondetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CommondetailsComponent, selectors: [["app-commondetails"]], viewQuery: function CommondetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dangerselfClosingAlert = _t.first);
    } }, inputs: { details: "details", castcrew: "castcrew", reviews: "reviews", recommend: "recommend", similar: "similar", carouselid: "carouselid", mediatype: "mediatype", mobileresultsr: "mobileresultsr", mobileresultss: "mobileresultss" }, decls: 1, vars: 1, consts: [["class", "container details", 4, "ngIf"], [1, "container", "details"], [1, "row"], [1, "col-sm-7"], [3, "ytvideoid"], [1, "col-sm-5"], [2, "font-style", "italic", "opacity", "0.7"], ["class", "ml-3 mr-2", 4, "ngIf"], ["class", "ml-2", 4, "ngIf"], ["class", "row ml-2 mr-2", 4, "ngIf", "ngIfElse"], ["class", "ml-2"], ["elseblock", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["type", "success", 3, "closed", 4, "ngIf"], ["type", "danger", 3, "closed", 4, "ngIf"], [1, "descriptiondiv"], ["class", "mt-5", 4, "ngIf"], [1, "sharediv"], [1, "mt-5"], ["target", "_blank", "data-size", "large", 1, "twitter-share-button", 3, "href"], [1, "fa", "fa-twitter", 2, "font-size", "28px", "color", "#1DA1F2"], ["target", "_blank", 1, "fb-xfbml-parse-ignore", 3, "href"], [1, "fa", "fa-facebook-official", 2, "padding-left", "10px", "font-size", "28px", "color", "#0d6efd"], [3, "castcrew", 4, "ngIf"], [3, "reviews", "count", 4, "ngIf"], [1, "ml-3", "mr-2"], [2, "opacity", "0.7"], [1, "ml-2"], [1, "row", "ml-2", "mr-2"], [1, "fa", "fa-star", 2, "font-size", "16px", "color", "white"], [1, "ml-2", 2, "opacity", "0.7"], [1, "buttonwatchlist", "mb-3", 3, "click"], ["type", "success", 3, "closed"], ["selfClosingAlert", ""], ["type", "danger", 3, "closed"], ["dangerselfClosingAlert", ""], [3, "castcrew"], [3, "reviews", "count"], [3, "carid", "mediatype", "imagearray", "mobileresults"], [1, "carouselheader"]], template: function CommondetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CommondetailsComponent_div_0_Template, 37, 22, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.details);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_5__["YoutubePlayerComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlert"], _castandcrew_castandcrew_component__WEBPACK_IMPORTED_MODULE_7__["CastandcrewComponent"], _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_8__["ReviewsComponent"], _carousel_general_carousel_general_component__WEBPACK_IMPORTED_MODULE_9__["CarouselGeneralComponent"]], styles: [".details[_ngcontent-%COMP%] {\n    margin-top:5%;\n    color:white\n}\n.buttonwatchlist[_ngcontent-%COMP%]{\n    background: #0069ed;\n    padding: 1rem 2rem;\n    outline: none;\n    color:white;\n    border:none;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.btn-secondary[_ngcontent-%COMP%]{\n    background-color: #0d6efd;\n    border:none\n}\n@media screen and (max-width: 600px) {\n    youtube-player[_ngcontent-%COMP%]{\n        margin:0 auto;\n    }\n    .details[_ngcontent-%COMP%] {\n        margin-top:20%;\n    }\n    .carouselheader[_ngcontent-%COMP%]{\n        width:70%;\n        margin:0 auto;\n    }\n    .col-sm-5[_ngcontent-%COMP%]{\n        width:90% !important;\n        margin:0 auto;\n        margin-top:5%;\n    }\n    .col-sm-7[_ngcontent-%COMP%]{\n        width:90% !important;\n        margin:0 auto;\n    }\n    .descriptiondiv[_ngcontent-%COMP%]{\n        width:90% !important;\n        margin:0 auto;\n        text-align: justify;\n    }\n    .sharediv[_ngcontent-%COMP%]{\n        width:90% !important;\n        margin:0 auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbmRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYjtBQUNKO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxTQUFTO1FBQ1QsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLGFBQWE7UUFDYixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxvQkFBb0I7UUFDcEIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoiY29tbW9uZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbHMge1xuICAgIG1hcmdpbi10b3A6NSU7XG4gICAgY29sb3I6d2hpdGVcbn1cbi5idXR0b253YXRjaGxpc3R7XG4gICAgYmFja2dyb3VuZDogIzAwNjllZDtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ0bi1zZWNvbmRhcnl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkNmVmZDtcbiAgICBib3JkZXI6bm9uZVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIHlvdXR1YmUtcGxheWVye1xuICAgICAgICBtYXJnaW46MCBhdXRvO1xuICAgIH1cbiAgICAuZGV0YWlscyB7XG4gICAgICAgIG1hcmdpbi10b3A6MjAlO1xuICAgIH1cbiAgICAuY2Fyb3VzZWxoZWFkZXJ7XG4gICAgICAgIHdpZHRoOjcwJTtcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICB9XG4gICAgLmNvbC1zbS01e1xuICAgICAgICB3aWR0aDo5MCUgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICAgICAgbWFyZ2luLXRvcDo1JTtcbiAgICB9XG4gICAgLmNvbC1zbS03e1xuICAgICAgICB3aWR0aDo5MCUgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICB9XG4gICAgLmRlc2NyaXB0aW9uZGl2e1xuICAgICAgICB3aWR0aDo5MCUgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG4gICAgLnNoYXJlZGl2e1xuICAgICAgICB3aWR0aDo5MCUgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICB9XG59XG5cbiAiXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B5fK":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/homepage/carousel-trending-tv/carousel-trending-tv.component.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: CarouselTrendingTVService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselTrendingTVService", function() { return CarouselTrendingTVService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CarouselTrendingTVService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = '/trendingtv';
    }
    getPosts() {
        return this.httpClient.get(this.url);
    }
}
CarouselTrendingTVService.ɵfac = function CarouselTrendingTVService_Factory(t) { return new (t || CarouselTrendingTVService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CarouselTrendingTVService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CarouselTrendingTVService, factory: CarouselTrendingTVService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "CEoe":
/*!***********************************************************************************!*\
  !*** ./src/app/components/commondetails/castmodal/castmodal.component.service.ts ***!
  \***********************************************************************************/
/*! exports provided: CastDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastDetailsService", function() { return CastDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CastDetailsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/castdetails?personid=';
    }
    castDetails(personid) {
        return this.http
            .get(this.baseUrl + personid);
    }
}
CastDetailsService.ɵfac = function CastDetailsService_Factory(t) { return new (t || CastDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CastDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CastDetailsService, factory: CastDetailsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "EUwL":
/*!*****************************************************************!*\
  !*** ./src/app/components/mylists/mylists.component.service.ts ***!
  \*****************************************************************/
/*! exports provided: MylistsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistsService", function() { return MylistsService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class MylistsService {
    constructor(http) {
        this.http = http;
        this.baseUrl1 = '/moviedetails?movieid=';
        this.baseUrl2 = '/tvdetails?tvid=';
        this.listofdata = [];
    }
    MylistDetails(mylists) {
        this.listofdata = [];
        for (var i = 0; i < mylists.length; i++) {
            if (mylists[i]['media_type'] == 'movie') {
                this.listofdata.push(this.http.get(this.baseUrl1 + mylists[i]['id']));
            }
            else {
                this.listofdata.push(this.http.get(this.baseUrl2 + mylists[i]['id']));
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(this.listofdata);
    }
}
MylistsService.ɵfac = function MylistsService_Factory(t) { return new (t || MylistsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MylistsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MylistsService, factory: MylistsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "F//3":
/*!**************************************************************************************!*\
  !*** ./src/app/components/homepage/carousel-toprated/carousel-toprated.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CarouselTopratedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselTopratedComponent", function() { return CarouselTopratedComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _carousel_toprated_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel-toprated.component.service */ "zEat");
/* harmony import */ var _carousel_general_carousel_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../carousel-general/carousel-general.component */ "9MXf");





class CarouselTopratedComponent {
    constructor(service, bo) {
        this.service = service;
        this.bo = bo;
        this.carouselid = "carousel3";
        this.mediatype = "movie";
    }
    ngOnInit() {
        this.service.getPosts().subscribe(response => {
            this.results = response;
            this.bo.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset])
                .subscribe((bs) => {
                if (bs.matches) {
                    var mobileresults = new Array();
                    for (var i = 0; i < this.results.length; i++) {
                        for (var j = 0; j < this.results[i].length; j++) {
                            mobileresults.push([this.results[i][j]]);
                        }
                    }
                    this.results = mobileresults;
                    console.log('Viewport is Handset');
                }
                else {
                    console.log('Viewport is not Handset');
                }
            });
        });
    }
}
CarouselTopratedComponent.ɵfac = function CarouselTopratedComponent_Factory(t) { return new (t || CarouselTopratedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_carousel_toprated_component_service__WEBPACK_IMPORTED_MODULE_2__["CarouselTopratedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
CarouselTopratedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselTopratedComponent, selectors: [["app-carousel-toprated"]], decls: 4, vars: 3, consts: [[1, "mt-5"], [1, "carouselheader"], [3, "carid", "mediatype", "imagearray"]], template: function CarouselTopratedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Top Rated Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-carousel-general", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carid", ctx.carouselid)("mediatype", ctx.mediatype)("imagearray", ctx.results);
    } }, directives: [_carousel_general_carousel_general_component__WEBPACK_IMPORTED_MODULE_3__["CarouselGeneralComponent"]], styles: ["@media screen and (max-width: 600px) {\n    .carouselheader[_ngcontent-%COMP%]{\n        width:70%;\n        margin:0 auto;\n\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLXRvcHJhdGVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLFNBQVM7UUFDVCxhQUFhOztJQUVqQjtBQUNKIiwiZmlsZSI6ImNhcm91c2VsLXRvcHJhdGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5jYXJvdXNlbGhlYWRlcntcbiAgICAgICAgd2lkdGg6NzAlO1xuICAgICAgICBtYXJnaW46MCBhdXRvO1xuXG4gICAgfVxufSAiXX0= */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Powered by TMDB. Developed by Akshata Patangi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%]{\n    background-image: linear-gradient(to top, black,#010c20);\n    color: white;\n    height:50px;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    opacity: 0.7;\n    font-size: 14px;\n    padding-top: 15px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0lBQ0csd0RBQXdEO0lBQ3hELFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7RUFDbkIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLmZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjaywjMDEwYzIwKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OjUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG4gICJdfQ== */"] });


/***/ }),

/***/ "QvVo":
/*!***************************************************************************!*\
  !*** ./src/app/components/moviedetails/moviedetails.component.service.ts ***!
  \***************************************************************************/
/*! exports provided: MovieDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsService", function() { return MovieDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class MovieDetailsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/moviedetails?movieid=';
        this.baseUrl1 = '/moviecastcrew?movieid=';
        this.baseUrl2 = '/moviereviews?movieid=';
        this.baseUrl3 = '/moviesrecommend?movieid=';
        this.baseUrl4 = '/moviessimilar?movieid=';
    }
    MovieDetails(movieid) {
        return this.http
            .get(this.baseUrl + movieid);
    }
    MovieCastCrewDetails(movieid) {
        return this.http
            .get(this.baseUrl1 + movieid);
    }
    MovieReviews(movieid) {
        return this.http
            .get(this.baseUrl2 + movieid);
    }
    MovieRecommend(movieid) {
        return this.http
            .get(this.baseUrl3 + movieid);
    }
    MovieSimilar(movieid) {
        return this.http
            .get(this.baseUrl4 + movieid);
    }
}
MovieDetailsService.ɵfac = function MovieDetailsService_Factory(t) { return new (t || MovieDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MovieDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MovieDetailsService, factory: MovieDetailsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RGP0":
/*!********************************************************************!*\
  !*** ./src/app/components/homepage/carousel/carousel.component.ts ***!
  \********************************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _carousel_component_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.component.service */ "31cq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function (a1) { return ["/watch/movie/", a1]; };
function CarouselComponent_ngb_carousel_0_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, result_r2["id"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/original/" + result_r2["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r2["name"]);
} }
function CarouselComponent_ngb_carousel_0_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_ngb_carousel_0_1_ng_template_0_Template, 8, 5, "ng-template", 3);
} }
function CarouselComponent_ngb_carousel_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ngb_carousel_0_1_Template, 1, 0, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 2500);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.results);
} }
class CarouselComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.getPosts().subscribe(response => {
            this.results = response;
        });
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_carousel_component_service__WEBPACK_IMPORTED_MODULE_1__["CarouselService"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 1, vars: 1, consts: [["id", "myCarousel1", 3, "interval", 4, "ngIf"], ["id", "myCarousel1", 3, "interval"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "routerLink"], [1, "picsum-img-wrapper"], [1, "imagediv"], [1, "imageimg", 3, "src"], [1, "bottomtext"], [1, "title"], [1, "wrappertext"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_ngb_carousel_0_Template, 2, 2, "ngb-carousel", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.results != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["@media screen and (min-width: 600px) {\n#myCarousel1[_ngcontent-%COMP%]{\n  width:80%;\n  margin:0 auto;\n  max-height: 40vh;\n  margin-top:10%;\n}\n\n.picsum-img-wrapper[_ngcontent-%COMP%]{\n  position: relative;\n    color: white;\n}\n \n.imagediv[_ngcontent-%COMP%]{\n  z-index: -1;\n}\n\n.imagediv[_ngcontent-%COMP%]:hover   .imageimg[_ngcontent-%COMP%]{\n  transform: scale(1.1);\n}\n\n.imagediv[_ngcontent-%COMP%]:hover   .bottomtext[_ngcontent-%COMP%]{\n  opacity:1\n}\n\n.imageimg[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: 0.1s all ease-in-out;\n  max-height:40vh;\n  \n}\n\n.bottomtext[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom:0;\n  margin:0 auto;\n  left:0;\n  z-index:0;\n  font-size: 12px;\n  height: 56%;\n  width: 100%;\n  opacity: 0;\n  transition: 0.1s all ease-in-out;\n}\n\n.title[_ngcontent-%COMP%]{\n  height: 100%;\n  width: 100%;\n  background-image: linear-gradient(to top, black, black, rgba(0,0,0,0.5), rgba(0,0,0,0));\n}\n\n.wrappertext[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  padding-left:3%;\n  text-align: left;\n  font-size: 16px;\n\n}\n\n}\n\n\n@media screen and (max-width: 600px) {\n    .carousel-indicators {\n    display: none !important;\n  }\n\n  #myCarousel1[_ngcontent-%COMP%]{\n    width:80%;\n    margin:0 auto;\n    max-height: 40vh;\n    margin-top:20%;\n  }\n  \n  .picsum-img-wrapper[_ngcontent-%COMP%]{\n    position: relative;\n      color: white;\n  }\n   \n  .picsum-img-wrapper[_ngcontent-%COMP%]:hover   .imageimg[_ngcontent-%COMP%]{\n    transform: scale(1.1);\n  }\n  \n  .imageimg[_ngcontent-%COMP%]{\n    width: 100%;\n    transition: 0.1s all ease-in-out;\n    max-height:40vh;\n  }\n  \n  .bottomtext[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom:0;\n    margin:0 auto;\n    left:0;\n    font-size: 12px;\n    height: 56%;\n    width: 100%;\n    opacity: 1;\n    transition: 0.1s all ease-in-out;\n  }\n  \n  .title[_ngcontent-%COMP%]{\n    height: 100%;\n    width: 100%;\n    background-image: linear-gradient(to top, black, black, rgba(0,0,0,0.5), rgba(0,0,0,0));\n  }\n  \n  .wrappertext[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0px;\n    padding-left:3%;\n    text-align: left;\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixhQUFhO0VBQ2IsTUFBTTtFQUNOLFNBQVM7RUFDVCxlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1RkFBdUY7QUFDekY7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTs7QUFFakI7O0FBRUE7OztBQUdBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO01BQ2hCLFlBQVk7RUFDaEI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGFBQWE7SUFDYixNQUFNO0lBQ04sZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUZBQXVGO0VBQ3pGOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiNteUNhcm91c2VsMXtcbiAgd2lkdGg6ODAlO1xuICBtYXJnaW46MCBhdXRvO1xuICBtYXgtaGVpZ2h0OiA0MHZoO1xuICBtYXJnaW4tdG9wOjEwJTtcbn1cblxuLnBpY3N1bS1pbWctd3JhcHBlcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiBcbi5pbWFnZWRpdntcbiAgei1pbmRleDogLTE7XG59XG5cbi5pbWFnZWRpdjpob3ZlciAuaW1hZ2VpbWd7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmltYWdlZGl2OmhvdmVyIC5ib3R0b210ZXh0e1xuICBvcGFjaXR5OjFcbn1cblxuLmltYWdlaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zaXRpb246IDAuMXMgYWxsIGVhc2UtaW4tb3V0O1xuICBtYXgtaGVpZ2h0OjQwdmg7XG4gIFxufVxuXG4uYm90dG9tdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOjA7XG4gIG1hcmdpbjowIGF1dG87XG4gIGxlZnQ6MDtcbiAgei1pbmRleDowO1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogNTYlO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC4xcyBhbGwgZWFzZS1pbi1vdXQ7XG59XG5cbi50aXRsZXtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmxhY2ssIGJsYWNrLCByZ2JhKDAsMCwwLDAuNSksIHJnYmEoMCwwLDAsMCkpO1xufVxuXG4ud3JhcHBlcnRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBwYWRkaW5nLWxlZnQ6MyU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxufVxuXG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgOjpuZy1kZWVwIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjbXlDYXJvdXNlbDF7XG4gICAgd2lkdGg6ODAlO1xuICAgIG1hcmdpbjowIGF1dG87XG4gICAgbWF4LWhlaWdodDogNDB2aDtcbiAgICBtYXJnaW4tdG9wOjIwJTtcbiAgfVxuICBcbiAgLnBpY3N1bS1pbWctd3JhcHBlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgIFxuICAucGljc3VtLWltZy13cmFwcGVyOmhvdmVyIC5pbWFnZWltZ3tcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbiAgXG4gIC5pbWFnZWltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGFsbCBlYXNlLWluLW91dDtcbiAgICBtYXgtaGVpZ2h0OjQwdmg7XG4gIH1cbiAgXG4gIC5ib3R0b210ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOjA7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICBsZWZ0OjA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGhlaWdodDogNTYlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogMC4xcyBhbGwgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC50aXRsZXtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmxhY2ssIGJsYWNrLCByZ2JhKDAsMCwwLDAuNSksIHJnYmEoMCwwLDAsMCkpO1xuICB9XG4gIFxuICAud3JhcHBlcnRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6MyU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "RZmA":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _search_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.component.service */ "ssDW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function SearchComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngb-highlight", 4);
} if (rf & 2) {
    const r_r2 = ctx.result;
    const t_r3 = ctx.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", r_r2["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("result", r_r2["name"])("term", t_r3);
} }
class SearchComponent {
    constructor(searchService, router) {
        this.searchService = searchService;
        this.router = router;
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(800), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((term) => this.searchService.searchEntries(term)));
        this.formatter = (x) => x.name;
    }
    onSelect($event) {
        $(".navbar-collapse").collapse('hide');
        $event.preventDefault();
        this.model = null;
        var url = '/watch/' + $event.item.media_type + '/' + $event.item.id;
        this.router.navigateByUrl(url);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_search_component_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["ngbd-typeahead-template"]], decls: 3, vars: 4, consts: [["class", "pr-4"], ["resultTemplate", ""], ["id", "typeahead-template", "placeholder", "Search", "type", "text", 1, "formcontrol", 3, "ngbTypeahead", "ngModel", "resultTemplate", "inputFormatter", "ngModelChange", "selectItem"], [1, "mr-1", 2, "width", "50px", 3, "src"], [3, "result", "term"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SearchComponent_ng_template_0_Template, 2, 3, "ng-template", 0, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_2_listener($event) { return ctx.model = $event; })("selectItem", function SearchComponent_Template_input_selectItem_2_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbTypeahead", ctx.search)("ngModel", ctx.model)("resultTemplate", _r0)("inputFormatter", ctx.formatter);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbHighlight"]], styles: ["a[_ngcontent-%COMP%]{\n    color: white;\n    text-decoration: none; \n  }\n  .formcontrol[_ngcontent-%COMP%]{\n    outline: none;\n    border:none;\n    border-bottom: 1px solid white;\n    background: transparent;\n    background-color: none;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQixFQUFFLGlCQUFpQjtFQUMxQztFQUNBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAvKiBubyB1bmRlcmxpbmUgKi9cbiAgfVxuICAuZm9ybWNvbnRyb2x7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[2, "flex", "1 0 auto"], [1, "appfooter"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".navbar[_ngcontent-%COMP%]{\n    background-color: #010c20!important;\n}\n.appfooter[_ngcontent-%COMP%]{\n    margin-top:8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwYzIwIWltcG9ydGFudDtcbn1cbi5hcHBmb290ZXJ7XG4gICAgbWFyZ2luLXRvcDo4JTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_moviedetails_moviedetails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/moviedetails/moviedetails.component */ "tJs4");
/* harmony import */ var _components_tvdetails_tvdetails_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tvdetails/tvdetails.component */ "meM1");
/* harmony import */ var _components_mylists_mylists_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/mylists/mylists.component */ "oJe0");
/* harmony import */ var _components_commondetails_commondetails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/commondetails/commondetails.component */ "9uF1");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/search/search.component */ "RZmA");
/* harmony import */ var _components_homepage_carousel_popular_carousel_popular_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/homepage/carousel-popular/carousel-popular.component */ "/DKY");
/* harmony import */ var _components_homepage_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/homepage/carousel/carousel.component */ "RGP0");
/* harmony import */ var _components_carousel_general_carousel_general_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/carousel-general/carousel-general.component */ "9MXf");
/* harmony import */ var _components_homepage_carousel_toprated_carousel_toprated_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/homepage/carousel-toprated/carousel-toprated.component */ "F//3");
/* harmony import */ var _components_homepage_carousel_trending_carousel_trending_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/homepage/carousel-trending/carousel-trending.component */ "l4IG");
/* harmony import */ var _components_homepage_carousel_toprated_tv_carousel_toprated_tv_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/homepage/carousel-toprated-tv/carousel-toprated-tv.component */ "nv1g");
/* harmony import */ var _components_homepage_carousel_trending_tv_carousel_trending_tv_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/homepage/carousel-trending-tv/carousel-trending-tv.component */ "8C7h");
/* harmony import */ var _components_homepage_carousel_popular_tv_carousel_popular_tv_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/homepage/carousel-popular-tv/carousel-popular-tv.component */ "kxHL");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_commondetails_youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/commondetails/youtube-player/youtube-player.component */ "3Uuh");
/* harmony import */ var _components_commondetails_castandcrew_castandcrew_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/commondetails/castandcrew/castandcrew.component */ "2DIH");
/* harmony import */ var _components_commondetails_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/commondetails/reviews/reviews.component */ "/zwQ");
/* harmony import */ var _components_commondetails_castmodal_castmodal_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/commondetails/castmodal/castmodal.component */ "5QXa");
/* harmony import */ var _components_homepage_carousel_continue_carousel_continue_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/homepage/carousel-continue/carousel-continue.component */ "ZeYn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ "fXoL");






























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({ providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__["YouTubePlayerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
        _components_moviedetails_moviedetails_component__WEBPACK_IMPORTED_MODULE_8__["MoviedetailsComponent"],
        _components_tvdetails_tvdetails_component__WEBPACK_IMPORTED_MODULE_9__["TvdetailsComponent"],
        _components_mylists_mylists_component__WEBPACK_IMPORTED_MODULE_10__["MylistsComponent"],
        _components_commondetails_commondetails_component__WEBPACK_IMPORTED_MODULE_11__["CommondetailsComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
        _components_homepage_carousel_popular_carousel_popular_component__WEBPACK_IMPORTED_MODULE_14__["CarouselPopularComponent"],
        _components_homepage_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_15__["CarouselComponent"],
        _components_carousel_general_carousel_general_component__WEBPACK_IMPORTED_MODULE_16__["CarouselGeneralComponent"],
        _components_homepage_carousel_toprated_carousel_toprated_component__WEBPACK_IMPORTED_MODULE_17__["CarouselTopratedComponent"],
        _components_homepage_carousel_trending_carousel_trending_component__WEBPACK_IMPORTED_MODULE_18__["CarouselTrendingComponent"],
        _components_homepage_carousel_toprated_tv_carousel_toprated_tv_component__WEBPACK_IMPORTED_MODULE_19__["CarouselTopratedTvComponent"],
        _components_homepage_carousel_trending_tv_carousel_trending_tv_component__WEBPACK_IMPORTED_MODULE_20__["CarouselTrendingTvComponent"],
        _components_homepage_carousel_popular_tv_carousel_popular_tv_component__WEBPACK_IMPORTED_MODULE_21__["CarouselPopularTvComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
        _components_commondetails_youtube_player_youtube_player_component__WEBPACK_IMPORTED_MODULE_23__["YoutubePlayerComponent"],
        _components_commondetails_castandcrew_castandcrew_component__WEBPACK_IMPORTED_MODULE_24__["CastandcrewComponent"],
        _components_commondetails_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_25__["ReviewsComponent"],
        _components_commondetails_castmodal_castmodal_component__WEBPACK_IMPORTED_MODULE_26__["CastmodalComponent"],
        _components_homepage_carousel_continue_carousel_continue_component__WEBPACK_IMPORTED_MODULE_27__["CarouselContinueComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__["YouTubePlayerModule"]] }); })();


/***/ }),

/***/ "ZeYn":
/*!**************************************************************************************!*\
  !*** ./src/app/components/homepage/carousel-continue/carousel-continue.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CarouselContinueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselContinueComponent", function() { return CarouselContinueComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _carousel_continue_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel-continue.component.service */ "khcJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function CarouselContinueComponent_div_0_ol_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "li");
} if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](i_r5 == 0 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-target", "#" + ctx_r3.carouselid)("data-slide-to", i_r5);
} }
function CarouselContinueComponent_div_0_ol_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ol", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselContinueComponent_div_0_ol_4_li_1_Template, 1, 5, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.results);
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
function CarouselContinueComponent_div_0_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, "/watch/" + item_r9["media_type"], item_r9["id"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r9["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9["name"]);
} }
function CarouselContinueComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CarouselContinueComponent_div_0_div_6_div_2_Template, 7, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("carousel-item ", i_r7 == 0 ? "active" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", image_r6);
} }
function CarouselContinueComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CarouselContinueComponent_div_0_ol_4_Template, 2, 1, "ol", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CarouselContinueComponent_div_0_div_6_Template, 3, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx_r0.carouselid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.results);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "#", ctx_r0.carouselid, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "#", ctx_r0.carouselid, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class CarouselContinueComponent {
    constructor(service, bo) {
        this.service = service;
        this.bo = bo;
        this.carouselid = "carouselcontinue";
        this.mobile = false;
    }
    ngOnInit() {
        this.service.MylistDetails().subscribe(response => {
            this.tempresults = response;
            var results = new Array();
            var arr = new Array();
            var mobileresults = new Array();
            for (var i = 0; i < this.tempresults.length; i++) {
                var data = {};
                data['id'] = this.tempresults[i]['id'];
                data['name'] = this.tempresults[i]['name'];
                data['media_type'] = this.tempresults[i]['media_type'];
                data['poster_path'] = this.tempresults[i]['poster_path'];
                arr.push(data);
                mobileresults.push([data]);
                if (arr.length == 6) {
                    results.push(arr);
                    arr = new Array();
                }
            }
            if (arr.length > 0)
                results.push(arr);
            this.results = results;
            this.mobileresults = mobileresults;
            // console.log(this.results)
            this.bo.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset])
                .subscribe((bs) => {
                if (bs.matches) {
                    this.mobile = true;
                    this.results = mobileresults;
                    console.log('Viewport is Handset');
                }
            });
        });
    }
}
CarouselContinueComponent.ɵfac = function CarouselContinueComponent_Factory(t) { return new (t || CarouselContinueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_carousel_continue_component_service__WEBPACK_IMPORTED_MODULE_2__["CarouselContinueService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
CarouselContinueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselContinueComponent, selectors: [["app-carousel-continue"]], decls: 1, vars: 1, consts: [["class", "mt-5", 4, "ngIf"], [1, "mt-5"], [1, "carouselheader"], ["data-ride", "carousel", "data-interval", "false", 1, "carousel", "slide", 3, "id"], ["class", "carousel-indicators", 4, "ngIf"], ["role", "listbox", 1, "carousel-inner"], [3, "class", 4, "ngFor", "ngForOf"], ["role", "button", "data-slide", "prev", 1, "carousel-control-prev", 3, "href"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["role", "button", "data-slide", "next", 1, "carousel-control-next", 3, "href"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "carousel-indicators"], [1, "row", "card-body", "relative"], ["class", "col-md-2", 4, "ngFor", "ngForOf"], [1, "col-md-2"], [1, "card", "absolute"], [3, "routerLink"], ["alt", "Card image cap", 1, "card-img-top", "img-fluid", 3, "src"], [1, "carousel-caption", "relative"], [1, "ml-2", 2, "position", "absolute", "bottom", "0"]], template: function CarouselContinueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselContinueComponent_div_0_Template, 15, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.results);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["@media screen and (min-width: 600px) {\n  .carousel-control-next[_ngcontent-%COMP%] {\n      width:3%;\n      right:-4%\n      \n    }\n    .carousel-control-prev[_ngcontent-%COMP%] {\n      width:3%;\n      left: -4%;\n    }\n    .carousel[_ngcontent-%COMP%]{\n      width:95%;\n      margin:0 auto;\n    }\n    \n    .carousel-indicators[_ngcontent-%COMP%] {\n      bottom: -30px;\n  }\n  .carousel-caption[_ngcontent-%COMP%]{\n    display: none; \n    width:100%;\n    height:30%;\n    background-image: linear-gradient(to top,black,black,black,black,black, black,black,rgba(0,0,0,0.5), rgba(255, 255, 255, 0));\n    text-align:left;\n    left: 0;\n    bottom:0;\n    right:0;\n    font-size: 14px;\n  }\n  [_ngcontent-%COMP%]:focus {\n    outline: none !important;\n    box-shadow: none !important;\n  }\n  .card[_ngcontent-%COMP%]{\n    border:none;\n    outline:none;\n    margin: 10px 5px 5px 5px;\n  }\n  .card[_ngcontent-%COMP%]:hover{\n    transform: scale(1.1);\n  }\n  \n  .card[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%]{\n    display: block;\n  }\n  \n  }\n  \n  @media screen and (max-width: 600px) {\n    .carousel[_ngcontent-%COMP%]{\n      width:70%;\n      margin:0 auto;\n    }\n    .carousel-control-next[_ngcontent-%COMP%] {\n      width:15%;\n      right:-8%\n      \n    }\n    .carousel-control-prev[_ngcontent-%COMP%] {\n      width:15%;\n      left: -8%;\n    }\n  \n    .carousel-caption[_ngcontent-%COMP%]{\n      display: block; \n      width:100%;\n      height:30%;\n      background-image: linear-gradient(to top,black,black,black,black,black, black,black,rgba(0,0,0,0.5), rgba(255, 255, 255, 0));\n      text-align:left;\n      left: 0;\n      bottom:0;\n      right:0;\n      font-size: 14px;\n    }\n    [_ngcontent-%COMP%]:focus {\n      outline: none !important;\n      box-shadow: none !important;\n    }\n    .card[_ngcontent-%COMP%]{\n      border:none;\n      outline:none;\n      margin: 10px 5px 5px 5px;\n    }\n  \n    .card[_ngcontent-%COMP%]:hover{\n      transform: scale(1.1);\n    }\n\n    .carouselheader[_ngcontent-%COMP%]{\n      width:70%;\n      margin:0 auto;\n\n  }\n  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLWNvbnRpbnVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0U7TUFDSSxRQUFRO01BQ1I7O0lBRUY7SUFDQTtNQUNFLFFBQVE7TUFDUixTQUFTO0lBQ1g7SUFDQTtNQUNFLFNBQVM7TUFDVCxhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxhQUFhO0VBQ2pCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsVUFBVTtJQUNWLFVBQVU7SUFDViw0SEFBNEg7SUFDNUgsZUFBZTtJQUNmLE9BQU87SUFDUCxRQUFRO0lBQ1IsT0FBTztJQUNQLGVBQWU7RUFDakI7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QiwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBOztFQUVBO0lBQ0U7TUFDRSxTQUFTO01BQ1QsYUFBYTtJQUNmO0lBQ0E7TUFDRSxTQUFTO01BQ1Q7O0lBRUY7SUFDQTtNQUNFLFNBQVM7TUFDVCxTQUFTO0lBQ1g7O0lBRUE7TUFDRSxjQUFjO01BQ2QsVUFBVTtNQUNWLFVBQVU7TUFDViw0SEFBNEg7TUFDNUgsZUFBZTtNQUNmLE9BQU87TUFDUCxRQUFRO01BQ1IsT0FBTztNQUNQLGVBQWU7SUFDakI7SUFDQTtNQUNFLHdCQUF3QjtNQUN4QiwyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1osd0JBQXdCO0lBQzFCOztJQUVBO01BQ0UscUJBQXFCO0lBQ3ZCOztJQUVBO01BQ0UsU0FBUztNQUNULGFBQWE7O0VBRWpCOztFQUVBIiwiZmlsZSI6ImNhcm91c2VsLWNvbnRpbnVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICAgICAgd2lkdGg6MyU7XG4gICAgICByaWdodDotNCVcbiAgICAgIFxuICAgIH1cbiAgICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgICAgIHdpZHRoOjMlO1xuICAgICAgbGVmdDogLTQlO1xuICAgIH1cbiAgICAuY2Fyb3VzZWx7XG4gICAgICB3aWR0aDo5NSU7XG4gICAgICBtYXJnaW46MCBhdXRvO1xuICAgIH1cbiAgICBcbiAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgICBib3R0b206IC0zMHB4O1xuICB9XG4gIC5jYXJvdXNlbC1jYXB0aW9ue1xuICAgIGRpc3BsYXk6IG5vbmU7IFxuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjMwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLGJsYWNrLGJsYWNrLGJsYWNrLGJsYWNrLGJsYWNrLCBibGFjayxibGFjayxyZ2JhKDAsMCwwLDAuNSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTowO1xuICAgIHJpZ2h0OjA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuY2FyZHtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBvdXRsaW5lOm5vbmU7XG4gICAgbWFyZ2luOiAxMHB4IDVweCA1cHggNXB4O1xuICB9XG4gIC5jYXJkOmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgfVxuICBcbiAgLmNhcmQ6aG92ZXIgLmNhcm91c2VsLWNhcHRpb257XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIH1cbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmNhcm91c2Vse1xuICAgICAgd2lkdGg6NzAlO1xuICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICB9XG4gICAgLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gICAgICB3aWR0aDoxNSU7XG4gICAgICByaWdodDotOCVcbiAgICAgIFxuICAgIH1cbiAgICAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgICAgIHdpZHRoOjE1JTtcbiAgICAgIGxlZnQ6IC04JTtcbiAgICB9XG4gIFxuICAgIC5jYXJvdXNlbC1jYXB0aW9ue1xuICAgICAgZGlzcGxheTogYmxvY2s7IFxuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIGhlaWdodDozMCU7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLGJsYWNrLGJsYWNrLGJsYWNrLGJsYWNrLGJsYWNrLCBibGFjayxibGFjayxyZ2JhKDAsMCwwLDAuNSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xuICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJvdHRvbTowO1xuICAgICAgcmlnaHQ6MDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNhcmR7XG4gICAgICBib3JkZXI6bm9uZTtcbiAgICAgIG91dGxpbmU6bm9uZTtcbiAgICAgIG1hcmdpbjogMTBweCA1cHggNXB4IDVweDtcbiAgICB9XG4gIFxuICAgIC5jYXJkOmhvdmVye1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIH1cblxuICAgIC5jYXJvdXNlbGhlYWRlcntcbiAgICAgIHdpZHRoOjcwJTtcbiAgICAgIG1hcmdpbjowIGF1dG87XG5cbiAgfVxuICBcbiAgfVxuICBcbiAgIl19 */"] });


/***/ }),

/***/ "eSP3":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/homepage/carousel-popular-tv/carousel-popular-tv.component.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: CarouselPopularTVService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselPopularTVService", function() { return CarouselPopularTVService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CarouselPopularTVService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = '/populartv';
    }
    getPosts() {
        return this.httpClient.get(this.url);
    }
}
CarouselPopularTVService.ɵfac = function CarouselPopularTVService_Factory(t) { return new (t || CarouselPopularTVService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CarouselPopularTVService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CarouselPopularTVService, factory: CarouselPopularTVService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search/search.component */ "RZmA");




const _c0 = function () { return ["active"]; };
const _c1 = function () { return { exact: true }; };
class NavbarComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 14, vars: 8, consts: [[1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-dark", "primary-color"], ["href", "/", 1, "navbar-brand", "pl-5"], ["type", "button", "data-toggle", "collapse", "data-target", "#basicExampleNav", "aria-controls", "basicExampleNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "basicExampleNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", 3, "routerLinkActive", "routerLinkActiveOptions"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/mylist", 1, "nav-link"], [1, "pr-5"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ngbd-typeahead-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]], styles: [".navbar[_ngcontent-%COMP%] {\n    background-color: #010c20 !important;\n}\n.nav-item[_ngcontent-%COMP%]{\n    text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDEwYzIwICFpbXBvcnRhbnQ7XG59XG4ubmF2LWl0ZW17XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */"] });


/***/ }),

/***/ "kHmC":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel/carousel.component */ "RGP0");
/* harmony import */ var _carousel_continue_carousel_continue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel-continue/carousel-continue.component */ "ZeYn");
/* harmony import */ var _carousel_popular_carousel_popular_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel-popular/carousel-popular.component */ "/DKY");
/* harmony import */ var _carousel_toprated_carousel_toprated_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel-toprated/carousel-toprated.component */ "F//3");
/* harmony import */ var _carousel_trending_carousel_trending_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carousel-trending/carousel-trending.component */ "l4IG");
/* harmony import */ var _carousel_popular_tv_carousel_popular_tv_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carousel-popular-tv/carousel-popular-tv.component */ "kxHL");
/* harmony import */ var _carousel_toprated_tv_carousel_toprated_tv_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carousel-toprated-tv/carousel-toprated-tv.component */ "nv1g");
/* harmony import */ var _carousel_trending_tv_carousel_trending_tv_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carousel-trending-tv/carousel-trending-tv.component */ "8C7h");









class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 9, vars: 0, consts: [[1, "container", "ng-cloak"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-carousel-continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-carousel-popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-carousel-toprated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-carousel-trending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-carousel-popular-tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-carousel-toprated-tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-carousel-trending-tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _carousel_continue_carousel_continue_component__WEBPACK_IMPORTED_MODULE_2__["CarouselContinueComponent"], _carousel_popular_carousel_popular_component__WEBPACK_IMPORTED_MODULE_3__["CarouselPopularComponent"], _carousel_toprated_carousel_toprated_component__WEBPACK_IMPORTED_MODULE_4__["CarouselTopratedComponent"], _carousel_trending_carousel_trending_component__WEBPACK_IMPORTED_MODULE_5__["CarouselTrendingComponent"], _carousel_popular_tv_carousel_popular_tv_component__WEBPACK_IMPORTED_MODULE_6__["CarouselPopularTvComponent"], _carousel_toprated_tv_carousel_toprated_tv_component__WEBPACK_IMPORTED_MODULE_7__["CarouselTopratedTvComponent"], _carousel_trending_tv_carousel_trending_tv_component__WEBPACK_IMPORTED_MODULE_8__["CarouselTrendingTvComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "khcJ":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/homepage/carousel-continue/carousel-continue.component.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: CarouselContinueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselContinueService", function() { return CarouselContinueService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CarouselContinueService {
    constructor(http) {
        this.http = http;
        this.listofdata = [];
        this.baseUrl1 = '/moviedetails?movieid=';
        this.baseUrl2 = '/tvdetails?tvid=';
    }
    MylistDetails() {
        var mylists = JSON.parse(localStorage.getItem('continuewatch'));
        this.listofdata = [];
        for (var i = 0; i < mylists.length; i++) {
            if (mylists[i]['media_type'] == 'movie') {
                this.listofdata.push(this.http.get(this.baseUrl1 + mylists[i]['id']));
            }
            else {
                this.listofdata.push(this.http.get(this.baseUrl2 + mylists[i]['id']));
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(this.listofdata);
    }
}
CarouselContinueService.ɵfac = function CarouselContinueService_Factory(t) { return new (t || CarouselContinueService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CarouselContinueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CarouselContinueService, factory: CarouselContinueService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kxHL":
/*!******************************************************************************************!*\
  !*** ./src/app/components/homepage/carousel-popular-tv/carousel-popular-tv.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CarouselPopularTvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselPopularTvComponent", function() { return CarouselPopularTvComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _carousel_popular_tv_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel-popular-tv.component.service */ "eSP3");
/* harmony import */ var _carousel_general_carousel_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../carousel-general/carousel-general.component */ "9MXf");





class CarouselPopularTvComponent {
    constructor(service, bo) {
        this.service = service;
        this.bo = bo;
        this.carouselid = "carousel5";
        this.mediatype = "tv";
    }
    ngOnInit() {
        this.service.getPosts().subscribe(response => {
            this.results = response;
            this.bo.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset])
                .subscribe((bs) => {
                if (bs.matches) {
                    var mobileresults = new Array();
                    for (var i = 0; i < this.results.length; i++) {
                        for (var j = 0; j < this.results[i].length; j++) {
                            mobileresults.push([this.results[i][j]]);
                        }
                    }
                    this.results = mobileresults;
                    console.log('Viewport is Handset');
                }
                else {
                    console.log('Viewport is not Handset');
                }
            });
        });
    }
}
CarouselPopularTvComponent.ɵfac = function CarouselPopularTvComponent_Factory(t) { return new (t || CarouselPopularTvComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_carousel_popular_tv_component_service__WEBPACK_IMPORTED_MODULE_2__["CarouselPopularTVService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
CarouselPopularTvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselPopularTvComponent, selectors: [["app-carousel-popular-tv"]], decls: 4, vars: 3, consts: [[1, "mt-5"], [1, "carouselheader"], [3, "carid", "mediatype", "imagearray"]], template: function CarouselPopularTvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Popular TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-carousel-general", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carid", ctx.carouselid)("mediatype", ctx.mediatype)("imagearray", ctx.results);
    } }, directives: [_carousel_general_carousel_general_component__WEBPACK_IMPORTED_MODULE_3__["CarouselGeneralComponent"]], styles: ["@media screen and (max-width: 600px) {\n    .carouselheader[_ngcontent-%COMP%]{\n        width:70%;\n        margin:0 auto;\n\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLXBvcHVsYXItdHYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksU0FBUztRQUNULGFBQWE7O0lBRWpCO0FBQ0oiLCJmaWxlIjoiY2Fyb3VzZWwtcG9wdWxhci10di5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY2Fyb3VzZWxoZWFkZXJ7XG4gICAgICAgIHdpZHRoOjcwJTtcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcblxuICAgIH1cbn0gIl19 */"] });


/***/ }),

/***/ "l4IG":
/*!**************************************************************************************!*\
  !*** ./src/app/components/homepage/carousel-trending/carousel-trending.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CarouselTrendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselTrendingComponent", function() { return CarouselTrendingComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _carousel_trending_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel-trending.component.service */ "7Hto");
/* harmony import */ var _carousel_general_carousel_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../carousel-general/carousel-general.component */ "9MXf");





class CarouselTrendingComponent {
    constructor(service, bo) {
        this.service = service;
        this.bo = bo;
        this.carouselid = "carousel4";
        this.mediatype = "movie";
    }
    ngOnInit() {
        this.service.getPosts().subscribe(response => {
            this.results = response;
            this.bo.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset])
                .subscribe((bs) => {
                if (bs.matches) {
                    var mobileresults = new Array();
                    for (var i = 0; i < this.results.length; i++) {
                        for (var j = 0; j < this.results[i].length; j++) {
                            mobileresults.push([this.results[i][j]]);
                        }
                    }
                    this.results = mobileresults;
                    console.log('Viewport is Handset');
                }
                else {
                    console.log('Viewport is not Handset');
                }
            });
        });
    }
}
CarouselTrendingComponent.ɵfac = function CarouselTrendingComponent_Factory(t) { return new (t || CarouselTrendingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_carousel_trending_component_service__WEBPACK_IMPORTED_MODULE_2__["CarouselTrendingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
CarouselTrendingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselTrendingComponent, selectors: [["app-carousel-trending"]], decls: 4, vars: 3, consts: [[1, "mt-5"], [1, "carouselheader"], [3, "carid", "mediatype", "imagearray"]], template: function CarouselTrendingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Trending Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-carousel-general", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carid", ctx.carouselid)("mediatype", ctx.mediatype)("imagearray", ctx.results);
    } }, directives: [_carousel_general_carousel_general_component__WEBPACK_IMPORTED_MODULE_3__["CarouselGeneralComponent"]], styles: ["@media screen and (max-width: 600px) {\n    .carouselheader[_ngcontent-%COMP%]{\n        width:70%;\n        margin:0 auto;\n\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLXRyZW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLFNBQVM7UUFDVCxhQUFhOztJQUVqQjtBQUNKIiwiZmlsZSI6ImNhcm91c2VsLXRyZW5kaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5jYXJvdXNlbGhlYWRlcntcbiAgICAgICAgd2lkdGg6NzAlO1xuICAgICAgICBtYXJnaW46MCBhdXRvO1xuXG4gICAgfVxufSAiXX0= */"] });


/***/ }),

/***/ "meM1":
/*!*************************************************************!*\
  !*** ./src/app/components/tvdetails/tvdetails.component.ts ***!
  \*************************************************************/
/*! exports provided: TvdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvdetailsComponent", function() { return TvdetailsComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tvdetails_component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tvdetails.component.service */ "rQ84");
/* harmony import */ var _commondetails_commondetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commondetails/commondetails.component */ "9uF1");






class TvdetailsComponent {
    constructor(route, service, bo) {
        this.route = route;
        this.service = service;
        this.bo = bo;
        this.continuelisttemp = JSON.parse(localStorage.getItem('continuewatch'));
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.service.TVDetails(this.id).subscribe(response => {
            this.results = response;
        });
        this.service.TVCastCrewDetails(this.id).subscribe(response => {
            this.castcrew = response;
            console.log(this.castcrew);
        });
        this.service.TVReviews(this.id).subscribe(response => {
            this.reviews = response;
        });
        this.service.TVRecommend(this.id).subscribe(response => {
            this.recommend = response;
            this.bo.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset])
                .subscribe((bs) => {
                if (bs.matches) {
                    var mobileresults = new Array();
                    for (var i = 0; i < this.recommend.length; i++) {
                        for (var j = 0; j < this.recommend[i].length; j++) {
                            mobileresults.push([this.recommend[i][j]]);
                        }
                    }
                    this.recommend = mobileresults;
                }
            });
        });
        this.service.TVSimilar(this.id).subscribe(response => {
            this.similar = response;
            this.bo.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset])
                .subscribe((bs) => {
                if (bs.matches) {
                    var mobileresults = new Array();
                    for (var i = 0; i < this.similar.length; i++) {
                        for (var j = 0; j < this.similar[i].length; j++) {
                            mobileresults.push([this.similar[i][j]]);
                        }
                    }
                    this.similar = mobileresults;
                }
            });
        });
        for (var i = 0; i < this.continuelisttemp.length; i++) {
            if (this.continuelisttemp[i]['id'] == this.id && this.continuelisttemp[i]['media_type'] == 'tv') {
                this.continuelisttemp.splice(i, 1);
                break;
            }
        }
        if (this.continuelisttemp.length == 24) {
            this.continuelisttemp.pop();
        }
        this.continuelisttemp.unshift({ 'id': this.id, 'media_type': 'tv' });
        localStorage.setItem('continuewatch', JSON.stringify(this.continuelisttemp));
        console.log(JSON.parse(localStorage.getItem('continuewatch')));
    }
}
TvdetailsComponent.ɵfac = function TvdetailsComponent_Factory(t) { return new (t || TvdetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tvdetails_component_service__WEBPACK_IMPORTED_MODULE_3__["TVDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
TvdetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TvdetailsComponent, selectors: [["app-tvdetails"]], decls: 1, vars: 7, consts: [[3, "details", "castcrew", "reviews", "similar", "recommend", "mediatype", "carouselid"]], template: function TvdetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-commondetails", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("details", ctx.results)("castcrew", ctx.castcrew)("reviews", ctx.reviews)("similar", ctx.similar)("recommend", ctx.recommend)("mediatype", "tv")("carouselid", "tvdetail");
    } }, directives: [_commondetails_commondetails_component__WEBPACK_IMPORTED_MODULE_4__["CommondetailsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0dmRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "nv1g":
/*!********************************************************************************************!*\
  !*** ./src/app/components/homepage/carousel-toprated-tv/carousel-toprated-tv.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CarouselTopratedTvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselTopratedTvComponent", function() { return CarouselTopratedTvComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _carousel_toprated_tv_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel-toprated-tv.component.service */ "yK87");
/* harmony import */ var _carousel_general_carousel_general_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../carousel-general/carousel-general.component */ "9MXf");





class CarouselTopratedTvComponent {
    constructor(service, bo) {
        this.service = service;
        this.bo = bo;
        this.carouselid = "carousel6";
        this.mediatype = "tv";
    }
    ngOnInit() {
        this.service.getPosts().subscribe(response => {
            this.results = response;
            this.bo.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset])
                .subscribe((bs) => {
                if (bs.matches) {
                    var mobileresults = new Array();
                    for (var i = 0; i < this.results.length; i++) {
                        for (var j = 0; j < this.results[i].length; j++) {
                            mobileresults.push([this.results[i][j]]);
                        }
                    }
                    this.results = mobileresults;
                    console.log('Viewport is Handset');
                }
                else {
                    console.log('Viewport is not Handset');
                }
            });
        });
    }
}
CarouselTopratedTvComponent.ɵfac = function CarouselTopratedTvComponent_Factory(t) { return new (t || CarouselTopratedTvComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_carousel_toprated_tv_component_service__WEBPACK_IMPORTED_MODULE_2__["CarouselTopratedTVService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
CarouselTopratedTvComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselTopratedTvComponent, selectors: [["app-carousel-toprated-tv"]], decls: 4, vars: 3, consts: [[1, "mt-5"], [1, "carouselheader"], [3, "carid", "mediatype", "imagearray"]], template: function CarouselTopratedTvComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Top Rated TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-carousel-general", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("carid", ctx.carouselid)("mediatype", ctx.mediatype)("imagearray", ctx.results);
    } }, directives: [_carousel_general_carousel_general_component__WEBPACK_IMPORTED_MODULE_3__["CarouselGeneralComponent"]], styles: ["@media screen and (max-width: 600px) {\n    .carouselheader[_ngcontent-%COMP%]{\n        width:70%;\n        margin:0 auto;\n\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLXRvcHJhdGVkLXR2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLFNBQVM7UUFDVCxhQUFhOztJQUVqQjtBQUNKIiwiZmlsZSI6ImNhcm91c2VsLXRvcHJhdGVkLXR2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5jYXJvdXNlbGhlYWRlcntcbiAgICAgICAgd2lkdGg6NzAlO1xuICAgICAgICBtYXJnaW46MCBhdXRvO1xuXG4gICAgfVxufSAiXX0= */"] });


/***/ }),

/***/ "oJe0":
/*!*********************************************************!*\
  !*** ./src/app/components/mylists/mylists.component.ts ***!
  \*********************************************************/
/*! exports provided: MylistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistsComponent", function() { return MylistsComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _mylists_component_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mylists.component.service */ "EUwL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a0, a1) { return [a0, a1]; };
function MylistsComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r3.colclass);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c0, "/watch/" + item_r4["media_type"], item_r4["id"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r4["poster_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4["name"]);
} }
function MylistsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "My Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MylistsComponent_div_1_div_4_Template, 7, 8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.details);
} }
function MylistsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No items found in Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class MylistsComponent {
    constructor(service, router, bo) {
        this.service = service;
        this.router = router;
        this.bo = bo;
        this.colclass = 'col-md-2';
    }
    ngOnInit() {
        var mylists = JSON.parse(localStorage.getItem('watchlist'));
        this.service.MylistDetails(mylists).subscribe(response => this.details = response);
        this.bo.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset])
            .subscribe((bs) => {
            if (bs.matches) {
                this.colclass = 'col-sm-2';
            }
        });
    }
}
MylistsComponent.ɵfac = function MylistsComponent_Factory(t) { return new (t || MylistsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_mylists_component_service__WEBPACK_IMPORTED_MODULE_2__["MylistsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
MylistsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MylistsComponent, selectors: [["app-mylists"]], decls: 4, vars: 2, consts: [[1, "container"], ["style", "margin-top:100px;color:white", 4, "ngIf", "ngIfElse"], ["class", "container"], ["elseblock", ""], [2, "margin-top", "100px", "color", "white"], [1, "headermylists"], [1, "row", "card-group", "relative"], [3, "class", 4, "ngFor", "ngForOf"], [1, "card", "absolute"], [3, "routerLink"], ["alt", "Card image cap", 1, "card-img-top", "img-fluid", 3, "src"], [1, "carousel-caption", "relative"], [1, "ml-2", 2, "position", "absolute", "bottom", "0"], [2, "margin-top", "20%", "color", "white", "text-align", "center"]], template: function MylistsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MylistsComponent_div_1_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MylistsComponent_ng_template_2_Template, 2, 0, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.details)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".img[_ngcontent-%COMP%]{\n    outline: none;\n}\n.card[_ngcontent-%COMP%]{\n  border:none;\n  outline:none;\n  margin: 10px 5px 5px 5px;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.carousel-caption[_ngcontent-%COMP%]{\n  display: none; \n  width:100%;\n  height:30%;\n  background-image: linear-gradient(to top,black,black,black,black, black,black,rgba(0,0,0,0.5), rgba(255, 255, 255, 0));\n  text-align:left;\n  left: 0;\n  bottom:0;\n  right:0;\n  font-size: 14px;\n}\n.card[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%]{\n  display: block;\n}\n@media screen and (max-width: 600px) {\n  .card[_ngcontent-%COMP%]{\n    width:60% !important;\n    margin:0 auto;\n    margin-bottom: 10%;\n  }\n  .carousel-caption[_ngcontent-%COMP%]{\n    display: block; \n    width:100%;\n    height:30%;\n    background-image: linear-gradient(to top,black,black,black,black, black,black,rgba(0,0,0,0.5), rgba(255, 255, 255, 0));\n    text-align:left;\n    left: 0;\n    bottom:0;\n    right:0;\n    font-size: 14px;\n  }\n  .headermylists[_ngcontent-%COMP%]{\n    width:60% !important;\n    margin:0 auto;\n    margin-bottom: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15bGlzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsVUFBVTtFQUNWLHNIQUFzSDtFQUN0SCxlQUFlO0VBQ2YsT0FBTztFQUNQLFFBQVE7RUFDUixPQUFPO0VBQ1AsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsY0FBYztJQUNkLFVBQVU7SUFDVixVQUFVO0lBQ1Ysc0hBQXNIO0lBQ3RILGVBQWU7SUFDZixPQUFPO0lBQ1AsUUFBUTtJQUNSLE9BQU87SUFDUCxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6Im15bGlzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWd7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi5jYXJke1xuICBib3JkZXI6bm9uZTtcbiAgb3V0bGluZTpub25lO1xuICBtYXJnaW46IDEwcHggNXB4IDVweCA1cHg7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLmNhcm91c2VsLWNhcHRpb257XG4gIGRpc3BsYXk6IG5vbmU7IFxuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MzAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLGJsYWNrLGJsYWNrLGJsYWNrLGJsYWNrLCBibGFjayxibGFjayxyZ2JhKDAsMCwwLDAuNSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xuICB0ZXh0LWFsaWduOmxlZnQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTowO1xuICByaWdodDowO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jYXJkOmhvdmVyIC5jYXJvdXNlbC1jYXB0aW9ue1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNhcmR7XG4gICAgd2lkdGg6NjAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gIH1cbiAgLmNhcm91c2VsLWNhcHRpb257XG4gICAgZGlzcGxheTogYmxvY2s7IFxuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjMwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLGJsYWNrLGJsYWNrLGJsYWNrLGJsYWNrLCBibGFjayxibGFjayxyZ2JhKDAsMCwwLDAuNSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpO1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTowO1xuICAgIHJpZ2h0OjA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5oZWFkZXJteWxpc3Rze1xuICAgIHdpZHRoOjYwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjowIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICB9XG59Il19 */"] });


/***/ }),

/***/ "rQ84":
/*!*********************************************************************!*\
  !*** ./src/app/components/tvdetails/tvdetails.component.service.ts ***!
  \*********************************************************************/
/*! exports provided: TVDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TVDetailsService", function() { return TVDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class TVDetailsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/tvdetails?tvid=';
        this.baseUrl1 = '/tvcastcrew?tvid=';
        this.baseUrl2 = '/tvreviews?tvid=';
        this.baseUrl3 = '/tvrecommend?tvid=';
        this.baseUrl4 = '/tvsimilar?tvid=';
    }
    TVDetails(movieid) {
        return this.http
            .get(this.baseUrl + movieid);
    }
    TVCastCrewDetails(movieid) {
        return this.http
            .get(this.baseUrl1 + movieid);
    }
    TVReviews(movieid) {
        return this.http
            .get(this.baseUrl2 + movieid);
    }
    TVRecommend(movieid) {
        return this.http
            .get(this.baseUrl3 + movieid);
    }
    TVSimilar(movieid) {
        return this.http
            .get(this.baseUrl4 + movieid);
    }
}
TVDetailsService.ɵfac = function TVDetailsService_Factory(t) { return new (t || TVDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TVDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TVDetailsService, factory: TVDetailsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ssDW":
/*!***************************************************************!*\
  !*** ./src/app/components/search/search.component.service.ts ***!
  \***************************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class SearchService {
    constructor(http) {
        this.http = http;
        this.baseUrl = '/searchmulti';
        this.queryUrl = '?search=';
    }
    searchEntries(term) {
        return this.http
            .get(this.baseUrl + this.queryUrl + term);
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tJs4":
/*!*******************************************************************!*\
  !*** ./src/app/components/moviedetails/moviedetails.component.ts ***!
  \*******************************************************************/
/*! exports provided: MoviedetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviedetailsComponent", function() { return MoviedetailsComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _moviedetails_component_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moviedetails.component.service */ "QvVo");
/* harmony import */ var _commondetails_commondetails_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commondetails/commondetails.component */ "9uF1");






class MoviedetailsComponent {
    constructor(route, service, bo) {
        this.route = route;
        this.service = service;
        this.bo = bo;
        this.continuelisttemp = JSON.parse(localStorage.getItem('continuewatch'));
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.service.MovieDetails(this.id).subscribe(response => {
            this.results = response;
        });
        this.service.MovieCastCrewDetails(this.id).subscribe(response => {
            this.castcrew = response;
        });
        this.service.MovieReviews(this.id).subscribe(response => {
            this.reviews = response;
        });
        this.service.MovieRecommend(this.id).subscribe(response => {
            this.recommend = response;
            this.bo.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset])
                .subscribe((bs) => {
                if (bs.matches) {
                    var mobileresults = new Array();
                    for (var i = 0; i < this.recommend.length; i++) {
                        for (var j = 0; j < this.recommend[i].length; j++) {
                            mobileresults.push([this.recommend[i][j]]);
                        }
                    }
                    this.recommend = mobileresults;
                }
            });
        });
        this.service.MovieSimilar(this.id).subscribe(response => {
            this.similar = response;
            this.bo.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset])
                .subscribe((bs) => {
                if (bs.matches) {
                    var mobileresults = new Array();
                    for (var i = 0; i < this.similar.length; i++) {
                        for (var j = 0; j < this.similar[i].length; j++) {
                            mobileresults.push([this.similar[i][j]]);
                        }
                    }
                    this.similar = mobileresults;
                }
            });
        });
        for (var i = 0; i < this.continuelisttemp.length; i++) {
            if (this.continuelisttemp[i]['id'] == this.id && this.continuelisttemp[i]['media_type'] == 'movie') {
                this.continuelisttemp.splice(i, 1);
                break;
            }
        }
        if (this.continuelisttemp.length == 24) {
            this.continuelisttemp.pop();
        }
        this.continuelisttemp.unshift({ 'id': this.id, 'media_type': 'movie' });
        localStorage.setItem('continuewatch', JSON.stringify(this.continuelisttemp));
        // console.log(JSON.parse(localStorage.getItem('continuewatch')))
    }
}
MoviedetailsComponent.ɵfac = function MoviedetailsComponent_Factory(t) { return new (t || MoviedetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_moviedetails_component_service__WEBPACK_IMPORTED_MODULE_3__["MovieDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"])); };
MoviedetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MoviedetailsComponent, selectors: [["app-moviedetails"]], decls: 1, vars: 7, consts: [[3, "details", "castcrew", "reviews", "similar", "recommend", "mediatype", "carouselid"]], template: function MoviedetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-commondetails", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("details", ctx.results)("castcrew", ctx.castcrew)("reviews", ctx.reviews)("similar", ctx.similar)("recommend", ctx.recommend)("mediatype", "movie")("carouselid", "moviedetail");
    } }, directives: [_commondetails_commondetails_component__WEBPACK_IMPORTED_MODULE_4__["CommondetailsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3ZpZWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _components_moviedetails_moviedetails_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/moviedetails/moviedetails.component */ "tJs4");
/* harmony import */ var _components_tvdetails_tvdetails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tvdetails/tvdetails.component */ "meM1");
/* harmony import */ var _components_mylists_mylists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mylists/mylists.component */ "oJe0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"] },
    { path: 'watch/movie/:id', component: _components_moviedetails_moviedetails_component__WEBPACK_IMPORTED_MODULE_2__["MoviedetailsComponent"] },
    { path: 'watch/tv/:id', component: _components_tvdetails_tvdetails_component__WEBPACK_IMPORTED_MODULE_3__["TvdetailsComponent"] },
    { path: 'mylist', component: _components_mylists_mylists_component__WEBPACK_IMPORTED_MODULE_4__["MylistsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yK87":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/homepage/carousel-toprated-tv/carousel-toprated-tv.component.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: CarouselTopratedTVService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselTopratedTVService", function() { return CarouselTopratedTVService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CarouselTopratedTVService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = '/topratedtv';
    }
    getPosts() {
        return this.httpClient.get(this.url);
    }
}
CarouselTopratedTVService.ɵfac = function CarouselTopratedTVService_Factory(t) { return new (t || CarouselTopratedTVService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CarouselTopratedTVService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CarouselTopratedTVService, factory: CarouselTopratedTVService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zEat":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/homepage/carousel-toprated/carousel-toprated.component.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: CarouselTopratedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselTopratedService", function() { return CarouselTopratedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CarouselTopratedService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = '/topratedmovies';
    }
    getPosts() {
        return this.httpClient.get(this.url);
    }
}
CarouselTopratedService.ɵfac = function CarouselTopratedService_Factory(t) { return new (t || CarouselTopratedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CarouselTopratedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CarouselTopratedService, factory: CarouselTopratedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map