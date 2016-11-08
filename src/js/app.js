var ko;
var BryanPorter;
(function (BryanPorter) {
    var Services;
    (function (Services) {
        var PostService = (function () {
            function PostService() {
            }
            PostService.prototype.getAllPosts = function () {
                var returnValue = [
                    { id: "1234", title: "Test Post #1", body: "Hello World!" },
                    { id: "4321", title: "Test Post #2", body: "Hello World Again!" }
                ];
                return returnValue;
            };
            return PostService;
        }());
        ;
        var Post = (function () {
            function Post() {
            }
            return Post;
        }());
        ;
        var HomePageViewModel = (function () {
            function HomePageViewModel(selectedPosts) {
                this.posts = selectedPosts;
            }
            return HomePageViewModel;
        }());
        var postService = new PostService();
        var hpvm = new HomePageViewModel(postService.getAllPosts());
        ko.applyBindings(hpvm);
    })(Services = BryanPorter.Services || (BryanPorter.Services = {}));
})(BryanPorter || (BryanPorter = {}));
//# sourceMappingURL=app.js.map