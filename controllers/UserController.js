const User = require("../models/UserModel");

module.exports.addToLikedMovies = async(req, res) => {
    try {
        const { email, data } = req.body;
        const user = await User.findOne({ email });
        if(user) {
            const { likedMovies } = user;
            const moviesAlreadyLiked = likedMovies.find(({ id }) => (id === data.id));
            if(!moviesAlreadyLiked) {
                await User.findByIdAndUpdate(user._id, {
                    likedMovies: [...user.likedMovies, data],
                },
                { new: true }
                );
            } else return res.status(201).json({ message: "Movies already added to the liked list" })
        } else await User.create({ email, likedMovies: [data] });
        return res.status(200).json({ message: "Movies added successfully" });
    } catch(error) {
        return res.status(400).json({
            message: "Error adding movies"
        });
    }
}

module.exports.getLikedMovies = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await User.findOne({ email });
        if(user) {
            res.status(201).json({ 
                message: "Success",
                movies: user.likedMovies
            });
        } else {
            return res.status(201).json({ message: "User with given email not found" });
        }
    } catch (error) {
        return res.status(400).json({ message: "Error fetching movie" })
    }
}

module.exports.removeFromLikedMovies = async (req, res) => {
    try {
        const { email, movieId } = req.body;
        const user = await User.findOne({ email });
        if(user) {
            const { likedMovies } = user;
            const movieIndex = likedMovies.findIndex(({ id }) => id === movieId);
            if(movieIndex === -1) {
                res.status(400).send({ message: "Movie not found" });
            }
            likedMovies.splice(movieIndex, 1);

            await User.findByIdAndUpdate(
                user._id,
                {
                    likedMovies
                },
                { new: true }
            );
            return res.json({ message: "Movie successfully removed", movies: likedMovies });
        } else return res.json({ message: "User with given email not found" });
    } catch(err) {
        return res.status(400).json({ message: "Error deleting movies from liked list" });
    }
}