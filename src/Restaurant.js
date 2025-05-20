class Restaurant {
    constructor(name, location, cuisine) {
        this.name = name;
        this.location = location;
        this.cuisine = cuisine;
        this.reviews = [];
    }

    // loadReviews() {
    //     // Simulate loading reviews from a database or API
    //     this.reviews = [
    //         { id: 1, rating: 5, comment: "Excellent food!" },
    //         { id: 2, rating: 4, comment: "Great service!" },
    //         { id: 3, rating: 3, comment: "Average experience." }
    //     ];
    // }

    addReview(review) {
        this.reviews.push(review);
    }
}