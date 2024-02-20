import GameCard from './components/GameCard';

const gamesList = [
    {
        id: 0,
        name: "Baldur's Gate 3",
        rating: null,
        category: 'Roleplay Strategy',
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg',
    },
    {
        id: 1,
        name: 'Talisman',
        rating: null,
        category: 'Deck Building',
        image: 'https://cf.geekdo-images.com/c_GmyHR6gi9ZCkIQaSL0ZA__opengraph/img/wCkkSF0TijSYmH6Ejh0BmyfeP1M=/0x0:2000x1050/fit-in/1200x630/filters:strip_icc()/pic1691099.jpg',
    },
    {
        id: 2,
        name: 'WoW Ascension',
        rating: null,
        category: 'Roleplay MMO',
        image: 'https://staticdelivery.nexusmods.com/mods/1416/images/headers/840_1600224455.jpg',
    },
    {
        id: 3,
        name: 'Battlefield 2042',
        rating: null,
        category: 'FPS Shooter',
        image: 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/images/2021/04/k-1920x1080-featured-image.jpg.adapt.crop191x100.1200w.jpg',
    },
    {
        id: 4,
        name: 'Star Wars: The Old Republic',
        rating: null,
        category: 'Roleplay MMO',
        image: 'https://swtorista.com/articles/wp-content/uploads/2023/08/what-to-expect-7.3.1.jpg',
    },
    {
        id: 5,
        name: 'Call of Duty: MW2',
        rating: null,
        category: 'FPS Shooter',
        image: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/01/Call-of-Duty-Modern-Warfare-2-3-1-920x522.jpg',
    },
    {
        id: 6,
        name: "Ember's Adrift",
        rating: null,
        category: 'Roleplay MMO',
        image: 'https://downloads.embersadrift.com/screenshots/Embers-Adrift-48.jpg',
    },
    {
        id: 7,
        name: 'Fortnite',
        rating: null,
        category: 'MMO Shooter',
        image: 'https://imageio.forbes.com/specials-images/imageserve/603baf25e1d15666937dd768/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds',
    },
    {
        id: 8,
        name: 'Pantheon: Rise of the Fallen',
        rating: null,
        category: 'Roleplay MMO',
        image: 'https://cdn.mmohuts.com/wp-content/uploads/2017/01/Pantheon_Rise_of_the_Fallen_604x423.jpg',
    },
    {
        id: 9,
        name: "New World",
        rating: null,
        category: 'Roleplay MMO',
        image: 'https://images.ctfassets.net/j95d1p8hsuun/5nHHiVu6cWgYlHQ9NObjep/155b33fd23d29adb510ee430e434f836/NW_HOM_WEB_580x330.jpg',
    },
    {
        id: 10,
        name: "Cyberpunk 2077",
        rating: null,
        category: 'MMO Shooter/RPG',
        image: 'https://i.ytimg.com/vi/8X2kIfS6fb8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCYa1CU_713f145VUB0Qy8MJ6JuSQ',
    },
    {
        id: 11,
        name: "Skyrim",
        rating: null,
        category: 'Roleplay MMO',
        image: 'https://i.ytimg.com/vi/aQeIYVM3YBM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEUgXShlMA8=&rs=AOn4CLBGgtGqXClpJYH-GEWvcafqP5pO4g',
    },
];

function App() {
    return (
        <div className='container-xl py-3 bg-success-subtle'>
            <h1 className='text-center mb-5'><u>My Games List:</u></h1>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3 justify-content-evenly'>
                {gamesList.map(game => (
                    <GameCard game={game} key={game.id} />
                ))}
            </div>
        </div>
    );
}

export default App;
