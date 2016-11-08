declare var ko: any;

namespace BryanPorter.Services {
	interface IPostService {
		getAllPosts() : Array<IPost>;
	}

	interface IPost {
		id: string;
		title: string;
		body: string;
	}

	class PostService implements IPostService {
		private _posts: Array<Post>;

		public getAllPosts() : Array<IPost> {
			let returnValue: Array<IPost> = [
				{id: "1234", title: "Test Post #1", body: "Hello World!"},
				{id: "4321", title: "Test Post #2", body: "Hello World Again!"}
			];

			return returnValue;
		}
	};

	class Post implements IPost {
		id: string
		title: string
		body: string
	};

	class HomePageViewModel {
		posts: ko.observableArray<IPost>;

		constructor(selectedPosts: Array<IPost>) {
			this.posts = ko.observableArray(selectedPosts);
		}
	}

	let postService: PostService = new PostService()
	let hpvm: HomePageViewModel = new HomePageViewModel(postService.getAllPosts())

	ko.applyBindings(hpvm);
}
