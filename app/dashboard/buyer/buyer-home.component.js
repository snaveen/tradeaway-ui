"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../service/user.service");
var BuyerHomeComponent = (function () {
    function BuyerHomeComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.user = { 'userName': '', 'password': '' };
    }
    BuyerHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var id = params['id'];
            var type = params['type'];
            if (!id) {
                return;
            }
            _this.userService.getUser(type, id)
                .subscribe(function (user) {
                _this.user = user;
            }, function (error) {
                //invalid user
                _this.router.navigate(['signin']);
            });
        });
    };
    BuyerHomeComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout(this.user.userName, this.user.password)
            .subscribe(function (data) {
            _this.router.navigate(['signin']);
        }, function (error) {
            console.error(error);
            _this.router.navigate(['signin']);
        });
    };
    return BuyerHomeComponent;
}());
BuyerHomeComponent = __decorate([
    core_1.Component({
        selector: 'buyer-home-cmp',
        moduleId: module.id,
        templateUrl: 'buyer-home.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router,
        router_1.ActivatedRoute])
], BuyerHomeComponent);
exports.BuyerHomeComponent = BuyerHomeComponent;
//# sourceMappingURL=buyer-home.component.js.map