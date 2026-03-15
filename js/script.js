document.addEventListener('DOMContentLoaded', () => {
    console.log('CineRate Initialized');

    // --- Step 4: Movie Data System ---
    const movies = [
        {
            id: 1,
            title: "John Wick: Chapter 4",
            genre: "Action",
            year: 2023,
            rating: 4.8,
            poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
            description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy.",
            cast: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård"],
            director: "Chad Stahelski",
            trailer: "https://www.youtube.com/embed/qEVUtrs8cv4"
        },
        {
            id: 2,
            title: "Oppenheimer",
            genre: "Drama",
            year: 2023,
            rating: 4.9,
            poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
            description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
            cast: ["Cillian Murphy", "Emily Blunt", "Robert Downey Jr."],
            director: "Christopher Nolan",
            trailer: "https://www.youtube.com/embed/uYPbbksJxIg"
        },
        {
            id: 3,
            title: "Spider-Man: Across the Spider-Verse",
            genre: "Animation",
            year: 2023,
            rating: 4.7,
            poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1974&auto=format&fit=crop",
            description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
            cast: ["Shameik Moore", "Hailee Steinfeld", "Oscar Isaac"],
            director: "Joaquim Dos Santos",
            trailer: "https://www.youtube.com/embed/shW9i6k8cB0"
        },
        {
            id: 4,
            title: "Inception",
            genre: "Sci-Fi",
            year: 2010,
            rating: 4.8,
            poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
            cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
            director: "Christopher Nolan",
            trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
        },
        {
            id: 5,
            title: "The Batman",
            genre: "Action",
            year: 2022,
            rating: 4.6,
            poster: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?q=80&w=2037&auto=format&fit=crop",
            description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
            cast: ["Robert Pattinson", "Zoë Kravitz", "Jeffrey Wright"],
            director: "Matt Reeves",
            trailer: "https://www.youtube.com/embed/mqqft2x_Aa4"
        },
        {
            id: 6,
            title: "Dune",
            genre: "Sci-Fi",
            year: 2021,
            rating: 4.5,
            poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=2070&auto=format&fit=crop",
            description: "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset.",
            cast: ["Timothée Chalamet", "Rebecca Ferguson", "Zendaya"],
            director: "Denis Villeneuve",
            trailer: "https://www.youtube.com/embed/n9xhJrPXop4"
        },
        {
            id: 7,
            title: "Interstellar",
            genre: "Sci-Fi",
            year: 2014,
            rating: 4.9,
            poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
            director: "Christopher Nolan",
            trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
        },
        {
            id: 8,
            title: "The Dark Knight",
            genre: "Action",
            year: 2008,
            rating: 5.0,
            poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop",
            description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests.",
            cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
            director: "Christopher Nolan",
            trailer: "https://www.youtube.com/embed/EXeTwQWaywY"
        },
        {
            id: 9,
            title: "Everything Everywhere All at Once",
            genre: "Adventure",
            year: 2022,
            rating: 4.7,
            poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop",
            description: "A middle-aged Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes.",
            cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"],
            director: "Daniel Kwan",
            trailer: "https://www.youtube.com/embed/wxN1T1uxQ2g"
        },
        {
            id: 10,
            title: "Blade Runner 2049",
            genre: "Sci-Fi",
            year: 2017,
            rating: 4.4,
            poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
            description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.",
            cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
            director: "Denis Villeneuve",
            trailer: "https://www.youtube.com/embed/gCcx85zbxz4"
        },
        {
            id: 11,
            title: "The Godfather",
            genre: "Crime",
            year: 1972,
            rating: 4.9,
            poster: "https://images.unsplash.com/photo-1542204172-132d73f458cb?q=80&w=2138&auto=format&fit=crop",
            description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            cast: ["Marlon Brando", "Al Pacino", "James Caan"],
            director: "Francis Ford Coppola",
            trailer: "https://www.youtube.com/embed/sY1S34973zA"
        },
        {
            id: 12,
            title: "Top Gun: Maverick",
            genre: "Action",
            year: 2022,
            rating: 4.5,
            poster: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070&auto=format&fit=crop",
            description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past.",
            cast: ["Tom Cruise", "Jennifer Connelly", "Miles Teller"],
            director: "Joseph Kosinski",
            trailer: "https://www.youtube.com/embed/giXcoNkqwYY"
        }
    ];

    // Smooth navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'py-2');
            navbar.classList.remove('py-3');
        } else {
            navbar.classList.remove('shadow-lg', 'py-2');
            navbar.classList.add('py-3');
        }
    });

    // Make movies available globally for other steps
    window.movieData = movies;

    // --- Step 5: Movie Card UI & Rendering ---
    const movieGrid = document.getElementById('movieGrid');

    function renderMovies(movieList) {
        movieGrid.innerHTML = '';

        movieList.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'col-6 col-md-4 col-lg-3';
            card.innerHTML = `
                <div class="movie-card" data-id="${movie.id}">
                    <div class="poster-container">
                        <div class="rating-badge">
                            <i class="fas fa-star"></i> ${movie.rating}
                        </div>
                        <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
                        <div class="card-overlay d-flex flex-column gap-2 justify-content-center p-3">
                            <button class="btn btn-primary-red btn-sm w-full py-2 font-bold detail-btn">
                                VIEW DETAILS
                            </button>
                            <button class="btn btn-glass btn-sm w-full py-2 font-bold rate-btn" data-id="${movie.id}" data-title="${movie.title}">
                                <i class="fas fa-star mr-1"></i> RATE
                            </button>
                        </div>
                    </div>
                    <div class="movie-info">
                        <h3 class="movie-title">${movie.title}</h3>
                        <div class="movie-meta">
                            <span>${movie.year}</span>
                            <span class="genre-tag">${movie.genre}</span>
                        </div>
                    </div>
                </div>
            `;
            movieGrid.appendChild(card);
        });
    }

    // Initial Render
    renderMovies(movies);

    // --- Step 6: Interactive Star Rating System Logic ---
    const ratingModalOverlay = document.getElementById('ratingModalOverlay');
    const closeRatingModal = document.getElementById('closeRatingModal');
    const ratingMovieTitle = document.getElementById('ratingMovieTitle');
    const stars = document.querySelectorAll('.rating-star');
    const ratingValueDisplay = document.getElementById('ratingValueDisplay');
    const submitRatingBtn = document.getElementById('submitRatingBtn');
    const toastNotification = document.getElementById('toastNotification');
    const toastMessage = document.getElementById('toastMessage');
    
    let currentRating = 0;
    let selectedMovieId = null;

    // Open Modal
    document.addEventListener('click', (e) => {
        const rateBtn = e.target.closest('.rate-btn');
        if (rateBtn) {
            selectedMovieId = rateBtn.dataset.id;
            ratingMovieTitle.textContent = rateBtn.dataset.title;
            ratingModalOverlay.classList.add('active');
            resetStars();
        }
    });

    // Close Modal
    closeRatingModal.addEventListener('click', () => {
        ratingModalOverlay.classList.remove('active');
    });

    // Close on outside click
    ratingModalOverlay.addEventListener('click', (e) => {
        if (e.target === ratingModalOverlay) {
            ratingModalOverlay.classList.remove('active');
        }
    });

    // Star Hover and Click Logic
    stars.forEach(star => {
        star.addEventListener('click', () => {
            currentRating = parseInt(star.dataset.value);
            updateStarClasses('active', currentRating);
            ratingValueDisplay.textContent = currentRating;
            submitRatingBtn.disabled = false;
        });

        star.addEventListener('mouseenter', () => {
            updateStarClasses('hover', parseInt(star.dataset.value));
            ratingValueDisplay.textContent = star.dataset.value;
        });

        star.addEventListener('mouseleave', () => {
            stars.forEach(s => s.classList.remove('hover'));
            ratingValueDisplay.textContent = currentRating;
        });
    });

    function updateStarClasses(className, rating) {
        stars.forEach(s => {
            if (parseInt(s.dataset.value) <= rating) {
                s.classList.add(className);
            } else {
                s.classList.remove(className);
            }
        });
    }

    function resetStars() {
        currentRating = 0;
        stars.forEach(s => {
            s.classList.remove('active');
            s.classList.remove('hover');
        });
        ratingValueDisplay.textContent = '0';
        submitRatingBtn.disabled = true;
    }

    // Submit Rating
    submitRatingBtn.addEventListener('click', () => {
        if (currentRating > 0 && selectedMovieId) {
            const movie = movies.find(m => m.id == selectedMovieId);
            if (movie) {
                // simple math to update average
                const oldRating = parseFloat(movie.rating);
                movie.rating = ((oldRating + parseInt(currentRating)) / 2).toFixed(1);
                
                // Re-render movies to show new rating
                renderMovies(movies);
                
                // Close modal and show toast
                ratingModalOverlay.classList.remove('active');
                showToast(`You rated ${movie.title} ${currentRating} stars!`);
            }
        }
    });

    function showToast(message) {
        toastMessage.textContent = message;
        toastNotification.classList.add('show');
        setTimeout(() => {
            toastNotification.classList.remove('show');
        }, 3000);
    }
});
